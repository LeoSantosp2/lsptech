import { Router } from "express";

const router = Router()

import registerController from "../controllers/registerController";

import loginRequired from '../middlewares/loginRequired'

router.get('/', registerController.index)
router.post('/', registerController.store)
router.delete('/:id', loginRequired, registerController.delete)

export default router