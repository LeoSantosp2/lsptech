import { Router } from "express";

const router = Router()

import PriceController from '../controllers/priceController'

router.get('/', PriceController.index)
router.post('/', PriceController.store)
router.put('/:id', PriceController.update)

export default router