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

router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json('Delete account successfully');
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('You can delete only your account');
  }
});

//get user

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updateAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// followers user

router.put('/:id/follow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.body.userId } });
        res.status(200).json('User has been followed');
      } else {
        res.status.apply(403).json('You already follow this user');
      }
    } catch (err) {
      res.status(500).json({ err: 'server Error' });
    }
  } else {
    res.status(403).json("You can't follow your self");
  }
});
// unfollow user

module.exports = router;
