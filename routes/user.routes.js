const User = require("../models/user.model");
const { register, login } = require("../controllers/user.controller");
const { validateReqBody } = require("../middlewares/validateReqBody");

module.exports = (app)=>{
    app.post("/airindia/api/v1/register",validateReqBody ,register);
    app.post("/airindia/api/v1/login",login);
}