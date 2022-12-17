import { Request, Response } from 'express';
import { PortfolioModel } from '../model/portfolio.model';


export const portfolioController = {
    getPortfolio:(req:Request, res:Response):void => {
        const response = PortfolioModel.getPortfolio();
        console.log("Portfolio sent");
        res.json({portfolio:response})
    },
    getProjects:(req:Request, res:Response):void => {
        const response = PortfolioModel.getProjects();
        console.log("All projects sent");
        res.json({projects:response})
    },
    getProject: (req:Request, res:Response):void => {
        const response = PortfolioModel.getProject(req.params.id);
        console.log(`Project in position ${req.params.id} sent`);
        res.json({project:response})      
    },
    newProject: (req:Request, res:Response):void => {
        const { name, description, url, highlights, keywords, roles, startDate, endDate, displayName, website, summary, languages, libraries, githubUrl, repositoryUrl, images, videos } = req.body;

        if (!name || !displayName || !description || !summary) {
            res.status(400).send("Entries must have a name, a display name, a summary, and a description");
            return;
        }        

        const newProject = {
            name, 
            description, 
            url, 
            highlights, 
            keywords, 
            roles, 
            startDate, 
            endDate, 
            displayName, 
            website, 
            summary, 
            languages, 
            libraries, 
            githubUrl, 
            repositoryUrl, 
            images, 
            videos
        }

        PortfolioModel.newProject(newProject);
        console.log(`New project entered with name ${displayName}`);
        res.status(200).send(`New project entered with name ${displayName}`);
        
        
    },
    editProject: (req:Request, res:Response):void => {
        const { name, description, url, highlights, keywords, roles, startDate, endDate, displayName, website, summary, languages, libraries, githubUrl, repositoryUrl, images, videos } = req.body;   

        const editedProject = {
            name, 
            description, 
            url, 
            highlights, 
            keywords, 
            roles, 
            startDate, 
            endDate, 
            displayName, 
            website, 
            summary, 
            languages, 
            libraries, 
            githubUrl, 
            repositoryUrl, 
            images, 
            videos
        }

        PortfolioModel.editProject(Number(req.params.id), editedProject);
        console.log(`Project in position ${req.params.id} has been edited`);
        res.status(200).send(`Project in position ${req.params.id} has been edited`);

    },
    deleteProject: (req:Request, res:Response):void => {
        PortfolioModel.deleteProject(Number(req.params.id));
        console.log(`Project in position ${req.params.id} has been deleted`);
        res.status(200).send(`Project in position ${req.params.id} has been deleted`);
    }
} 