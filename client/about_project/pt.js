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
@TITLE:-> INJECT THE NAV BAR 
@ABOUT: 
@LOCATION:[🔺src/core/Navbar/, 🔺src/core/Base/] 

@OVERVIEW:
-🎯INJECT NAVBAR INTO BASE.JS FILE 
-🎯in this one we'r going to add navigation bar surly we'll migrating throught variety of pages e.g signin signout, login, logout like
let's go ahead & inject that. we'r gonna keep them as a separate component in 🗃️Navbar.js

*/
