import { Request, Response } from 'express';
import { PortfolioModel } from '../model/portfolio.model';
import myJson from '../model/data.json'

export const portfolioController = {
    getPortfolio: async (req:Request, res:Response)=> {
        const response = PortfolioModel.getPortfolio();
        try {
            console.log("Portfolio showed");
            res.json({portfolio:response})
        } catch (error){
            console.log(error);
            return res.status(500).send("Error on server")
        }
    },

    getProjects: async(req:Request, res:Response) => {
        const response = PortfolioModel.getProjects();
        try {
            console.log("All projects showed");
            res.json({projects:response})
        } catch {
            res.status(500).send("Error on server")
        }
    },

    getProject: (req:Request, res:Response) => {
        const response = PortfolioModel.getProject(req.params.id);
        let accumulator:number =0;
        myJson.projects.forEach(element => accumulator++)
        if (Number(req.params.id) < accumulator) {
                console.log(`Project in position ${req.params.id} showed`);
                res.json({project:response}) }
        else {res.status(400).send(`Project in position ${req.params.id} does not exist`)}
    },


    getProjectsByLanguage: (req:Request, res:Response) => {
        const language = req.params.language;
        const response = PortfolioModel.getProjectByLanguage(language);

        if(!myJson.projects.length)
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
       
        PortfolioModel.newProject(newProject);
        console.log(`New project entered with name ${displayName}`);
        res.status(201).send(`New project entered with name ${displayName}`); //201 is the status for creating an object successfully
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
    myJson.projects.forEach(element=>{
    if (myJson.projects[id]) {
        PortfolioModel.editProject(id, editedProject);
        console.log(`Project in position ${id} has been edited`);
        res.status(200).send(`Project in position ${id} has been edited`); 
    } 
    else {res.status(400).send('Please edit an existing project')}  
    })
    },


    deleteProject: (req:Request, res:Response) => {
        const id = Number(req.params.id);
        if (myJson.projects[id]) {
            PortfolioModel.deleteProject(id);
            console.log(`Project in position ${req.params.id} has been deleted`);
            res.status(200).send(`Project in position ${req.params.id} has been deleted`);
        } else {
            res.status(400).send('Please delete an existing project')
        }
    }
} 