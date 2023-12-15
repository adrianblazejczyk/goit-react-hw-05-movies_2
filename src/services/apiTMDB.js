import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmI0ODgyYzNkZWI3M2JmZDRkNGY1MWI3YjdiZWMwYSIsInN1YiI6IjY1NzQ4NWI2YTg0YTQ3MDBmZTBkZmNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FFTQOaT4i29PlA-_7hcGbscX7ZGsZjvZqADjswRko_Y";
const API_URL = "https://api.themoviedb.org/3/";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const fetchData = async (apiPath, queryParams) => {
  try {
    const response = await axios.get(API_URL + apiPath, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: queryParams,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Błąd zapytania API. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    throw new Error("Błąd podczas pobierania danych z API");
  }
};

export const getTrending = async () => {
  const apiPath = "trending/movie/day?language=en-US";

  const params = {
    language: "en-US",
  };
  return fetchData(apiPath, params);
};

export const searchMovies = (searchKey) => {
  const apiPath = "search/movie";
  const params = {
    query: searchKey,
    include_adult: false,
    language: "en-US",
    page: 1,
  };
  return fetchData(apiPath, params);
};

export const getMovieDetails = (idFilm) => {
  const apiPath = `movie/${idFilm}`;
  const params = { language: "en-US" };
  return fetchData(apiPath, params);
};

export const getMovieCredits = (idFilm) => {
  const apiPath = `movie/${idFilm}/credits`;
  const params = { language: "en-US" };
  return fetchData(apiPath, params);
};

export const getMovieReviews = (idFilm) => {
  const apiPath = `movie/${idFilm}/reviews`;
  const params = { language: "en-US", page: 1 };
  return fetchData(apiPath, params);
};
