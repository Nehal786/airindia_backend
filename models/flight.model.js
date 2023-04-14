const mongoose =require("mongoose");

const flightSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    airline:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Airline"
    }
})

module.exports = mongoose.model("Flight",flightSchema);