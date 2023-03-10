import { Request, Response } from 'express';
import { PortfolioModel } from '../model/portfolio.model';
import {portfolio} from '../model/portfolio.model'

const modelPortfolio = new PortfolioModel;

export const portfolioController = {
    getPortfolio: async (req:Request, res:Response)=> {
        const response = modelPortfolio.getPortfolio();
        if (portfolio != undefined) {
            try {
                console.log("Portfolio showed");
                res.json({portfolio:response})
            } catch (error){
                console.log(error);
                return res.status(500).send("Error on server")
            }
        }else {
            res.status(404).send(`Error: There is no portfolio`)
        }
    },

    getProjects: async(req:Request, res:Response) => {
        const response = modelPortfolio.getProjects();
        if (portfolio != undefined) {
            try {
                console.log("All projects showed");
                res.json({projects:response})
            } catch {
                res.status(500).send("Error on server")
            }
         }else {
            res.status(404).send(`Error: There are no projects`)
        }
    },

    getProject: (req:Request, res:Response) => {
        const response = modelPortfolio.getProject(req.params.id);
        if (portfolio.projects.length) {
            if (Number(req.params.id) < portfolio.projects.length) {
                    console.log(`Project in position ${req.params.id} showed`);
                    res.json({project:response}) }
            else {res.status(400).send(`Project in position ${req.params.id} does not exist`)}
        }else {
            res.status(404).send(`Error: Database is empty`)
        }
        
    },


    getProjectsByLanguage: (req:Request, res:Response) => {
        const language = req.params.language;
        const response = modelPortfolio.getProjectByLanguage(language);

        if(!portfolio.projects.length)
            {res.status(400).send('There are no projects in this portfolio')}
        else if (!response.length) 
            {res.status(400).send(`There is no project in ${language} language`)
            console.log(`There is no project in ${language}`)}            
        else {res.status(200).send(response)
        console.log(`Showing projects in ${language}`)}                 
        },


    newProject: (req:Request, res:Response) => {
        const { name, description, url, highlights, keywords, roles, startDate, endDate, displayName, website, summary, languages, libraries, githubUrl, repositoryUrl, images, videos } = req.body;

        if (!name || !displayName || !description || !summary || !languages || !githubUrl || !images) { 
            res.status(400).send("Entries must have a name, a display name, a summary, a description, the languages used in the project, a GitHub URL and at least 1 image");
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
       
        modelPortfolio.newProject(newProject);
        console.log(`New project entered with name ${displayName}`);
        res.status(201).send(`New project entered}`); //201 is the status for creating an object successfully
        },
        
   
    editProject: (req:Request, res:Response)=> {

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

        const id= Number(req.params.id); 
        portfolio.projects.forEach((element: any)=>{
            if (portfolio.projects[id]) {
                modelPortfolio.editProject(id, editedProject);
                console.log(`Project in position ${id} has been edited`);
                res.status(200).send(`Project in position ${id} has been edited`); 
            }else {
                res.status(404).send('Error: Server can not find the requested project')
            }  
        })
    },


    deleteProject: (req:Request, res:Response) => {
        const id = Number(req.params.id);
        if (portfolio.projects[id]) {
            modelPortfolio.deleteProject(id);
            console.log(`Project in position ${req.params.id} has been deleted`);
            res.status(200).send(`Project in position ${req.params.id} has been deleted`);
        } else {
            res.status(404).send('Error: Server can not find the requested project')
        }
    }
} 