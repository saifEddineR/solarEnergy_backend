const Person = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');

// @desc register new user & return token
// @route POST /api/user/register
// @access public
const register = async(req,res)=>{
  try {
    const {name,username,email,password} = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const newPerson = await Person.create({name,username,email,password:hashedPassword})
    const token = jwt.sign({sub:newPerson._id},process.env.JWT_SECRET)
    res.json({msg:'user created',token,role:existPerson.role})

  } catch (error) {
    res.status(500).json({msg:`something went wrong ${error}`})
  }
}

// @desc new user can login & return token
// @route POST /api/user/login
// @access public
const login = async(req,res)=>{
  try {
    const {email,password} = req.body
    const existPerson = await Person.findOne({email})
    if(!existPerson) return res.status(404).json({msg:'you should register first.'})
    const verifyPassword = await bcrypt.compare(password,existPerson.password)
  
    if(!verifyPassword) return res.status(401).json({msg:'wrong password.'})
    const token = jwt.sign({sub:existPerson._id},process.env.JWT_SECRET)
    res.json({token,role:existPerson.role})
  } catch (error) {
    res.status(500).json({msg:`something went wrong ${error}`})
  }
}
// @desc takes token & return user info
// @route GET /api/user/loaduser
// @access PRIVATE-user
const loadUserInfo = async(req, res) => {
  try {
    const person = await Person.findById(req.userId).select('-password -__v')
    res.json(person)
  } catch (error) {
    res.status(500).json({msg:`something went wrong ${error}`})
  }
}


module.exports = {register,login,loadUserInfo}