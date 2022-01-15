const { body } = require('express-validator');

const validation = [
  // body('fname', 'name should only contain alphabetic characters').isAlpha(),
  body('password').isLength(6).isAlphanumeric(),
  body('email').isEmail()
]
module.exports = validation