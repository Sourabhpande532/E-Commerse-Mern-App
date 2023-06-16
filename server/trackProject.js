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
@TALKABOUT:__> 💹HOW TO PROTECTED ROUTE
@ABOUT[isSignedIn, isAuthenticated,  isAdmin]
@LOCATION: [📂controller/auth/ 📂routes/auth/]


@😗KEEP_NOTE:-> "express-jwt" package use for protecting the route 
@TALKABOUT:->[isSignedIn(middleware)]

Ref: 🔗✈️https://www.npmjs.com/package/express-jwt
@KEEP_NOTE: express-jwt use for protecting ROUTE

In, this one we'r discussing how to put restication on route exact same termonoloy use it everywhere IsSignIN,IsAuthenticate,IsAdmin,IsSemiAdmin or other....this are all the terminalogy we use moreever here...let known the defference between IsSingn & IsAuthenticate

@Why next not use 🧐😗?express-jwt -> it already covered the consept of next that'why we not mention 

-🔺IsSingn -> user is LOGIN into our application & ready for hand dirty;
-🔺IsAuthenticate:-> take a e.g of Facebooke site he only allow to to change you'r profile not other one because it is in the mode of ""protected route"" would you'be able to some changes you'r friend profile? ofcourse not, that's how protected route came into play.
 
@😑MAKE_SURE:->cookie-parser install becz cookie-parser is allow us to set some property(userProperty) inside user

@😑MAKE_SURE:->What actually userProperty doing there in belew one it gives you a current id what authenticatae route
you acturally working it just add a new property inside the request which user propety auth go and check 📂routes/auth.js 

@Postman: while teasting this route on postman need to user signin o.w it will not allow to access the route and addination need to pass compusory token in authorization is compulasory
@API:-> ✈️🔗http://localhost:4000/api/protected

VIA_req.auth we get id {
    "_id": "64805760e34038bacaa76bb8",
    "iat": 1686216187
}
 base on this one we do further authentication process like isAuthenticated,isAdmin with that.


'🥊🥊---------------------NEW-----------------------🥊🥊'

@TITLE:->HOW TO WRITE CUSTOM MIDDLEWARE:
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

'🥊🥊---------------------NEW-----------------------🥊🥊'

@TITLE:-> what are param ??
@ABOUT[]
@LOCATION:[app.js,routes,controller,model]

@Ref: 🔗✈️https://expressjs.com/en/4x/api.html#router.param

Need to call this 🤔🙄??  
const userRoute = require("./routes/user")
app.use("/api",userRoute);

we'r directly pull it from URL after middleware.



'🥊🥊---------------------NEW-----------------------🥊🥊'

@TITLE:-> -GET ID FROM PARAM-
@ABOUT[🔺getUserById, 🔺getUser]
@LOCATION:📂[controller/user/]

@Ref: 🔗✈️https://expressjs.com/en/4x/api.html#router.param

@ABOUT: getUserById;
in this one we'r gonna exports so that params can handled. Need to pass id while calling(getUserById) id is gonna something which is gonna come up from the url in routes and is gonna something like this "/:id"
🤨Remember : findOne & findById work exactly same.

-Whenever there is callback it always return two thigs it could be either err or 2nd would be object itself(user)
-if the error was not there so we can stored that user into object itself(req.profile = user)

@ABOUT: getUser;
So getUserById work with params & getUser work when somebuddy call this method we will get back "user" info;
-see in getUserById : so since in this req.profile we got all the information what we needed so we can simply send a response back here in this getUser; we need atually some method to varify that;

'🥊🥊---------------------NEW-----------------------🥊🥊'

@TITLE:-> HANDLING USER ROUTE
@ABOUT[🔺getUserById, 🔺getUser]
@LOCATION:📂[routes/user/]

HANDLING USER ROUTE  

🔺getUserById: 
this filled is going to populate  Whenever it found something in any route "/:x" that would be first interpreted as "userId" as we mention then this method automatically populate req.profile with user object that's coming it from DB. 🎐@hint:router.param

🔺getUser
So with all the routes that associated with user i'm gonna simply say just user infront of them 🎐@hint:router.get("/user/:userId" getUser);
@😱KEEP_NOTE: ""/:userId"" gonna come from "signin/login" user don't confuzed 

So, Why those we need this one 🤨🤔?
Now in the auth controller if you notice some middleware we injected ther isSignedIn,isAuthenticated,isAdmin so we need bring as well Now you use them whatever the route you want to protected & however you want to protected.
👇👇
@SIDE_NOTE:->
we used all of them as a protected route here
if user want all of information like name, email,
however he has set his profile then simply befour
getting his profile he should be isSignein, isAuthenticated also so this is we implemented;

this all are middleware can insert anywhere 

'🥊🥊---------------------NEW-----------------------🥊🥊'

@TITLE:-> FIXING & TEASTING BUGS
@ABOUT[🔺getUser]
@LOCATION:📂[routes/user/,controller/user/] for Bring URL 
@Request : GET

   
@@"email":"rampawar12@gmail.com",
@@"password":"1234"
🏤@POSTMAN_URL: http://localhost:4000/api/user/64805760e34038bacaa76bb8

after hit above we got lot more thing like role,purchases,id,name,email,salt,encry_password but point is that what is the use of salt & encry_password overther 🤔🤨??
this shouldn't be populate into user browser in frontend so we need update our method little bit or hide this information via ""getUser"" in controller.
KEEP_NOTE: make sure we'r not removing from DB removing only from fronted/user profile "req.profile"side below one

req.profile.salt = undefined;
req.profile.encry_password = undefined;
req.profile.updatedAt = undefined;

📑@OVERVIEW@
So, this is all good now we can a request easily /user/:userId need to pass this "userId" & since we protected our routes via isSignedIn,isAuthenticated So we need pass "signin/login" "token" as well in "headers"

🤦‍♂️Mistakely: we pass "===" so instead need to pas "==" because we are checking here for value not object becaz they are not same object itself that's why == double equal to

'🥊🥊---------------------NEW-----------------------🥊🥊'

@TITLE:-> LEARN TO UPDATE USER INFO
@ABOUT: moreever like update route
@LOCATION:[🔺routes/user, 🔺controller/user/] 
@REQUEST : PUT 

So,we'r discuss about put request so base on it form where we send fronted is heavealy dependant are we fire get or put...it should isSignedIn,isAuthenticated must be 

@KEEP_IT_IN_MIND
while calling this "put" method user should be exits in DB O.w Not work.

@OVERVIEW@
base on _id: we'r looking it for ""user"" in DB;
pass 1st object:
req.profile_id: from where this "id" it coming it from--
@😗KEEP_NOTE: let me clear one this this req.profile = user is already having all info of user.
---middleware fire up this Id if you take a look on routes/user/ & base on that it set the filled.
🔺@further
pass 2nd object: What'r the information that you'r going to update that set into {$set}
use this $set & i want to updates from req.body so that's where the fronted is kiking up so..
🔺@further
Pass new to update instatly & addinationally need to pass callback(expect two thing either user && err)

OVERSLL CONCLUSION 
-first find User via _id
-looking it for update info that you want
-pass compulasory Parameters

POSTMAN_URL: 🔗✈️http://localhost:4000/api/user/6486efbd8fb8d6c3c3f45229



'🥊🥊---------------------NEW-----------------------🥊🥊'

@TITLE:-> USING POPULATE FROM OTHER COLLECTION
@ABOUT: userPurchasedList
@LOCATION:[🔺controller/user/,🔺routes/user, ] 
@REQUEST : GET 
 
Ref : 🔗✈️https://youtu.be/mSQwg_H2T7c
Ref : 🔗✈️https://youtu.be/VuSt5-AwL8Y

-🎗️Merge process is know as populate data by the term merge means two schema become one & and show the output see 2nd link.
-🎗️in this one we'r reffering cross ❌ collection by the term it mean merging process.there is user collection & there is Order collection we need to interrefference between them.
-🎗️I want to store all entire Order list what user is purchasing in my user model took a look 📂model/user.js see between 40's "purchase".
Read Docs on POPULATE👇

Ref : 🔗✈️ https://mongoosejs.com/docs/populate.html

@CONTROLLER@
-🎗️ while called method you'r gonna notice everytime you found this object {ObjectId,ref} Always.
-🎗️want to find base on middleware id that provide getUserById that's why {user: req.profile._id}; 🔺@Remember: Need to find Order user via ref: "User"
-🎗️Now it's time to use populate How we can use populate @Remember since any time you reffering something(ObjectId,ref:"User") in defferent COLLECTION(talke about model/order) that is exact movement you want use populate.

we need to pass two thing compulsaory
 -🎗️➕1st is which model or object you want to update...e.g(model/order) see user object over there that's exactly one know as 🔺"user:{ type: ObjectId, ref: "User",}" 
 -🎗️➕2nd is what are the field you want to bring in e.g like _id name email no extra comma(,) or anything.

 
'🥊🥊---------------------NEW-----------------------🥊🥊'

@TITLE:-> MIDDLEWARE TO UPDATE PURCHASE
@ABOUT: pushOrderInPurchasedList
@LOCATION:[🔺controller/user/,🔺routes/user, ] 
@REQUEST : PUT 

so far we've created this exports.userPurchasedList & we'r pulling some information from Order model you need to know about that very important 
& we'r selecting the order which are base on req.profile_id see at 🗃️userPurchasedList controller so this is gonna fail plan in order to recover that we create this above one.
@😱KEEP_NOTE: this all data we send it into 🗃️model/user/[purchases];

FollowStepByStep:

 -🎗️Go and notice model/user purchases this is type of array we use push methode for that & inject code inside default one [] & let's create variable for that here which empty array;  
 -🎗️From where this information is gonna come up 🤔🤨??
  we'r gonna pass this purchases info'n from the user req.body this is where is gonna come up! would be pushing some info into that from where it's come up from fronted req.body.
 -🎗️.order of req.boy first go on 🗃️model/user/[Order] & base on that act Then,There is multiple products which is going to comming so in the line no.90 to 94 in between in the req.body=> .order whatever products we've we'r gonna loop through that ll' pick up individual
 information there we ll' create object from it pushing it into a purchases
@KEEPNOTE:products is entire list in which the individual product came note Line not forEach
-🎗️pass all info into purchase with respect .push
------
----@stored All this into a DB@---- 
so since everything inside this 🗃️model/user so obiviously we need User model so let's first import that....
?why we use that findOneAndUpdate so far it's been nothing in model/user
     purchased array(🗃️model/user) but there is gonna the point where something is already 
     there we don't want to overwrite this all info'n i.w we'r using.. if there
     is nothing inside the arry just write that.

    *{_id:req.profile._id} bring up from getUserById base on that we find;
     
    *{$push: {purchases:purchases}}
     👆 
     -🎗️what do you want to push inside this array(🗃️model/user) after
      :so what info you want to pass on so i want to push 
      on inside this array which is in the 🗃️models/user knon
      as purchases we'r gonna say this update one thing use this object here ➡️ {purchase:purchases}⬅️first Array from model & 2nd array from here update with myArray talke about purchase don't mess first name
      & we'r updating array 

    ?{new: true} send me updated object one from DB not old one 
    -🎗️The pass callback to pass updated value

    
@consclusion@!:
  -pulled info from fronted
  -looping throught it
  -creating a object from it,
  -storing this object into purchases empty array
  -finally we'r using a model then finding and one update thing
  -bases on some id,push,new:true
  -handling a error part 


  '🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: summer & winter collection - CATEGORY  
@TITLE:-> GET CATEGORY FROM PARAM 
@ABOUT: Moreover like an Parameters Extracter[id]
@LOCATION:[🔺routes/category/,🔺controller/category/, ] 
@REQUEST : PARAM 

So far we've seen how to extrat single Parameters from URL & Now in this one discussed about extracting multiple Parameters from URL is almost same that previous one.
@NEED to bring things in this 🗃️routes/category/
-🎗️1st : auth[to check weather user authenticatae or not,login or not &😗KEEP_NOTE: only Admin should be allow to create category]
-🎗️2nd : user[@sideNote: so far we've discussed ABOUT getUserById just exactly one previous section we've created couple of methods
in model/user route specially getUserById bring 
exactly this will be we've to extracting this
one  whenever i've seen this getUserBy 
id it just populated my req.profile and i can
use whole bunch of thing & Id full info like name & all stuff the movement
it see any kind of parameter it just get fire ]

-So,How do i use this getUserById 🧐🧐??
🗃️routes/user router just exact like that you do. so anyTime is gonna "userId" see in any Parameters it just gonna go ahead & populate my fields
*as soon as you see this userId in parameter line 6{getUserById}
it just go ahead & populate my profile
➡️GO CONTROLLER
-Now, so far we've seen user id Now i want to grabbed "category id" as well.




'🥊🥊---------------------NEW-----------------------🥊🥊'
@SECTION@: summer & winter collection - CATEGORY  
@TITLE:-> CREATING A CATEGORY & 💹SAVING IT
@ABOUT: Moreover like "create" category @HINT:->router.post("/category/create/:userId",
@LOCATION:[🔺routes/category/,🔺controller/category/, ] 
@REQUEST : post 

@ROUTE
in this session, we'r gonna creating category,it's pretty simple
you just usually pass on string & that's all what we've to save it
into DB but only selected user should be allow to create category in
our case, it just gonna be admin only,it could be super admin also.
😵@sideNote: we've save everything into Db with role 0 defalue there is
no admin so far. we'r gonna do something twikky manually change value.

-🎗️right now just assume we'r just gonna go in Dbs manually & just will change
the value over there, surlly we can provide superAdmin as well can change 
something & can provide a multiple admin let see this another time also for changing

-🎗️it is comppulsary to validate user that'w 
  we mention :userId belew & it might be getting now
  why we'v got this above param becz i want to authenticate
  that user validate or not is operation able to perform or not
  that's why i've methode in belew createCategory then after just chck
  isAdmin,isAuthenticat,isSignin 
@Note:belew order isImportant 
!!This one is only done by Admin if this Admin is success then we can 
  performed it so opened cntrl/auth.js see admin see exports.isAdmin

➡️GO CONTROLLER
first we create a category then simply extracted that category by req.body; 
-🎗️create new object(save in DB)


'🥊🥊---------------------NEW-----------------------🥊🥊'
@SECTION@: summer & winter collection - CATEGORY  
@TITLE:-> GET ALL CATEGORIES AT ONCE(READ)  
@ABOUT: 
-🎗️router.get("/category/:categoryId", getCategory);
-🎗️router.get("/categories", getAllCategory);
@LOCATION:[🔺routes/category/,🔺controller/category/, ] 
@REQUEST : GET  

@ROUTE
@we want to get an access of id so i want one particular id
that will be based on unique id so will have getCategory method
want to grab @getCategory,rather getAllCategory 
this are 2 routes and 2 controllers.

➡️GO CONTROLLER
why Mention:categoryId so in order to grabbed one single category
so it can  automatically fire up or which populates one thing in my body itself we've seen that go controller/category/ req.category = cate; from ""getCategoryById""


🥊🥊---------------------NEW-----------------------🥊🥊'
SECTION@: summer & winter collection - CATEGORY  
@TITLE:->UPDATE THE COLLECTION
@ABOUT: 
-🎗️router.get("/category/:categoryId/:userId",isSignedIn,isAuthenticat,isAdmin updateCategory);
@LOCATION:[🔺routes/category/,🔺controller/category/, ] 
@REQUEST : PUT  

@OVERVIEW@
@ROUTE
 So, How do we update
   -Need::categoryId:
    is anyone allow to upadate the category=> No, actually router.post route and update route is almost exactly same almost
    :categoryId 1st grabbed this one then :userId this userId then i can
    validate check isSign....,this :categoryId is being updated by this :userId(user) base on that we validate isSignedIn,isAuthenticat,isAdmin 

➡️GO CONTROLLER  
So,How do we change this updateCategory firstly i need to grabbed it So how do we grabbed,we just grabbed from ""req.category" that we'r sending
-🎗️Now the req what'we'r having so far is gonna be updated only one thing which is in DATABASE category.name from(🗃️models/category) what actually you need to updated just only "name";
-🎗️this req.category we'r able to grabbed it due to of middleware
over there see at the top getCategoryById note we are able to 
grabbed from parameter then we populate this belew category from req.category
-category.name = req.body.name this one is able to grabbed from fronted 
-sence this req.category is already an object of dbs i can directly fire up now
if you remember from top object is coming from dbs i.w category.save();
-🎗️Then, simply go ahead update that since this "req.category" is already an object of DATABASE just simply fire a save method error & all stuff;

 */
