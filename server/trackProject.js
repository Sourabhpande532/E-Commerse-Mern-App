/**
 @fileName:📂model.js
   ref:🖇️https://mongoosejs.com/docs/guide.html
   ref:🖇️ https://en.wikipedia.org/wiki/Salt_(cryptography)

@talkAbout(purchases)👇👇 
want to build an array in which i can push my All items which users is keep on purchasing let's e.g if somebuddy's purchases is course i keep users array that array i can push course value or course Id/unique id or have a access of that course.
@ref:  => 👋🖇️ https://mongoosejs.com/docs/tutorials/virtuals.html
@blog  => 👋🖇️ https://futurestud.io/tutorials/understanding-virtuals-in-mongoose
@video => 👋🖇️ https://youtu.be/TZPygUt6H00

@virtual: bring some information from DBs & update it that's exact convection of virtual field on the Go
@virtual: this field is basically In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents. it will help you on the go & it will help you when there is already exits something already in DBs that time as well.
@🫣sideNote:What if, if you'r DBs hack that perspective This will help you in the wake of security sometimes what happend we don't want to save password in DBs without touching the DBs we can give a certain kind of protection in that wake this one came into picture. 

🤔🙄why do I need virtual ???
why a'm using virtual here because of now we are stored a password in plane text i wanna don't do that 
   😶‍🌫️Do I want to ask user plase enter a password into encrypted one again it's not a sensible information.
   😶‍🌫️So,I want collect info from user and want to create a virtual field which can on the fly can encrypt the password and then stord it into DB.
   😶‍🌫️Again at the time of logged in i will be using this salt (see belew) not yet defined
   😶‍🌫️So, I can use this same salt & i can find out same password in the hash formate & match that agains the hash password stord in my dB
   
🤔🙄 what is uuid & crypty-js?? 
      - It just generates a Id for hash the password
      - crypto-js => don't need to install any package for encrypt the password for that futher later on they realize.it  will actually help you to get salt.

@ref: => 👋🖇️ https://nodejs.org/api/crypto.html (crypto scroll belew) 
@ref: => 👋🖇️ https://www.npmjs.com/package/uuid (uuid)
@ref: => 👋🖇️ https://mongoosejs.com/docs/api/schema.html#Schema.prototype.method() (schema methods)
@ref: => 👋🖇️ https://mongoosejs.com/docs/api/schema.html (only for study)
H.w : => //study on above
 */