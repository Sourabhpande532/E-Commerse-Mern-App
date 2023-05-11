require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT || 4000
const app = express();
const dbconnection = require("./config/conn")

/* DB_CONNECTION  */
dbconnection();

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log(`The app is running on http://localhost:${PORT}`);
})
