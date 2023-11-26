import OrdersService from '../services/ordersService.js'

class OrdersController {
    async delete (req, res) {

        const ordersId = parseInt(req.params.id);

        const result = await OrdersService.delete(ordersId)

        if(result === -1)
            return res.status(404).send('Order with such id not found')
        
        return res.send(result)

    }
}

export default new OrdersController();