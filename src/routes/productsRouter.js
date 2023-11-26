import {Router} from 'express';
import ProductsController from '../controllers/productsController.js'

const productsRouter = new Router();

productsRouter.post('/', ProductsController.post);

export default productsRouter;