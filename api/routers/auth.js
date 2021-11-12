const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');

// Register Users
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  // salt use for to more secure your passowrd
  const salt = await bcryptjs.genSalt(10);
  // create a hash password ...to more secure your password if any access the data base they can not get the plane password
  const hashpassword = await bcryptjs.hash(password, salt);
  const newUsers = new User({
    username,
    email,
    password: hashpassword,
  });

  try {
    const user = await newUsers.save();
    res.status(200).json(user);
  } catch (err) {
    console.error(erro.message);
    res.status(500).send('server error');
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // salt use for to more secure your passowr

  try {
    const user = await User.findOne({ email });
    !user && res.status(400).json('user not found');

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    res.status(200).json('Login successfully');
  } catch (err) {
    console.error(erro.message);
    res.status(500).send('server error');
  }
});

module.exports = router;
