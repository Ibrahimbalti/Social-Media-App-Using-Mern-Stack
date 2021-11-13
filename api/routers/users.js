const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
//update user
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        // salt use for to more secure your passowrd
        const salt = await bcryptjs.genSalt(10);
        // create a hash password ...to more secure your password if any access the data base they can not get the plane password
        req.body.password = await bcryptjs.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res.status(200).json('Update account successfully');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You can update only your account');
  }
});
//delete user

// router.delete('/:id', async (req, res) => {
// }

//get user
// followers user
// unfollow user

module.exports = router;
