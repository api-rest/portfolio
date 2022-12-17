import { Request, Response } from 'express';
import { PortfolioModel } from '../model/portfolio.model';


export const portfolioController = {
    getPortfolio:(req:Request, res:Response):void => {
        const response = PortfolioModel.getPortfolio();
        console.log(response);
        res.json({portfolio:response})
    },

    getProjects:(req:Request, res:Response):void => {
        const response = PortfolioModel.getProjects();
        console.log(response);
        res.json({projects:response})
    },

    getProject:(req:Request, res:Response)=> {
        const project = PortfolioModel.getProject(req.params.id);
        console.log(project);
        return (project !=null)
         ? res.send(project)
         : res.sendStatus(404)
        }
    }

    // saveProject(position: number, project: Project){

    //     //PUT
    //     if(position){
            
    //     }else {
    //         //POST
            
    //     }
        
        
    // }
    // deleteProject(position: number){
       
    // }
} 