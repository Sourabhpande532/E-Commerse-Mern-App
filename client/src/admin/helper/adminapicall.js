import { API } from "../../backend";

// CREATE CATEGORY
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

