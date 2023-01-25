import { Router } from "express";

const router = Router()

import HomeController from '../controllers/homeController'

router.get('/', HomeController.index)

export default router