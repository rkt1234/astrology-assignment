const express = require('express')
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes')
const astrologersRoutes = require('./routes/astrologersRoutes')
const appointmentsRoutes = require('./routes/appointmentsRoutes')

dotenv.config();

app = express()
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/astrologers', astrologersRoutes)
app.use('/appointments', appointmentsRoutes)

app.get('/',(req,res) => {
    res.send(`Server is running at ${process.env.PORT}`)
})


module.exports = app