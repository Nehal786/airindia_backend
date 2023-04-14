const { createFlight, searchFlight } = require("../controllers/flight.controller");


module.exports = (app)=>{
    app.post("/airindia/api/v1/createFlight",createFlight);
    app.get("/airindia/api/v1/searchFlights",searchFlight);
}