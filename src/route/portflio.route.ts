import { Router } from "express";
import { portfolioController } from '../controller/portfolio.controller'

const router = Router();
router.get('/portfolio', portfolioController.getPortfolio)