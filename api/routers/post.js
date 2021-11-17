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
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('Post has been updated');
    } else {
      res.status(403).json('You can only update your post');
    }
  } catch (err) {
    res.status(500).json({ err: 'server error' });
  }
});
//delete post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json('Post has been deleted');
    } else {
      res.status(403).json('You can only delete your post');
    }
  } catch (err) {
    res.status(500).json({ err: 'server error' });
  }
});
//like a post
//get a post
//get timeline post

module.exports = router;