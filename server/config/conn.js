const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB CONNECTED SUCCESSFULLY"))
    .catch((error) => {
      console.log(`DB CONNECTION FAILED`);
      console.log(error);
      process.exit(1);
    });
};

/*
@DB_CONCTION:__PROCESS.....😙✈️
@Ref:__> 🔗https://mongoosejs.com/
@Ref:__> 🔗https://mongoosejs.com/docs/connections.html
@SIDE_NOTE__> mysql base on packages e.g npm i mysql

*/