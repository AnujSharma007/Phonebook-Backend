var express =  require("express");
var app = express();
var bodyparser = require("body-parser");
var dotenv = require("dotenv");
var cors = require("cors");
var routes = require("./routes/index");
var mongoose = require("mongoose");
var cookieparser = require("cookie-parser");

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

dotenv.config({path:"./config/.env"});

mongoose.connect(process.env.DB_URL);

app.use("/",routes);

app.use((req,res,next)=>{
    res.status(404);
    res.json("Incorrect endpoint")
})

app.listen(process.env.PORT,()=>{
    console.log(`App started listening at port ${process.env.PORT}`);
})

module.exports = app;