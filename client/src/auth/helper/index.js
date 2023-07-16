import { API } from "../../backend";
//API means http://localhost:4000/api/

/* SIGNIN */
export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/*SIGNIN */
export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/*SIGNIN TRUE - !EXITS_IN_BROWSER*/
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};


/* if (typeof window !== "undefined") 
-It Mean WINDO object accessible to us 
-If that's case then access the localStorage of react has a property of setItem set jsonwebtoken & turn it into object to string 
-This is how user login 😀😀
-Want to LOGOUT REMOVE COOKIE By BELOW ROUTE With the HELP of SIGNOUT⤵️⤵️😵


/*SIGNOUT: SIGNIN FALSE */
export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => console.log("signout success"))
      .catch((err) => console.log(err));
  }
};


/* 
-BELOW route 
-check user validate or not MEAN login or not 
-return 0 or 1 || true or false value 
-if(typeof window == "undefined") Mean DON't Access window Object 
-return false user is not Authenticated 
-if in localStorage able to get "jsonwebtoken(jwt)" then parse the Data
-then via check data via FRONTEND if match then TRUE  
*/

/* 
-RETURN 1(TRUR) OR 0(FALSE)
-GET USER & TOKEN HERE 
  */
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
