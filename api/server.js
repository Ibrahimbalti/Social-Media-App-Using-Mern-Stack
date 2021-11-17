const express = require('express');
const app = express();
const connectDB = require('./config/db');
const morgan = require('morgan');
const helmet = require('helmet');

//Connect to database

connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(helmet());
app.use(morgan('common'));

//testing
app.get('/', (req, res) => {
  res.send('Welcome to social media app Home page');
});

app.use('/api/users', require('./routers/users'));
app.use('/api/auth', require('./routers/auth'));
app.use('/api/post', require('./routers/post'));

const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`server start on PORT  ${PORT}`));
