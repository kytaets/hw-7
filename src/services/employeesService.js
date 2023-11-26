import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class EmployeesService {

    async patch (employeeId, firstName, lastName, middleName, position) {

        if((!await prisma.employees.findUnique({where: {id: employeeId}})))
            return -1;

        const updatedEmployee = await prisma.employees.update({
            where : {id: employeeId},
            data : {
                firstName,
                lastName,
                middleName,
                position,
            }
        })

        return updatedEmployee;
    }
}

export default new EmployeesService();