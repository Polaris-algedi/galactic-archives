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

export const getAllPlanets = async () => {
  try {
    const response = await axios.get(`${API_URL}/planets/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching planets data:", error);
    throw error;
  }
};

export const getAllStarships = async () => {
  try {
    const response = await axios.get(`${API_URL}/starships/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching starships data:", error);
    throw error;
  }
};

export const getAllVehicles = async () => {
  try {
    const response = await axios.get(`${API_URL}/vehicles/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles data:", error);
    throw error;
  }
};

/**
 * Retrieves data from multiple URLs asynchronously.
 *
 * @param {Array<string>} urls - An array of URLs to fetch data from.
 * @return {Promise<Array<any>>} - A promise that resolves to an array of data from each URL.
 */
export const getDataFromUrls = async (urls) => {
  if (!Array.isArray(urls)) {
    urls = [urls];
  }

  const validUrls = urls.filter((url) => url); // Filter out null or undefined URLs

  const requests = validUrls.map((url) =>
    axios.get(url).then((response) => response.data),
  );

  return Promise.all(requests);
};
