const Flight = require("../models/flight.model");


async function createFlight(req,res) {
    const flightObject={
        name:req.body.name,
        price:req.body.price,
        duration:req.body.duration
    }

    try{

        await Flight.create(flightObject);
        return res.status(201).send({
            msg:"Flight created successfully",
            
        })

    } catch(error) {
        return res.status(500).send({
            msg:"Internel server error",
            error
        })
    }
}

async function searchFlight(req,res) {
    try {

        const flight = await Flight.find({
            _id:req.params.id
    
        })
        
        if(!flight) {
            return res.status(400).send({
                msg:"No such flight available"
            })
        }
        return res.status(200).send({
          flight
        })

      } catch(error) {
        return res.send({
          msg:"internel server error",
          error
        })
      }
}


module.exports = {
    createFlight,
    searchFlight
}