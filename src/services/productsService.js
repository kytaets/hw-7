import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class ProductsService {
    async post (name, category, amount, price) {
        const newProduct = await prisma.products.create({
            data: {
                name,
                category,
                amount,
                price,
            }
        });

        return newProduct;
    }
}

export default new ProductsService();