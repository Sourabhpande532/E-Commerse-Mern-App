require('dotenv').config();
require("./config/conn").connect();
const express = require("express");
const app = express();

/*Middleware Packages */
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

/*Middleware use */
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})


const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`The app is running on http://localhost:${PORT}`);
})
