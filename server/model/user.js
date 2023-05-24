const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  lastname: {
    type: String,
    maxlength: 32,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },

  userInfo: {
    type: String,
    trim: true,
  },

  // TODO : come back here

  encry_password: {
    type: String,
    required: true,
    unique: true,
  },
  /*👆@identifire[👋@ABOUT(encry_password)]*/

  salt: String,

  role: {
    type: Number,
    default: 0,
  },
  purchases: {
    type: Array,
    default: [],
  },
});

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

/*
@KEEPNOTE:Some Info already stored at DBs then virtual use because we'r updating/modify/edit the stuff on the Go.

so, in this section we need uuid as a package
@ 🛋️ref :-> https://www.npmjs.com/package/uuid
And we'r gonna discussed about virtual fields.

@SET_FIELD_INTO_VIRTUALS

@🤪talkAbout(this._password)-> it's moreever like an pravate variable that would set into DB(x), convection is that use underscore(_) so, the password is now save securly now into a variable. can reffered it later.
@🤪talkAbout(this.salt)-> want to populate/involves/update now this one which declread already at top As soon as we'r gonna set this virtual password field & convert it into encrypted password want to update this here 
@🤪talkAbout(this.encry_password)-> update it via securePassword() which we created via crypto package.

@SET_GETTERS_NOW_INTO_VIRTUALS
what happend if somebuddy want to take this field back
*/

userSchema.method = {
  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};

/* 👆@identifire[🫥(securePassword via methods)1st]*/

module.exports = mongoose.model("User", userSchema);
/*
  
*/
