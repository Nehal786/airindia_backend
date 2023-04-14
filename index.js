const express = require("express");
const app = express();
const db = require("./configs/db.config");
const mongoose = require("mongoose");
const connectWithDb = require("./configs/db.config");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MODELS
const User = require("./models/user.model");
const Flight = require("./models/flight.model");
const Airline = require("./models/airline.model");





connectWithDb();

//all routes
require("./routes/user.routes")(app);
require("./routes/flight.routes")(app);

app.listen(process.env.PORT,()=>{
    console.log(`server started successfully on PORT ${process.env.PORT}...`);
})