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

    static getProject(id: number) {
        const project = myJson.projects.find(p => p.id === id)
        return project;
    }

    saveProject(position: number, project: Project){

        // //PUT
        // if(position){
        //     myJson.projects.splice(position, 1, project)
        // }else {
        //     //POST
        //     myJson.projects.push(project)
        // }
        
        
    }
    deleteProject(position: number){
        myJson.projects.splice(position,1)
    }


}
