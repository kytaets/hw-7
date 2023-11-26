import {Router} from 'express';
import CustomersController from '../controllers/customersController.js'


const customerRouter = new Router();

customerRouter.get('/:id/orders', CustomersController.get)


export default customerRouter;