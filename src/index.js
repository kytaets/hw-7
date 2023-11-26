import express from 'express';
import productsRouter from './routes/productsRouter.js';
import customersRouter from './routes/customersRouter.js';
import employeesRouter from './routes/employeesRouter.js';
import ordersRouter from './routes/ordersRouter.js';
import ordersProdsRouter from './routes/ordersProdsRouter.js'


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/products', productsRouter);
app.use('/customers', customersRouter);
app.use('/employees', employeesRouter);
app.use('/orders', ordersRouter);
app.use('/orders_of_prod', ordersProdsRouter);

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
});
