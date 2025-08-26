import axios from "axios";

const api_key = "d046dda281b146c6ff67df7b785530ab";
const moviesBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=d046dda281b146c6ff67df7b785530ab';

const getTrendingMovies = () => {
  return axios.get(`${moviesBaseUrl}/trending/all/week?api_key=${api_key}`);
};
 const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default { getTrendingMovies , getMovieByGenreId};
