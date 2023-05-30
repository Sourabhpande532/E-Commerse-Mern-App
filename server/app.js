require('dotenv').config();
require("./config/conn").connect();
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello")
})

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`The app is running on http://localhost:${PORT}`);
})
