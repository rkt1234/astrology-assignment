const express = require('express')
const {getAllAstrologers} = require('../controllers/astrologersController')
const router = express.Router()
const authenticateToken = require('../middlewares/authMiddleware')

router.get('/', authenticateToken, getAllAstrologers)

module.exports = router