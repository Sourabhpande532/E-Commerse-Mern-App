require('dotenv').config();
require("./config/conn").connect();
const express = require("express");
const app = express();

/*bring Up auth,user route */
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const categoryRoute = require("./routes/category")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const PaymentBRoute = require("./routes/paymentBRoutes")


/*Middleware Packages */
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

/*Middleware use */
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

/*API__SECTION */
app.use("/api",authRoute);
app.use("/api",userRoute);
app.use("/api",categoryRoute);
app.use("/api",productRoute);
app.use("/api",orderRoute);
app.use("/api",PaymentBRoute);


app.get("/",(req,res)=>{
    res.send("Hello")
})

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`The app is running on http://localhost:${PORT}`);
})
