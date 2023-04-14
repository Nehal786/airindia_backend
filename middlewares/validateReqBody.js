const User = require("../models/user.model");

async function validateReqBody(req,res,next) {
    const {name,email,password,userId} = req.body;

    if(!email || !name || !password || !userId){
        return res.status(400).send({
            msg:"name , email, password, userId, filled is required"
        })
    }
    next();

}



module.exports = {
    validateReqBody
}