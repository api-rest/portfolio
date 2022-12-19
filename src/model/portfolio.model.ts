import { Url } from 'url'
import myJson from './data.json'

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

    static getPortfolio() {
        return myJson;
    }

    static getProjects() {
        return myJson.projects;
    }

    static getProject(name: string) {
        const project = myJson.projects.find(p => p.name === name)
        return project;
    }

    static addProject(newProject:Project):Project {
        
        myJson.projects.push(newProject)
                
        return newProject;
    }

    static updateProject(name:string, updatedProject:Project){
        myJson.projects != name
        const project = myJson.projects.find(p => p.name === name)
        return updatedProject
    }    

    static deleteProject(name:string){

    }    
    

}
