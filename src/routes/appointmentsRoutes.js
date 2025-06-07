const express = require('express')
const {getAllAppointments, createAppointment} = require('../controllers/appointmentsController')

const router = express.Router()

const authenticateToken = require('../middlewares/authMiddleware')

router.get('/', authenticateToken, getAllAppointments)
router.post('/', authenticateToken, createAppointment);


module.exports = router