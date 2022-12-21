import fs from 'fs';
import { IProject, IImage, IVideo} from './interfaces.model'

let json_portfolio;
export let portfolio: any;

if (process.env.NODE_ENV !== 'production') {
    json_portfolio = fs.readFileSync('src/model/dataTesting.json', 'utf-8');
    portfolio = JSON.parse(json_portfolio);
}else {
    json_portfolio = fs.readFileSync('src/model/data.json', 'utf-8');
    portfolio = JSON.parse(json_portfolio);
}



export class PortfolioModel {

    getPortfolio(){
        if (Object.entries(portfolio).length) {
            return portfolio; 
        }else {
            return `Error: Database empty`
        }
    }
    getProjects(){
        if (Object.entries(portfolio).length){
            return portfolio.projects;
        }else {
            return `Error: Database empty`
        }
    }
    getProject(position: string){
        if (Object.entries(portfolio).length) {
            if (portfolio.projects[Number(position)]){
                return portfolio.projects[Number(position)];
            }
        }else {
            return `Error: Database empty`
        }
        
    }
    getProjectByLanguage(language: string){

        if (Object.entries(portfolio).length) {
            let filteredProjectsByLanguage:any[] = [];
                portfolio.projects.forEach( (element: any) =>{
            if ((element.languages != undefined) && element.languages.includes(language)) {
                filteredProjectsByLanguage.push(element);
            }
        })
        return filteredProjectsByLanguage;
        }else {
            return JSON.stringify('')
        }

        
    }
    newProject(project: IProject){
        portfolio.projects.push(project);
        const json_portfolio = JSON.stringify(portfolio);
        fs.writeFileSync('src/model/data.json', json_portfolio, 'utf-8');
    }
    editProject(position: number, project: IProject){

        if(Object.entries(portfolio).length){
            portfolio.projects.splice(position, 1, project);
            const json_portfolio = JSON.stringify(portfolio);
            fs.writeFileSync('src/model/data.json', json_portfolio, 'utf-8');
        }

    }
    deleteProject(position: number){
        if(Object.entries(portfolio).length) {
            portfolio.projects.splice(position,1);
            const json_portfolio = JSON.stringify(portfolio);
            fs.writeFileSync('src/model/data.json', json_portfolio, 'utf-8');
        }

    }


}
