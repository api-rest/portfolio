import { Request, Response } from 'express';
import { PortfolioModel } from '../model/portfolio.model';


export const portfolioController = {
    //GET whole portfolio
    getPortfolio:(req:Request, res:Response):void => {
        const response = PortfolioModel.getPortfolio();
        console.log(response);
        res.json({portfolio:response})
    },

     //GET all projects
    getProjects:(req:Request, res:Response):void => {
        const response = PortfolioModel.getProjects();
        console.log(response);
        res.json({projects:response})
    },

     //GET 1 project
    getProject:(req:Request, res:Response)=> {
        const project = PortfolioModel.getProject(req.params.name);
        console.log(project);
        res.json({projects:project})
    },
   

    //POST - no funciona
    addProject:(req:Request, res:Response) =>{
        
        const {name, description, url, highlights, keywords, roles, startDate, endDate, displayName, website,
        summary, languages, libraries, githubUrl, repositoryUrl, images, videos} = req.body
        
        const newProject = PortfolioModel.addProject(name, description, url, highlights, keywords, roles, startDate, endDate, displayName, website,
            summary, languages, libraries, githubUrl, repositoryUrl, images, videos)
        
            console.log(newProject);
        res.status(200).send(newProject)        
    },
        
    //PUT 
    updateProject:(req:Request, res:Response):void =>{

    },


   //DELETE 
   deleteProject:(req:Request, res:Response):void =>{
    
   }
       
    }
 