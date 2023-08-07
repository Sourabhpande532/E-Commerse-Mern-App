/* SAVE TO LOCAL STORAGE (ADD) */
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

    // UPADATE THE CART
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

/* REMOVE ITEM FROM LOCAL STORAGE INDIVIDUALLY(Separate) NOT ALL */
export const removeItemFromCart = (productId) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    console.log(cart);
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });
    // UPADATE THE CART
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }
  return cart; //Although Not need Too much But,Need to UPADATE On the Go
};

// LOAD LOCAL STORAGE INFO & DISPLAY ON CART.Js
export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

// empty Cart 
export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    next();
  }
};
