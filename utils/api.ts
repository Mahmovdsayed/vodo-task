"use server";
import axios from "axios";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
axios.defaults.headers.get["Accept"] = "application/json";

const getAllMovies = async (num: Number) => {
  try {
    const response = await axios.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${num}&sort_by=popularity.desc`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const getFilmData = async (id: string) => {
  try {
    const response = await axios.get(`/movie/${id}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getMovieCasts = async (id: string) => {
  try {
    const response = await axios.get(`/movie/${id}/credits?language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAllMovies, getFilmData, getMovieCasts };
