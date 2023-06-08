/**
 @ABOUT::___>(📂user,📂product,📂order,📂category)
 @Location:📂model.js
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

------------------)NEW)----------------------


@🛋️🥩identifire[👋@ABOUT(encry_password)]

@ABOUT-> encry_password
@createSchemametode
Need to change it into encry_password why ? because i'm about to encrypt that  -This gives me idea this is not a plan password that a'm trying to stored 
😶‍🌫️A'm going to try to create encrypted password just a refference for us.

Befoure exports the stuff
😶‍🌫️Want to create some method first sor create method on that 

------------------)NEW)----------------------

@🛋️🥩IDENTIFIRE[🫥(📂model/user/)@talk:securePassword via methods1st]

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


------------------)NEW)----------------------

@IDENTIFIRE[🥶(📂model/user/)@talk:Hashing Password]

@KEEPNOTE:Some Info already stored at DBs then virtual use because we'r updating/modify/edit the stuff on the Go.

so, in this section we need uuid as a package
@ 🛋️ref :-> https://www.npmjs.com/package/uuid
And we'r gonna discussed about virtual fields.

@SET_FIELD_INTO_VIRTUALS

@📍talkAbout(this._password)-> it's moreever like an pravate variable that would set into DB(x), convection is that use underscore(_) so, the password is now save securly now into a variable. can reffered it later.
@📍talkAbout(this.salt)-> want to populate/involves/update now this one which declread already at top As soon as we'r gonna set this virtual password field & convert it into encrypted password want to update this here 
@📍talkAbout(this.encry_password)-> update it via securePassword() which we created via crypto package.

@SET_GETTERS_NOW_INTO_VIRTUALS
what happend if somebuddy want to take this field back

@📍userSchema.method = {Need to call one more methode here that is "authenticate"}
@MOTO:_>User login or not
 once the user has set the password later on we might 🏧authenticate him we need methode which we can call which can match this hashed value again that's we created this authenticate methode.
 -🎗️call method "authenticate",
 -🎗️pass function(..take plainpassword from user here..)
 -🎗️just return value either true(if Match) or false(Doesn't Match)
 -🎗️call again method this.securePassword(..we can encrypt ther password from the user which is "plainpassword") -
 -🎗️then we can match it 

------------------NEW-------------------

 @Folder:=> @ABOUT-> 📂"model/category"
 ------
 Category is just a simple word which can be filete, which can be summer collectiion,winter collectiion, Diwali session .......

------------------NEW-------------------
@📍Folder:=> @ABOUT-> 📂"model/product"
-------
@😙in this one we'r gonna discuss @ABOUT -> product schema what product which we actually want to sell it can be tshrt, bottle, books, or it could be anything.

@😶‍🌫️in E-Com industrey everything called as a "product" whatever you'want to sold @NOTE->always use "product" becasue may you'want to exchange product tshrt to books or books to children genral store that "product" name is best. 

@🥲Remember every single product is associated with some kind of category it can summer collectiion, winter collectiion,size... but it must be associated/link with some kind of "category" so for that mongoose introduced one thing 
@PROCESS_of_linking_one_schema_to_another_one🙆‍♂️(e.g category schema to product schema)

@🔍SEARCH(google)=> Mongoose.prototype.ObjectId

@🗣️DISCUSS_ABOUT_CATEGORY--> so when is say category i really don't want to create category which is unlink want to link with previous schema 📂model/category/

🎗️so for that I'm gonna distructure {} something this things is basically come from mongoose.schema; 
e.g const {ObjectId} = mongoose.schema;
🎗️but from where you'can actually pull up this ObjectId therer are lot more thing over there it could be from 'user','category' so for that we need to mention "ref" in category {@ref: ""} & need to tell from where it exactly pull up this one.

Go and take a look at: 📂model/category/

So, apart form this what else you would like to feels free to add here probably you'r tshrt is having size at the defined time weather it is md,sm,lg 


'------------------NEW-------------------'

@IDENTIFIRE:[""😺""(@ABOUT:ADD_to_cart,@Location:📂model/order/)]
@PROCESS_OF_ADD_TO_CART

 @📍@Folder:=> @ABOUT-> 📂"model/order"/
@PROCESS_OF_ADD_TO_CART...

@REF :+ 🔗>https://www.amazon.in/gp/cart/view.html?ref_=nav_cart
->(🥲"clear you'r doubt related to order how the order page is look like")
@😗KEEP_NOTE: Inside the order we have array & each array insides this order we have products;

@OVERVIEW:-> Whatever you call "name" is it either be "Order page" or "Add to cart/cart" page feel free to name it.

Now, my order is definately associated with "product" Schema as we just see earlier ther'r lot of products so this gonna be array of products but not actually a products the products are in the cart of array (So,😗Need to concern about that)

@🧠STRATEGIES(Products)
 Our page is consist of products which we saw earlier so this is gonna be array of products not actually the products. the products which are in the card I hope u understand that because the when the product is inside the card it is having A new property being introduced like how many quantity of product getting and what is the total of that so we called it as productCartSchema not ye defined but later on use.
@🧠STRATEGIES(transaction_id:{})
  optionally we not mentioned cash on delivery(we'feel free to add that just create a status and create an boolean value or is something like this)
@🧠STRATEGIES(updated) 
 Whenever this order is gonna be placed it's gonna be use by admin of this website as well & admin is gonna provide some updates on order like when was the order placed when I have work on something like So,we'r gonna have a Date filled here that need to be updated:Date.and 
@🧠STRATEGIES(user)
 actually who is placing the order so we need to find out via "user" as well ofcourser so later on we might use this orderSchema & can do lot more thing like push this value or this product things into a the user accout as well it's all a lot more stuff here
 
 Now,it's time to introduced "[productCartSchema]" at top this is not ideal case secnario to defined at top or in this file but sometimes need to manage.

 @🧠STRATEGIES(productCartSchema)
 Not have a proper what to mentioned name overther, it could be product in cart ProductInOrderSchema really confused let's use ProductCartSchema 

  @😗KEEP_NOTE:This are not something which is created on go this particular product based on that we create in past the 📂model/product in the card based on belew refference(ref) see
  @📍Ideabehind(count)::How much product you want to purchases
  @📍Ideabehind(price)::To calculate base on quantity
  @📍Note:: You can add as much as you want like size,(md,sm,lg) delivary date,coupan,etc.


  '------------------NEW--------------------'
   @TALKABOUT:__> _Middleware
   @Ref:__> 🔗✈️https://expressjs.com/en/guide/writing-middleware.html#writing-middleware-for-use-in-express-apps

   we need to mention everytime "app.use(middleware name)" in order to move further so for that just follow along with me let's discuss common middleware that we'r gonna use in this one.

   1st :💹 body parser:
       Whenever somebuddy visit's '/login', './admin' whatever the request coming up or whatever the value requist is taking us from frontend it handles that it gives us request.body properties with the help of that we can take req.body.email,req.body.password,...whole bunch of thing is coming from frontend side. So,we've to take that information that's why.
       @😗KEEP_NOTE:-> want to take advantage of this middleware just write it down belew exports.signout in console.log("REQ BODY", req.body); go and check 📂"controller/auth.js"
       @🧐Rigion_whatever you fire from frontend side this req.body have access through that's core region "bodyParser" came.

       Ref:=> 🔗✈️https://www.npmjs.com/package/body-parser
  
   2nd :💹 cookieParser:
       cookie-Parser : use for fetching token,authentication

   3rd :💹 cors:
       linking up frontend to backend so we need to throw request from postman backend itself.
       ref: 🔗✈️ https://www.npmjs.com/package/cors 
       in order to understand cors need to go this belew link.       
       ref: 🔗✈️ https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
       you can make backend requist otherthan offisial domain that exact MOTO.
       @KEEP_NOTE:-> Need to bring all of this in the app.js form this middleware e.g see this comment(app.js):-> 
       -*Middleware Packages 
       -*Middleware use


   '------------------NEW--------------------'
   @TALKABOUT:__> 💹Router in express:
   Ref: 🔗✈️
   In,the entire one we'r gonna foucus on "API"  so follow along with me.
   -creting API through backend(best way to handles backend);
   -you can handles this API through mobile app,web app,however you'want to processd.
   - [Template engine] ✈️🔗https://expressjs.com/en/guide/using-template-engines.html

   - [Routing] ✈️🔗https://expressjs.com/en/guide/routing.html
     Core strong point of Routing API
     -So, in this one we'r using express 💹Router

In order to bring route we need use 💹Router
ref: -> https://expressjs.com/en/guide/routing.html 


   '------------------NEW--------------------'
   @TALKABOUT:__> 💹SAVING A USER TO DATABASE:
   @woking on 📂""controller/auth/"" on singup route
    
   in order to save user to DATABASE we need to bring model with same name convection that you mention at end "User" while "module.exports = mongoose.model("User", userSchema);" it's recommendation. not at compulasory but do that.
   @PROCESS
   -🔺create object(with name of const 'user' @😶‍🌫️HINT: class in Js)
   -🔺object populate/include by req.body ("via bodyParser")
   -🔺Now,we'v parmission To take advantage of mongoose DATABASE method that provide us.
    (e.g user.save(),user.populate(), user ....many more always same for firbase...)
   -🔺Need to call "Callback" to provide more Info or to ensure user is successfully save or not.
    (it expect 2 "Parameters" call it 'err','user' so this is like object that save into DB)
    -🔺Check for validation
    @😗KEEP_NOTE: in methods if ther is two time you mention "return keyword" it's not gonna work.only one 'return keyword' allow O.W terminates. return mean "end" function stop processing.

    @🖲️MAIN_ROLE_OF_""BODY_PARSER""_IS_BRING_INFO_FORM_FRONTEND
    DO_ console.log(req.body)


    
   '------------------NEW--------------------'
   @TALKABOUT:__> 💹SETTING UP VALIDATION IN ROUTES:

   Ref:✈️🔗https://express-validator.github.io/docs/guides/customizing/

   @🖲️😗Gonna_Focus_ON: ""Custom Error Message""(https://express-validator.github.io/docs/6.3.0/custom-error-messages)

   @🖲️😗LOCATION: 📂👉routes/auth.js


  .........KEEP_ON
   
  @TALKABOUT:__> 💹VALIDATION RESULT 

  @🖲️😗LOCATION: 📂👉controllers/auth.js
  https://express-validator.github.io/docs/6.3.0/
  @NEED_TO_WORK_below like that in 📂👉controllers/auth.js(signup)

  {"errors": [{"location": "body","msg": "Invalid value","param": "username"
  }]
}

    
  '------------------NEW--------------------'
  @TALKABOUT:__> 💹What are token & how to create & set into cookies:
  -🔺npm i jsonwebtoken
  -🔺npm i cookie-parser
  -🔺how do we constly chcking the user is login or not another term it judge you is authenticate or not for that we've ↙️
  -npm i express-jwt
   ref:-> https://www.npmjs.com/package/express-jwt


   
  '------------------NEW--------------------'
  @TALKABOUT:__> 💹Sending tokens in cookies for users
  @TALKABOUT: 📂controller/auth/(signin)
- 🎗️Bring email and password via req.body follow the process of distructuring.
- 🎗️Then check for express-validator apply "validation"
- 🎗️Match user side email & DATABASE side email if match go further
- 🎗️Match user side email & DATABASE side email if match go further
- 🎗️then check for "password" weather password match or not form user side password & DB side match if match go ahdad.(form:📂model/user/@hint:check authenticate)
- 🎗️signin the user what do i mean signin
  🔺create a token
  🔺put that token into cookies




'---------------------NEW-----------------------'
  @TALKABOUT:__> 💹How to protect Route
  
@😗KEEP_NOTE:-> "express-jwt" package use for protecting the route 
@TALKABOUT:->[isSignedIn(middleware)]

Ref: 🔗✈️https://www.npmjs.com/package/express-jwt
In, this one we'r discussing how to put restication on route exact same termonoloy use it everywhere IsSignIN,IsAuthenticate,IsAdmin,IsSemiAdmin or other....this are all the terminalogy we use moreever here...let known the defference between IsSingn & IsAuthenticate

@Why next not use 🧐😗?express-jwt -> it already covered the consept of next that'why we not mention 

-🔺IsSingn -> user is LOGIN into our application & ready for hand dirty;
-🔺IsAuthenticate:-> take a e.g of Facebooke site he only allow to to change you'r profile not other one because it is in the mode of ""protected route"" would you'be able to some changes you'r friend profile? ofcourse not that's how protected route came into play.
 
@😑MAKE_SURE:->cookie-parser install becz cookie-parser is allow us to set some property(userProperty) inside user

@Postman: while teasting this route on postman need to user signin o.w it will not allow to access the route and addination need to pass compusory token in authorization is compulasory
@API:-> ✈️🔗http://localhost:4000/api/protected

VIA_req.auth we get id {
    "_id": "64805760e34038bacaa76bb8",
    "iat": 1686216187
}
 base on this one we do further authentication process like isAuthenticated,isAdmin with that.


'---------------------NEW-----------------------'

@TITLE:->how to write custom middleware:
@ABOUT[isAuthenticated,  isAdmin]
@LOCATION: controller/auth/

Let's discuss tine-tyny about userProperty = "auth" what does that mean how it is important for us🧐😑?

-onec we actually giving a middleware & we'r using any route So, it just add a new property inside the "req" via this userProperty name as "auth" so as i told this middleware put this[ userProperty:"auth"](present on controller/isSignedIn) into the "req"

So it holds id onece after via check below API it could be anyid singin,signout any.....


@API:-> ✈️🔗http://localhost:4000/api/protected [routes/auth/]

@NeedToFocus: 1) 🔺isAuthenticated
              2) 🔺isAdmin

-🎗️isAuthenticated:_> 
@OverallConclusion
  -req.profile is goint to set up from fronted.
  -req.auth this one is going to set up by top middleware.
  -req.profile._id === req.auth._id  if the profile id we've set frm frontend 
  -if it is equal req.auth._Id which is set by top middleware we set. & it's gonna match then then you'r the owner you can do whatever you want.

  **That all mean user can change/modify by his own account**

-🎗️ isAdmin: go and model/user/[see role]
if ther role is zero then consider "regular user";
if the role is 1 then consider "admin"



    
 */
