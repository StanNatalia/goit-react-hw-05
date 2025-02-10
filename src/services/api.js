import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODMyNjFkMzU1YTIyNTEzMzRjNjhhZjIyYjk1ZDBkNiIsIm5iZiI6MTczODkyMjAwOC4xODMsInN1YiI6IjY3YTVkODE4NzdiOGNlZDQ1NjY3MDk0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ctot_PA8nEevbmT8VjU80xaRmLVBBrl6hWb6c4bwr0k";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;

export const getMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const getDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};

export const getSearch = async (query) => {
  const response = await axios.get(`/search/movie`, {
    params: { query },
  });
  return response.data.results;
};
