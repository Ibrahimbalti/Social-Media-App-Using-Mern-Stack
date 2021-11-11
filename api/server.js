const express = require('express');
const app = express();
const connectDB = require('./config/db');

//Connect to database

connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`server start on PORT  ${PORT}`));
