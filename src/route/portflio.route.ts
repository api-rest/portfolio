import { Router } from "express";
import { portfolioController } from '../controller/portfolio.controller'

const router = Router();

//Get portfolio
router.get('/portfolio', portfolioController.getPortfolio)

//Get projects
router.get('/portfolio/projects', portfolioController.getProjects)

//Get project
router.get('/portfolio/projects/:name', portfolioController.getProject)

//Post new project
router.post('portfolio/projects', portfolioController.addProject)

export default router;