import myJson from './data.json'

interface Project {
    
}
export class portfolioModel {

    getPortfolio() {
        return myJson;
    }

    getProjects() {
        return myJson.projects;
    }
    getProject(position: number) {
        return myJson.projects[position];
    }

    saveProject(position: number, object: Project){

        //PUT
        if(position){
            myJson.projects.splice(position, 1, object)
        }else {
            //POST
            myJson.projects.push(object)
        }
        
        
    }
    deleteProject(position: number){
        myJson.projects.splice(position,1)
    }


}
