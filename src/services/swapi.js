import axios from "axios";

const API_URL = "https://swapi-api.alx-tools.com/api";
export const getAllFilms = async () => {
  try {
    const response = await axios.get(`${API_URL}/films/`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching films data:", error);
    throw error;
  }
};

export const getFilm = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/films/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching film data:", error);
    throw error;
  }
};
