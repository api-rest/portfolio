import myJson from './data.json'
import fs from 'fs';
import { IProject, IImage, IVideo} from './interfaces.model'

const json_portfolio = fs.readFileSync('src/model/data.json', 'utf-8');
let portfolio = JSON.parse(json_portfolio);


export class PortfolioModel {

    static getPortfolio(){
        return myJson;
    }
    static getProjects(){
        return myJson.projects;
    }
    static getProject(position: string){
       if (myJson.projects[Number(position)]){
        return myJson.projects[Number(position)];
    }
    }
    static getProjectByLanguage(language: string){
        let filteredProjectsByLanguage:any[] = [];
        myJson.projects.forEach( element =>{
            if ((element.languages != undefined) && element.languages.includes(language)) {
                filteredProjectsByLanguage.push(element);
            }
        })
        return filteredProjectsByLanguage;
    }
    static newProject(project: IProject){
        portfolio.projects.push(project);
        const json_portfolio = JSON.stringify(portfolio);
        fs.writeFileSync('src/model/data.json', json_portfolio, 'utf-8');
    }
    static editProject(position: number, project: IProject){
        portfolio.projects.splice(position, 1, project);
        const json_portfolio = JSON.stringify(portfolio);
        fs.writeFileSync('src/model/data.json', json_portfolio, 'utf-8');
    }
    static deleteProject(position: number){
        portfolio.projects.splice(position,1);
        const json_portfolio = JSON.stringify(portfolio);
        fs.writeFileSync('src/model/data.json', json_portfolio, 'utf-8');
    }


}
