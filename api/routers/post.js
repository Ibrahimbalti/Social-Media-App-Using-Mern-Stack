const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const USer = require('../models/User');

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
//like and dislike
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('The Post has been liked');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('The Post has been disliked');
    }
  } catch (err) {
    res.status(500).json('Server errro');
  }
});
//get a post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
});
//get timeline post
router.get('/timeline/all', async (req, res) => {
  try {
    // this current user who login
    const currentUser = await User.findById(req.body.userId);
    // find the database and check the post userId  is equall to current user id
    // Is ma ya check kr rah ha jo post is na khud kiya hvo ha
    const userPost = await Post.find({ userId: currentUser._id });
    // check the friend id who following the users
    const friendPost = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    //use concat and show all post by user and itself
    res.status(200).json(userPost.concat(...friendPost));
  } catch (error) {
    res.satatus(500).json('Server Error');
  }
});

module.exports = router;
