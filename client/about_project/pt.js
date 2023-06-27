/*
@FOLLOW: 
Routes.js ---> App.js---> Optional(index.js)--->core/Home/Cart/

'🥊🥊---------------------NEW-----------------------🥊🥊'

@SECTION@: - INJECT BACKEND INTO FRONTEND env 
@TITLE:-> 
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






*/