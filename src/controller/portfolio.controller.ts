import { Request, Response } from 'express';
import { PortfolioModel } from '../model/portfolio.model';


export const portfolioController = {
    getPortfolio:(req:Request, res:Response):void => {
        const response = PortfolioModel.getPortfolio();
        console.log(response);
        res.json({portfolio:response})
    }

    // getProjects() {
        
    // }
    // getProject(position: number) {
        
    // }

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