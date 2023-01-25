import { Router } from "express";

const router = Router()

import discountController from '../controllers/discountController'

router.get('/', discountController.index)
router.post('/', discountController.store)
router.delete('/:id', discountController.delete)
router.put('/:id', discountController.update)

export default router