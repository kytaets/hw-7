import EmployeesService from '../services/employeesService.js';

class EmployeeController {
    async patch (req, res) {

        if(!req.body)
            return res.status(400).send('Invalid request body');

        const employeeId = parseInt(req.params.id);
        const {firstName, lastName, middleName, position} = req.body;

        const result = await EmployeesService.patch(employeeId, firstName, lastName, middleName, position)
        
        if(result === -1)
            return res.status(404).send('Employee with such id not found')
        
        return res.send(result)
    }
}

export default new EmployeeController();