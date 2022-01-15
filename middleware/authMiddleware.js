const jwt = require('jsonwebtoken');
const authMiddleware = async(req,res,next)=>{
  try {
    const token = req.headers.token
    const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
    console.log(verifyToken);
    req.userId = verifyToken.sub
    next()
  } catch (error) {
    res.status(401).json({msg:`unvalid token ${error}`})
  }
}

module.exports = authMiddleware
