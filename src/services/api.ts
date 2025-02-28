import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchRecipes = async (
  filterType?: string,
  filterValue?: string,
) => {
  let endpoint = "/recipes";
  console.log(endpoint);
  if (filterType && filterValue) {
    endpoint += `?${filterType}=${encodeURIComponent(filterValue)}`;
  }

  const response = await axios.get(`${API_URL}${endpoint}`);
  return response.data;
};

export const fetchRecipeById = async (id: string) => {
  const response = await axios.get(`${API_URL}/recipes/${id}`);
  return response.data;
};
