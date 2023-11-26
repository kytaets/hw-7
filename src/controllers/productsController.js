import ProductsService from '../services/productsService.js'


class ProductsController {
    async post (req, res) {

        if(!req.body)
            return res.status(400).send('Invalid request body')

        const {name, category, amount, price} = req.body;
        if (!req.body.category)
           return res.status(403).send('Invalid product category')
        
        return res.send(await ProductsService.post(name, category, amount, price))

    }
}

export default new ProductsController();