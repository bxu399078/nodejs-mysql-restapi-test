import {Router} from 'express'
import {getEmployees} from '../controllers/employerss.controllers.js'
import {createEmployees} from '../controllers/employerss.controllers.js'
import {updateEmployees} from '../controllers/employerss.controllers.js'
import {deleteEmployees} from '../controllers/employerss.controllers.js'
import {getEmployee} from '../controllers/employerss.controllers.js'


const router = Router()

router.get('/employees',getEmployees)
router.get('/employees/:id',getEmployee)
router.post('/employees',createEmployees)
router.patch('/employees/:id',updateEmployees)
router.delete('/employees/:id',deleteEmployees)


export default router