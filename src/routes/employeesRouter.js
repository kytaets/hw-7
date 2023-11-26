import {Router} from 'express';
import EmployeesController from '../controllers/employeesController.js'


const employeeRouter = new Router();

employeeRouter.patch('/:id', EmployeesController.patch)


export default employeeRouter