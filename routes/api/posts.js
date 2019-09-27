const express = require('express')
const router = express.Router()
const {check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const Post = require('../../models/Post')
const Profile = require('../../models/Profile')
const User = require('../../models/User')

// @route   POST api/posts
// @desc    Create a Post
// @access  Private
router.post('/', [auth,[
    check('text','Text is required').not().isEmpty()
]], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = req.user

     newPost = new Post({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id
    })
    const post = await newPost.save()
    res.json(post)
      
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error')
    }
})

// @route   POST api/posts
// @desc    Create a Post
// @access  Private


module.exports = router