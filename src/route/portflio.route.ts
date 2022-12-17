import { Router } from "express";
import { portfolioController } from '../controller/portfolio.controller'

const router = Router();

//GET
router.get('/portfolio', portfolioController.getPortfolio);
router.get('/portfolio/project', portfolioController.getProjects);
router.get('/portfolio/project/:id', portfolioController.getProject);

//POST
router.post('/portfolio/project', portfolioController.newProject);

//PUT
router.put('/portfolio/project/:id', portfolioController.editProject);

//DELETE
router.delete('/portfolio/project/:id', portfolioController.deleteProject);


export default router;