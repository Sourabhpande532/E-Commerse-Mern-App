/*
@FOLLOW: 
Routes.js ---> App.js---> Optional(index.js)--->core/Home/Cart/

'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@:- CONNECT FRONTEND TO BACKEND  
@TITLE:->   INJECT BACKEND INTO FRONTEND env
@ABOUT: process of connect fronted to backend
@LOCATION:[🔺.env,🔺src/backend.js,🔺src/core/Home.js] 
@OVERVIEW:
So How do we interact Our Database Just Hold URL into Variable that it!!
ref: ✈️🔗https://sst.dev/chapters/environments-in-create-react-app.html

-🎗️PROCESS OF CONNECT FRONTEND TO BACKEND 
-NOTE:-> You'r backend should be running on server(npm start)
-🎗️create .env on client frotend folder 
-🎗️plug in URL by taking refference of above line 
  🔺E.G REACT_APP_BACKEND = http://localhost:4000/api/
-🎗️in order to check Go 🗃️srr/core/Home.js & console.log("API Is", process.env.REACT_APP_BACKEND) 
-🎗️then restart the server O.W Show undefined
-🎗️create separate file backend.js & use as a API 

'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - CONNECT FRONTEND TO BACKEND 
@TITLE:-> TAKE FULL ADVANTAGE OF BASE FILE 
@ABOUT: All about same file use Everywhere which is having common/same nav and footer & about children
@LOCATION:[🔺src/core/Base.js, 🔺src/core/Home.js] 

@OVERVIEW:
how we can take advantage the base(src/core) file so far everything is going to coming up on our applicat'n
through home & that's aways in the case at least in the application.but we also want to create some sort of templete which loads
nearly in every file you might've notice when you visit any website The footer & navigation bar always remain same weather you visit webpage which is privacy policy, or shopping or card so we need some kind of templeting str. that is usually being inserted in the base
& then inside the base we load all the components home, card, signup, singin & all those stuff.

So, firstly openUp 🗃️Base.js(src/core) 
-🎗️first we'll prepared the Base.js & once this is prepared then we'r go & inject our Home page through
the Base.
-🎗️create rafce
-🎗️create content inside one myName,title,description,children pass it via PROPS 
🎯-from where we grabbed this "children"
🎯-Then, import this Base.js into Home.js & use as COMPONENT 
🎯-children is neccessory for where ever you use 🗃️Base.js file as a COMPONENT & whatsoever content you pass inside one like tags,attributes for showing or demonstate those code Need to pass "children" Best e.g of 🗃️Home.js


'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - NAVIGATION & AUTHENTICATION  
@TITLE:-> INJECT THE NAV BAR & ADD CSS 
@ABOUT: 
@LOCATION:[🔺src/core/Navbar/, 🔺src/core/Base/] 

@OVERVIEW:
-🎯INJECT NAVBAR INTO BASE.JS FILE 
-🎯in this one we'r going to add navigation bar surly we'll migrating throught variety of pages e.g signin signout, login, logout like
let's go ahead & inject that. we'r gonna keep them as a separate component in 🗃️Navbar.js

go to ➡️(Navbar.js) 
Adding Style to navbar. Go and explore belew part.
ADD CurrentTab = (history,path) history is coming it from Link itself;
-Need to define conditional Rendering 
-if history.location.pathname === is equal to "path" which is coming it from LINK base on provide defferent-defferent styling 
-we use the useLocation hook from react-router-dom to get the current location.

-PROCESS OF ADDING STYLING IF YOU ARE IN CURRENT TAB THEN LINK COLOR IS "WIGHT" IT MEAN LINK IS ACTIVE O.W IF YOU'R NOT IN CurrentTab THE COLOR IS DEFFERENT "GREEN" IT MEAN YOU YOU NOT ACTIVE 

'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - NAVIGATION & AUTHENTICATION  
@TITLE:-> ROUTES FOR SIGNIN AND SIGNUP  
@ABOUT: 
@LOCATION:[🔺src/user/signin/signup/..., 🔺src/Routes.js] 
@PROCESS_Between: 🗃️signin/signup ---🗃️Routes.js 
@OVERVIEW:
-Working on signin & signup And signout route
-should be able to access each one of them
-Perform conditional Rendering on Navbar it's
-Condition:if user signin == should be able to see Signout button & rest of the people should'nt be seen it 
-create form on src/user/signup/signin/signout 
-Go To 🗃️Routes.js & import this signup form 
🔺-!IMP_NOTE: route name('/signin') should be match with Navbar.js file that you were passed in (to="/signin")


'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - NAVIGATION & AUTHENTICATION  
@TITLE:-> SIGNIN AND SIGNUP FORM & AUTHENTICATION for react  
@ABOUT: Fetch API From FRONTEND & Manupulate 
@LOCATION:[🔺src/auth/index.js] 
@OVERVIEW:
Talking to BACKEND & fetch the DATA 

 
'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - NAVIGATION & AUTHENTICATION  
@TITLE:-> SIGNUP COMPONENT TALK TO BACKEND   
@ABOUT: All About signup and signin page, fetch API FROM Backend 
@LOCATION:[🔺src/user/signup/,🔺src/user/signin/]
@OVERVIEW:

-Take a refference of 
Ref:🔗✈️https://chat.openai.com/c/e3a0a6ab-ca55-48f1-bc92-c49918140df2

we'r going to talk about three main puzzles in the session which help to signout the user 
📶first one => where to stored all the data that is coming it form froms befour we actually submitted to backend.
& there come up the state come in the pictures which is specility of react so we'r gonna learn here.  
📶2nd one => when somebuddy type in the form we want to get what he exactly typing & put them into stored something
like handle changes. is gonna be methods that will do it. 
📶3rd one => finaly hit submit whaterver user type it we'r gonna stroed it into a state/stage & pick that up & will 
make a response Or will make a request to the backend through the method that we'r designed "helper" & then get the 

..............................................................
@ABOUT:-> signin.js 
-why didRedirect -> if user successfully signin we need redirect somewhere for sake base on what role he is having...
-why loading     -> while fetch the data the loading is going on please have pations 
-use Redirect 
-import singin,authenticate,isAuthenticated
-after distruturing follow below one ↙️↙️
-Take a look one time on 🗃️auth/helper/index.js is gonna return entire localStorage which has jsonwebtoken which is at Browswe window we need hold on this one into Variable in 🗃️signin.js 

-REMEMBER onSubmit event you passed authenticate at the time index.js you pass 'data' and 'next' so that data we include & insted next we use/fireup 'callback' for return ...all values 

'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - RESTRICATION ROUTE AND PROFILE   
@TITLE:-> CONDITIONAL RENDERING FOR SIGNOUT    
@ABOUT: MOREOVER ON ADMIN AND PRIVATE ROUTE 
@LOCATION:[🔺src/auth/helper/index,🔺src/core/Navbar/]
@OVERVIEW:

if signin - show signout 
if not - signup

Go➡️ src/auth/index.js in Signout pass we pass "next" middleware but Why?? because it allow you to pass "callback" where base on we redirect user either Home or somewher eles

Ref: 🔗✈️https://v5.reactrouter.com/web/example/auth-workflow
Ref: 🔗✈️https://v5.reactrouter.com/
Ref: 🔗✈️https://legacy.reactjs.org/docs/fragments.html

@ABOUT:RESTRICATION ON ROUTES 
@LOCATION: 
befour RESTRICATION we play with signin & singup by using "ReactFragments" instead of div because div it is Block Level elemnt mess up all the stuff So use this this is all we'r performing for "Base on Certain Condition we show signin & signup Routes"

@TITLE: ADMIN AND USER ROUTES IN FRONT END 
@FOLLOW_Proccess: 
-user/AdminBoard,/UserDashboard,/Profile
-Go Routes.js (Import stuff)


Work on Stripe CheckOut !! 
-Optional You can use paypal,paytm,rajorpay,Brean tree CheckOut
-🎯create 🗃️core/StripeCheckout.js file Then inject this into 🗃️core/Cart.js
-🎯(🗃️@cart.js) first & foremost i want to load all the products that i can load there & (that were set in states) for calculate some stuff!! && apart from that I would like to pass reload function so i can refresh this COMPONENT whenever i like bez let's suppose user Remove elemnt he obisly see same price in cart  
-🎯send this thing as a props products={products},setReload={setReload};
-🎯then come to this one 🗃️StripeCheckout.js 
-🎯use useState and useEffect && and invite information via props 
-🎯then call isAuthenticated,cartEmpty,loadCart(it helps us to load all the items into our states)
-🎯Now after all this Need a state to hold this thing 
  -🎯this isAuthenticated() give the all the neccessory element which is userId & token!! 
  -🎯one more thing that we want to grabbed since we've access of this products so base on that we want to calculate total of our entire checkout products process here for that need to define method "getFinalPrice" here we can calculate Payment of users base on how much it purchase!!
  -🎯Then call it showStripeButton which is calling base on isAuthenticated if user is signin then it call o.w redirect to signin page
  -🎯then npm i react-strip-checkout(pop up cart)
  -🎯then wrapped code into it(pay with stripe button)
  -🎯makePayment is a method which is automatically generated with the help of "stripeKey" base on that you can make request to backend & backend can handle ... should be process the thing token and it expect token as a parameter
  Now time to go Backend 
  Now Go This folder 🗃️controller/stripePayment.js 


::H.W SECTION 16 part 8
*/
