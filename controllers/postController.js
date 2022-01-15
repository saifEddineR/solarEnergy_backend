const Post = require('../models/postModel')

// @desc add a new post
// @route POST /api/post/newpost
// @access PRIVATE - user
const addPost = async(req,res) => {
  try {
    const userId = req.userId
    const {title,desc,image} = req.body
    const newPost = await Post.create({title,desc,image,owner:userId})
    res.json(newPost)
  } catch (error) {
    res.status(500).json({msg:`something went wrong ${error}`})
  }
}
// @desc get all posts
// @route GET /api/post/getposts
// @access PUBLIC
const getPosts = async(req,res) => {
  try {
   const posts = await Post.find({}).populate('owner','-password -__v -_id')
   res.json(posts)
  } catch (error) {
    res.status(500).json({msg:`something went wrong ${error}`})
  }
}

module.exports = {addPost,getPosts}