const mongoose = require("mongoose");

const dbconnection = () => {
  mongoose
    .connect(process.env.DATABASE_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("CONNECTED DB SUCCESSFULLY");
    })
    .catch(() => {
      console.log("DB FAIL Oops");
    });
};

module.exports = dbconnection;