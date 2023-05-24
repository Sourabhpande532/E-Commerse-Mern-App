/**
 @fileName:📂model.js
   ref:🖇️https://mongoosejs.com/docs/guide.html
   ref:🖇️ https://en.wikipedia.org/wiki/Salt_(cryptography)

@talkAbout(purchases)👇👇 
want to build an array in which i can push my All items which users is keep on purchasing let's e.g if somebuddy's purchases is course i keep users array that array i can push course value or course Id/unique id or have a access of that course.

@VIRTUAL_FIELD_SECTION 
@virtual Section 
@ref:  => 👋🖇️ https://mongoosejs.com/docs/tutorials/virtuals.html
@blog  => 👋🖇️ https://futurestud.io/tutorials/understanding-virtuals-in-mongoose
@video => 👋🖇️ https://youtu.be/TZPygUt6H00

@virtual: bring some information from DBs & update it that's exact convection of virtual field on the Go
@virtual: this field is basically In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents. it will help you on the go & it will help you when there is already exits something already in DBs that time as well.
@🫣sideNote:What if, if you'r DBs hack that perspective This will help you in the wake of security sometimes what happend we don't want to save password in DBs without touching the DBs we can give a certain kind of protection in that wake this one came into picture.
@🫣sideNote:-> sometimes you want to perform certain kind of calculation without touching the DB from those secnario it came. 

🤔🙄why do I need virtual ???
why a'm using virtual here because of now we are stored a password in plane text i wanna don't do that 
   😶‍🌫️Do I want to ask user plase enter a password into encrypted one again it's not a sensible information.
   😶‍🌫️So,I want collect info from user and want to create a virtual field which can on the fly can encrypt the password and then stord it into DB.
   😶‍🌫️Again at the time of logged in i will be using this salt (see belew) not yet defined
   😶‍🌫️So, I can use this same salt & i can find out same password in the hash formate & match that agains the hash password stord in my dB
   
🤔🙄 what is uuid & crypty-js?? 
      - It just generates a Id for hash the password
      - crypto-js => don't need to install any package for encrypt the password for that futher later on they realize.it  it will actually help you to get "salt". so go on crypto docs link 👇

@ref: => 👋🖇️ https://nodejs.org/api/crypto.html (crypto scroll belew) 
@ref: => 👋🖇️ https://www.npmjs.com/package/uuid (uuid)
@ref: => 👋🖇️ https://mongoosejs.com/docs/api/schema.html#Schema.prototype.method() (schema methods how to defined & use that in model/user.js)
@ref: => 👋🖇️ https://mongoosejs.com/docs/api/schema.html (only for study)
H.w : => //study on above

....---....

@🛋️🥩identifire[👋@ABOUT(encry_password)]

@ABOUT-> encry_password
@createSchemametode
Need to change it into encry_password why ? because i'm about to encrypt that  -This gives me idea this is not a plan password that a'm trying to stored 
😶‍🌫️A'm going to try to create encrypted password just a refference for us.

Befoure exports the stuff
😶‍🌫️Want to create some method first sor create method on that 

....---....

@🛋️🥩identifire[🫥(securePassword via methods in mongoose)1st]
-Need to pass something that provide me a security to encrypt my password inside methods.
-⤵️function expect at least one argument by the term argument means provide some plane passwords & that are turn it into encrypted one ensure that don't use arrow function...-⤵️
-⤵️ Befoure one need to change if there is password or not or user only leave the "empty" password field. why return "" -> want to take advantage of MongoDB if nothing inside that am gonna return ❕"error" that is "true" field....-⤵️
-⤵️Let's start encrypting process ..........-⤵️
  try to wrap try-catch block and start encrypting via refference-⤵️ 

-@ref➡️: 🖇️🛕https://nodejs.org/api/crypto.html
-⤵️ don't gonna stored it just directly return it.
 -@update-> gonna update "plainpassword" which from user pass/arrived to us.
 -@createHmac-> it has two two thing first is "sha256" & 2nd one "secret" need to worry on that so this secret is not going to be secret we'r going to reffer some value that haven't yet set that is "salt" surly do that on the go.....

 -so this method,when it is going to run so this "securePassword" method turn your plainpassword to encrypted one something like this ➡️c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a(Go and visit above link)

 */