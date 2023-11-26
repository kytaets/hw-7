import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class OrdersService {
    async delete (ordersId) {
        if(!await prisma.orders.findUnique({where: {id: ordersId}}))
            return -1;

        const order = await prisma.orders.delete({
            where: {id: ordersId}
        });

        return order;
    }
}

export default new OrdersService();