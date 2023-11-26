import CustomersService from '../services/customersService.js';

class CustomerController {
    async get (req, res) {
        
        if(!req.body)
            return res.status(400).send('Invalid request body');

        const customerId = parseInt(req.params.id);

        const result = await CustomersService.getOrders(customerId);

        if(result === -1)
            return res.status(404).send('Customer with such id not found')

        return res.send(result)
        
    }
    
}

export default new CustomerController();