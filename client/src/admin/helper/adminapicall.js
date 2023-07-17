import { API } from "../../backend";

// CREATE CATEGORY(CALL 🔊)
export const createCategorys = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to create category. Please try again later.");
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error("An unexpected error occurred. Please try again later.");
    });
};

// GET ALL CATEGORIES AT ONE GO(CALL🔊)
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Failed to create all Categories. Please try again later."
        );
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error(
        "An unexpected error occurred while creating all categories. Please try again later."
      );
    });
};

// CREATE PRODUCT(CALL 🔊)
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to create Product. Please try again later.");
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error(
        "An unexpected error occurred in product. Please try again later."
      );
    });
};

// GET ALL PRODUCT (CALL 🔊)
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Failed to create listing product. Please try again later."
        );
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error(
        "An unexpected error occurred fetching products. Please try again later."
      );
    });
};

// GET SINGLE PRODUCT (CALL 🔊)
export const getProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Failed to fetch single Product. Please try again later."
        );
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error(
        "An unexpected error occurred in getProduct. Please try again later."
      );
    });
};

// UPDATE PRODUCT (CALL 🔊)
export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to Update Product. Please try again later.");
    }
  })
  .catch((err) => {
    console.log(err);
    throw new Error("An unexpected error occurred update product. Please try again later.");
  });
};

// DELETE PRODUCT (CALL 🔊)
export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to Delete Product. Please try again later.");
    }
  })
  .catch((err) => {
    console.log(err);
    throw new Error("An unexpected error occurred in product(delete). Please try again later.");
  });
};

