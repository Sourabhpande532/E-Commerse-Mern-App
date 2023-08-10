import { API } from "../../backend";

export const getmeToken = (userId, token) => {
  return fetch(`${API}/payment/gettoken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const processPayment = (userId, token, paymentInfo) => {
  return fetch(`${API}/payment/braintree/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentInfo),
  })
    .then((reponse) => {
      return reponse.json();
    })
    .catch((err) => console.log(err));
};

/* 
@NOTE:
-Need to Hit Two Routes 
@-One for Generating the "Token"
@-One for Proccing the "Payment"
Handled by Backend !!
braintree Atually check the "token" & "paymentInfo" it checks what amounts it is Remember there is client token as well also need to pass 

Go To Cart.js 
here need to create another Component & inject web drop ui provide by braintree

*/
