const express = require('express')
const { register, login, loadUserInfo } = require( '../controllers/userController' )
const authMiddleware = require( '../middleware/authMiddleware' )
const userValidation = require( '../middleware/userValidation' )
const Person  = require( '../models/userModel')
const router = express.Router()

router.get('/deleteAll',async(req,res)=>{
  await Person.deleteMany({})
  res.send('done')
})
router.post('/register', userValidation,register)
router.post('/login',login)
router.get('/loaduser',authMiddleware,loadUserInfo)
module.exports = router
