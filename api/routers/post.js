const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//create post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    console.log(err);
  }
});
//update post
//delete post
//like a post
//get a post
//get timeline post

module.exports = router;
