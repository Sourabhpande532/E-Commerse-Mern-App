/* 

  '🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: summer & winter collection - CATEGORY  
@TITLE:-> GET CATEGORY FROM PARAM 
@ABOUT: Moreover like an Parameters Extracter[id]
@LOCATION:[🔺routes/category/,🔺controller/category/, ] 
@REQUEST : PARAM 
!@😗KEEP_NOTE: creating category only performed by Admin only Make sure All "CRUD" functionality.only for role 1 which is Admin or manually updated from compass for "practice"

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
-Now, so far we've seen user id Now i want to grabbed "category id" as well in the same getUserById formate.




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
the value over there, 0 to '1' surlly we can provide superAdmin as well can change 
something & can provide a multiple admin let see this another time also for changing
@ROUTE
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
-!IMP:😑MAKE_SURE:Need to pass json response in object like res.json({category}) that next time we can access anything like category._id,category.name 


'🥊🥊---------------------NEW-----------------------🥊🥊'
@SECTION@: summer & winter collection - CATEGORY  
@TITLE:-> GET ALL CATEGORIES AT ONCE(READ)  
@ABOUT: 
-🎗️router.get("/category/:categoryId", getCategory);
-🎗️router.get("/categories", getAllCategory);
@LOCATION:[🔺routes/category/,🔺controller/category/, ] 
@REQUEST : GET  
@POSTMAN URL: http://localhost:4000/api/category/648d8fd44af2f06630194a30

@ROUTE
@we want to get an access of id so i want one particular id
that will be based on unique id so will have getCategory method
want to grab @getCategory,rather getAllCategory 
this are 2 routes and 2 controllers.

➡️GO CONTROLLER
why Mention:categoryId so in order to grabbed one single category
so it can  automatically fire up or which populates one thing in my body itself we've seen that go controller/category/ req.category = cate; from ""getCategoryById""
-NEED TO MENTION CREATING CATEGORIES ID OVER THERE instead :"categoryId" Which populate from getCategoryById;


🥊🥊---------------------NEW-----------------------🥊🥊'
SECTION@: summer & winter collection - CATEGORY  
@TITLE:->UPDATE THE COLLECTION
@ABOUT: 
-🎗️router.get("/category/:categoryId/:userId",isSignedIn,isAuthenticat,isAdmin updateCategory);
@LOCATION:[🔺routes/category/,🔺controller/category/, ] 
@REQUEST : PUT  
@POSTMAN URL: http://localhost:4000/api/category/648d8fd44af2f06630194a30/6486efbd8fb8d6c3c3f45229

@OVERVIEW@
@ROUTE
 So, How do we update
   -Need::categoryId:
    is anyone allow to upadate the category=> No, actually router.post route and update route is almost exactly same almost
    :categoryId 1st grabbed this one then :userId this userId then i can
    validate check isSign....,this :categoryId is being updated by this :userId(user) base on that we validate isSignedIn,isAuthenticat,isAdmin 

➡️GO CONTROLLER  
So,How do we change this updateCategory firstly i need to grabbed it So how do we grabbed,we just grabbed from ""req.category" that we've already send in while ""createCategory"" see this route @LOCATION:->controller/category/ in the formate of json see you'll get name know as "category" like res.json({category});
-🎗️Now the req what'we'r having so far is gonna be updated only one thing which is in DATABASE category.name from(🗃️models/category) what actually you need to updated just only "name";
-🎗️this req.category we'r able to grabbed it due to of middleware
over there see at the top getCategoryById note we are able to 
grabbed from parameter then we populate this belew category from req.category
-category.name = req.body.name this one is able to grabbed from fronted 
-sence this req.category is already an object of dbs i can directly fire up now
if you remember from top object is coming from dbs i.w category.save();
-🎗️Then, simply go ahead update that since this "req.category" is already an object of DATABASE just simply fire a save method error & all stuff;


🥊🥊---------------------NEW-----------------------🥊🥊'
SECTION@: summer & winter collection - CATEGORY  
@TITLE:->PERFORM A DELETE OPERATION
@ABOUT: 
-router.get("/category/:categoryId/:userId",isSignedIn,isAuthenticat,isAdmin removeCategoryCategory);

@LOCATION:[🔺routes/category/,🔺controller/category/, ] 
@REQUEST : DELETE

-🎗️Tend to sometime avoid the word delete word bcz 
delte is propratery operation being performed by mongo
so i don't really call my category delete as ctrlr it might create
some of the issue i.w having long name like remove...anything

-🎗️@why? we'r able to grabbed this const category = req.category; 🤔??
the ans should be middleware becz it's extracting the things from the parametere see ""getCategoryById""

-🎗️*note Remove is operation given to us by mongoose 
it return two thing while interacting with DATABASE first is "err" & 2nd is "category" Make sure keep a note this category is not from DBs it is deleted one.



'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION) 
@TITLE:-> GET PRODUCT BY ID 
@ABOUT: ABOUT getProductById
@LOCATION:[🔺routes/product/,🔺controller/product/, ] 
@REQUEST :  PARAM

@ROUTE
Invite getUserById(for userInfo) && getProductById(for extrack product Id)

@CONTROLLER
see after findById stuff why? for that
want show you something for that we diffenatly can
grabbed all the product here but want to populate based
on category as well it is not at all compulsary(later discuss in case you'r confused you can also remove if you want) to do it here but again we can change it as many methode as we like it may be sort,may be populate....etc in this case we use sort


'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION) 
@TITLE:-> 💹SAVING TSHRT IN MONGO AND TSHRT ASSETS
@ABOUT: ABOUT 
@LOCATION:[🔺routes/product/,🔺controller/product/, ] 
@REQUEST : POST
@EXPORT/INVITE/REQUIRE: formidable, _(lodash),fs
@KEEP_NOTE: BEFOURE CHECK POSTMAN YOU SUPPOSE TO BE ADMIN & SIGNIN & SEND INFORMATION IN FORM-DATA IN POSTMAN

After,
we'r gonna focus on createProduct is gonna take advantage of forms data so we've to expect thing on base on that.As per the documentation; 
Ref: ✈️🔗https://www.npmjs.com/package/formidable

-🎗️The very first thing we saw in docs is that cration of form using that new formidable.IncomingForm() now we'v objet this form
-🎗️As soon as you'v this object form it expect 3 parameters
  🔺1st- error, 
  🔺 2nd- filds(name,description,price...)
  🔺 3rd one files.
  why 🤔🤨? is true form.keepExtensions = true;
  its because desired to save files weather the files are png,or jpg formate
-🎗️parse form & pass 3 parameter either receive error or weather file and field;
-🎗️check for error IF CONDITION(If ther person is coming here in error probably probem in file)

------
in case, after there is no come back to "fields"  let first PUT restication on field let assume all filds are great & we'r able to created further ""fields"" on base on that e.g let product = new Product(fields);
assuming & relyig that user is passing information in correct way in this field then we'r gonna put a restication on that ..but now
-🎗️handles files So how do we handled let
 >> first check "size of file"
 >> handle file here is almost exatly same like mp3 handled
    make sure we'r fetch photo from 🗃️model/product/ here models name like photo
    3000000 it's mb & this if statment is managing my photos

-🎗️including the file in product
 >> Make sure we'r this fetch photo url from 🗃️model/product/ product.photo.data & this is where you need to mention entire full path of file so for that let's use "fs" it has lot more methode like readfile & inside one pass formidable file path to grabbed the exact path of it.
 >> talk about 2ns line Also we'v to mention contentType(type can be anything like png,jpg) here for the DATABASE
 >> technically This below two lines save the data into dbs
 >> Now the product is getting ready for save

ref: ✈️🔗https://stackoverflow.com/questions/73308891/node-fs-error-the-path-argument-must-be-of-type-string-or-an-instance-of-buff
 
-🎗️Save to DB Photos
-@CONCLUSION: 
 -Declered the form wiht IncomingForm
 -parse the form with 3 filds HANDLING is almost like text
 -handle file,include file,save to DATABASE

 -------
-🎗️ PUT RESTICATION ON FIELDS(last portion)
 what is the thing happend in product we'r having filds see befoure creating entry in DB need to put some restication over there 
     -firstly want destructuring the fields befour one
     -Fields like sinup,signin for name description belew one
     -sold is not gonna to coming up here from user itself sold is 
      something we'r going to putting it up as a middleware so everytime
      stock is being less in numbers that means sail is will automatically 
      higher so we'll designed a middleware as soon as tshrt is being sold
      out we'r gonna reduce the stock & we'r gonna increse the stock.

🤨KEEPNOTE: in the fronted we load the ""category"" from DATABASE & only allow user should be selectable


'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION) 
@TITLE:-> READ:->SOME OPTIMISATION VIA BINARY DATA && MIDDLEWARE
@ABOUT: getProduct,photo 
@LOCATION:[🔺routes/product/,🔺controller/product/, ] 
@REQUEST : GET, GET
@KEEP_NOTE: IF 🤦‍♂️Mistakely in getProductById middleware not mention ".populate" The category Data which you created will not rendered !! Need to populate data in getProductById Middleware;

@OVERVIEW@
Go CONTROLLER 😗
Note:
  -🎗️line return.res..here is a catch mostly applicationn
  designed in a such away we'r gonna notice if you'r also 
  serving something like mp3 or may be photos there are not being served
  directly into get methode return.res..line becz this mp3, or photos can
  be really tricky and bulkey to grabbed from the database so what they
  do just in this case just like put undefined on req.product.photo that not shown in fronted.
  -🎗️it does'nt give it to back to user.
  -🎗️the advantage of this is gonna be this return.res ... line quick parse and give you quick response 
  
  This is for exports.photo
  but what About photos?? might be you'r thinking.
  let see => what we can do here is we can put up a
  "middleware" which in backend As we'r firing up the 
  fronted request, as soon as we does that this line
  return res. is parsed rest of the thing while the photo
  can load on background. 
  -🎗️This is a safe chaining(safetyNetCheck)(swift use)


'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION) 
@TITLE:-> UPDATE AND DELETE TSHRT
@ABOUT: deleteProduct,updateProduct 
@LOCATION:[🔺routes/product/,🔺controller/product/, ] 
@REQUEST : DELETE, PUT
@KEEP_NOTE: BEFOURE CHECK POSTMAN YOU SUPPOSE TO BE ADMIN & SIGNIN & SEND INFORMATION IN FORM-DATA IN POSTMAN

UPDATE one
Plans::=>what we'r gonnna to do in update section fields
         just like we'r having all the fields in UI to save
         a product similarly we'r gonna have same exact UI
         for the updation of product.what'll do as soon as 
         the updation page is getting load we'r gonna pull up the information
         from database we fill up all the fileds with that informtion as soon as
         the user hit save we'r gonna perform save operation 
         on top of that.

UPDATION CODE(CONTROLLER) 
lodash - now we update this one how we'r gonna
       update this we'r gonna just simply called product + Now the things which 
       is going to come from Lodash above one => we've got this lodash which help
       us working with route objects, creating this new object array and stuff like
       that
       _lodash it has variety of methods like extent(methode) what it does? 
        so it takes the exiting value in the object that you'r having and it just
        extend this value means all the updation value get involve there as well & it
        also update the value.
        _.extent it requires two things first give me fields that i'm looking
        it for product is gonna do that + then , we can directly takes from
        fields which is in the formadable & now this fields are gonna be updated
        inside this "product" what we mention first in extent that's wy we'r having
        this lodash Note: in case this look like bulkey to you there are other methode like tripple dot(...)
        we can do that ,we can do a hack over there buy that's all fine  
   

'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION) 
@TITLE:-> GET ALL PRODUCTS (LISTING ROUTE with Custom Querry)
@ABOUT: LISTING ROUTE deleteProduct,updateProduct 
@LOCATION:[🔺routes/product/,🔺controller/product/, ] 
@REQUEST : GET
@KEEP_NOTE: BEFOURE CHECK POSTMAN YOU SUPPOSE TO BE ADMIN & SIGNIN & SEND INFORMATION IN FORM-DATA IN POSTMAN
     
Here we get all product list what we create previously!!
-pass async/await 
-pass query to customizing data base on either user or default one 
-sort data either in ascending or decending
-pass select(-ve) Negative sign mean Don't want any data 
-pass limit






'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION) 
@TITLE:-> UPDATE YOUR INVENTORY(MIDDLEWARE)
@ABOUT: STOCK AND SOLD (FocusOn:Reduce stock & increse Sold) 
@LOCATION:[🔺controller/product/, ] 
@REQUEST : 
@KEEP_NOTE: BEFOURE CHECK POSTMAN YOU SUPPOSE TO BE ADMIN & SIGNIN & SEND INFORMATION IN FORM-DATA IN POSTMAN

Ref:🔗 https://mongoosejs.com/docs/api/model.html#Model.bulkWrite()

@OVERVIEW@ 
-🎗️Talk about some of the OPERATION performed by MIDDLEWARE
-🎗️ +-Stock & +-sold we've to perform two thing at same time this one
-🎗️Need 2 middleware one chage for "stock" & seconde change for "sold"
-🎗️Need one method i.e bulkWrite see above link Ref 
-🎗️it has 3 parameter need to pass 
 1st which op want to perform 
 2nd is options 
 3rd is callback 
-🎗️base on id or anything we nedd find it to perform update & delete op for that mongoose provide option "filter" find that   
-🎗️write MIDDLEWARE for that "updateStock"
 😗KEEP_NOTE: NO NEED ROUTE we mentions at fronted 
-🎗️By Looping trough you get many product want to reduce stock & increse sold 
-🥲Remember go on above link & see we'r performing insertOne operation(op) by the creating this one for every product we return & use in "bulkWrite";
  -🎗️find out product base on filter methode (id or x)
  -🎗️perform update: op on stock & sold
   Note: .count throw from fronted side 
  -🎗️pass it into Product.bulkWrite with 3 things 




'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION) 
@TITLE:-> TO GET ALL DISTINCT CATEGORIES
@ABOUT: find unique Category (getAllUniqueCategories)
@LOCATION:[🔺controller/product/, routes/product ] 
@REQUEST : GET 
@KEEP_NOTE: BEFOURE CHECK POSTMAN YOU SUPPOSE TO BE ADMIN & SIGNIN & SEND INFORMATION IN FORM-DATA IN POSTMAN

@OVERVIEW@ 
@about:list category
@here it was my idea when i was desining this in my Admin pannel
 user will be able to create a product but obiviously he needs to 
 create category as well so he need to select as a category. now i 
 won't allow him to write the category becz it might create some of
 the mistake here so rather i would like to populate this category in 
 a advance so in the fronted i'll just display this category so i need a methods
 on which i can just grabbed all the category all the distinct categoryes 
 no repition is there & i can see all of this stuff apart from this it can be
 use in defferent place.

 Go CONTROLLER ➡️ 
  editing backend again when we will work on fronted then
  we'll realize the things. ok moving forword.
  So, how we can get all unique category we have simpley 
  model with us 

  @Product: Nd we want to select field on that intead of findBy or find
   we have unique methods distinct which filter out unique value or category 

  Ref:✈️🔗 https://mongoosejs.com/docs/api/model.html#model_Model-distinct
  again it takes three parameter first is fields(which model filed want to upadate & base on find unique category), options(), and callback


'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - PLACING THE ORDER 
@TITLE:-> GET ORDER BY ID & CREATE AN ORDER & ENUM
 
@ABOUT: getOrderById,createOrder
@LOCATION:[🔺routes/order,🔺controller/order/ ] 
@REQUEST : PARAM, GET 
@KEEP_NOTE: BEFOURE CHECK POSTMAN YOU SUPPOSE TO BE ADMIN & SIGNIN & SEND INFORMATION IN FORM-DATA IN POSTMAN

@OVERVIEW@ 
 @@CREATE AN ORDER@@
➡️@CONTROLLER
while crating a order there is field you'r gonna notice in 🗃️model/order which is user which is based
on "User" Model line no. 23 at  let's create methods in controller

in this createMethode method i want to use req.profile why ??
told just dependant on "User" see above 
@req.body.order.user so this all is the method that i've defined
in models that is base on "User" so i can simpley go ahead & write req.profile 
because this profile is being populated by my params which is 🗃️"route/order"
-@further process create a order with DB by using New
crate a variable for which is order & this gonna be a object
from coming it up from Order & we can just simpley populate(req.body.order)
so that's ok. 
Now, since this is mongoose object now this order has a acces of save which return
error.

➡️@ROUTE 
Strategies for create route
ofCourse since we'r populating everything from user 
model so i need a "/userId" as well Now interested stuff begin
adding a middleware Accept Admin use two isSingn,isAuthe because
becaus anybudyy can place/purchase order.

@pushOrderInPurchaseList
-anther thing i want to put up i want to push the order into purchase list.
Once the user being purchase to push my into purchase list.
@updateStock
Then, I want to update my stock as well so gonna copy this updateStock & 
once the stock is being updated then i'm gonna simply fire up my methods
which is gonna be
@createOrder.

@conclude: The region i'm doing this in the order because i'm assuming that order
has been successfully it mean The ammount has successfully deducted from a use


➡️@ABOUT: ENUM 
@Ideabehind(status"enum")
 firstly go on project notes in your book And read about ennum & then read docs
 Ref:✈️🔗 https://masteringjs.io/tutorials/mongoose/enum#:~:text=May%2023%2C%202022,you%20try%20to%20save()%20.

 we'r gonna get it as a ennum we'r gona selcting value from it The type should be !"string"
 then choose default As soon as Value we'll get that time will use
 Then go to routes/order.js read //Read comment then go to contrler/order & check getAllOrders
 Note: This will clear all things in fronted one.


 H.W : Lodash
  https://www.youtube.com/watch?v=BjXq1MWXgpE&ab_channel=CoderDost



'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - PLACING THE ORDER 
@TITLE:-> UPDATE THE ORDER STATUS

@ABOUT: getAllOrders,getOrderStatus,updateStatus
@LOCATION:[🔺routes/order,🔺controller/order/ ] 
@REQUEST : GET, GET,PUT 
@KEEP_NOTE: BEFOURE CHECK POSTMAN YOU SUPPOSE TO BE ADMIN & SIGNIN & SEND INFORMATION IN FORM-DATA IN POSTMAN

  @🔺ABOUT_ORDER_STATUS(getAllOrders)
  -🎗️two more things which are required here is we'r gonna look here 
  first & foremost The admin should be be allow to get the status
  for the all the product as well & as well as user should be update
  the status as well of the orders
  -🎗️we'r gonna've res.json() We can use this Order.schema.path("status").enumValue
  in case if you'r confussing let's explore this models/order from here
  we need to grabbed all this one  ?why not suggesting enumValue let's discuss further 

  @🔺ABOUT_UPDATE_STATUS 
  (we've Order with us & we can fire up a update methods here
   you know update methods takes couple of parameters & then gives u a response back firstly
   just locate the stuff {_} 
   -🎗️base on _id we can grabbed this _id req.body.orderId
   @KEEP_NOTE:that's we r grabbing from fronted after that
   -🎗️want to set the stuff {$set}
   @KEEP_NOTE:because it is updating the status so i'm gonna use variable {_$set } so what is thing u want 
   to set mention here {$set: {status:req.body.status}} 
   so want to set status which is gonna be set base on 
   req.body.status. read docs about $set 

   Ref: 🔗✈️https://www.mongodb.com/docs/manual/reference/operator/update/set/
   
   -🎗️Then, simply call callback

*/