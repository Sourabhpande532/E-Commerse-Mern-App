import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch products: ${response.status} - ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      throw err;
    });
};
