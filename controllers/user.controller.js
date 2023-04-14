const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req,res){
    const userObject = {
        name:req.body.name,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        userId:req.body.userId
    }
    try{

        await User.create(userObject);
        res.status(201).send({
            msg: "User created successfully"
        })

    } catch(error) {
        res.status(500).send({
            msg:"internel server error",
            error
        })
    }

}

async function login(req,res) {
    const user = await User.findOne({
        userId:req.body.userId
    })

    if(!user) {
        return res.status(400).send({
            msg:"User does not exists in db"
        })
    }

    const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
    if(!isPasswordCorrect){
        return res.status(400).send({
            msg:"Userid/Passowrd does not matched"
        })
    }

   const token = await jwt.sign({userId:req.body.userId},process.env.SECRET_KEY,{
    expiresIn:120
   })

    return res.status(200).send({
        msg:"User Logged in successfully",
        token,
        user
    })

}

module.exports = {
    register,
    login
}