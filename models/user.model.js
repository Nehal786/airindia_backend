const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    userId:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:Date.now()
    }
})

module.exports = mongoose.model("User",userSchema);