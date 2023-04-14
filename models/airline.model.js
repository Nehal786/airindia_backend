const mongoose = require("mongoose");

const airlineSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Airline",airlineSchema);