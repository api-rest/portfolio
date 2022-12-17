import myJson from './data.json'
import fs from 'fs';

const json_portfolio = fs.readFileSync('src/model/data.json', 'utf-8');
let portfolio = JSON.parse(json_portfolio);

interface Project {
    "name":string,
    "description": string,
    "url": string,
    "highlights": string[],
    "keywords": string[],
    "roles": string[],
    "startDate": Date,
    "endDate": Date,
    "displayName": string,
    "website": string,
    "summary": string,
    "languages": string[],
    "libraries": string[],
    "githubUrl": string,
    "repositoryUrl": string,
    "images": Image[], 
    "videos": Video[]
}

interface Image{
    "micro": {
        "url": string,
        "size": number,
        "width": number,
        "height": number
    },
    "thumbnail": {
        "url": string,
        "size": number,
        "width": number,
        "height": number
    },
    "mobile": {
        "url": string,
        "size": number,
        "width": number,
        "height": number
    },
    "desktop": {
        "url": string,
        "size": number,
        "width": number,
        "height": number
    }
}

interface Video {
    "url": string,
    "source": string,
    "sourceId": string
}


export class PortfolioModel {

    static getPortfolio(){
        return myJson;
    }

    static getProjects(){
        return myJson.projects;
    }
    static getProject(position: string){
        return myJson.projects[Number(position)];
    }

    static newProject(project: Project){
        portfolio.projects.push(project);
        const json_portfolio = JSON.stringify(portfolio);
        fs.writeFileSync('src/model/data.json', json_portfolio, 'utf-8');

    }
    static editProject(position: number, project: Project){
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
