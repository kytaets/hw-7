import {Router} from 'express';
import OrdersController from '../controllers/ordersController.js'


const ordersRouter = new Router();

ordersRouter.delete('/:id', OrdersController.delete)


export default  ordersRouter