const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')

module.exports = async function(req,res,next) {

    // Get token from header
    const token = req.header('x-auth-token')

    if(!token){
        return res.status(401).json({ msg: 'No token, authorization denied'})
    }

    if(process.env.NODE_ENV === "production" ? process.env.githubSecret : )
    // verify token
    const jwt_secret = process.env.NODE_ENV === "production" ? process.env.githubSecret :  config.get('jwtSecret')
    try {
        const decoded = jwt.verify(token, jwt_secret)
        // console.log(decoded);
        const user = await User.findById(decoded.user.id).select('-password')
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid'})
    }
}