const mongoose  = require('mongoose')

const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true, 
    match:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  
  password:{
    type:String,
    required:true
  },
  role:{
  	type:String,
  	enum:['user','admin'],
  	default:'user',
  }
})

module.exports = mongoose.model('person',userSchema)

