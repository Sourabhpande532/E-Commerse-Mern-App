/* SAVE TO LOCAL STORAGE */
export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1, // from Card.js
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

/* title add tshirt to cart
In this we'r gonna work of i just simply want to click on "Add to Cart" & when I click on to this on to cart we'r gonna store user cart information into localstorage & i should be redirect to "cart" page/component where i can make further Purchase or come back to home as per my wish & all the cart will updated. 
Now,we've preveledges To addItemtoCart 
-Go To Cart.js 
-and get redirect to... for that create states, optionally call useEffect
-getRedirect call this Methode*/
