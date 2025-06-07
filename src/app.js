const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const astrologersRoutes = require('./routes/astrologersRoutes');
const appointmentsRoutes = require('./routes/appointmentsRoutes');

dotenv.config();

const app = express();

// ✅ Enable CORS for all origins (use specific origin in production)
app.use(cors());

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use('/auth', authRoutes);
app.use('/astrologers', astrologersRoutes);
app.use('/appointments', appointmentsRoutes);

app.get('/', (req, res) => {
  res.send(`Server is running at ${process.env.PORT}`);
});

module.exports = app;
