import { Router } from "express";
import { portfolioController } from '../controller/portfolio.controller'

const router = Router();

//Get
router.get('/portfolio', portfolioController.getPortfolio)

export default router;