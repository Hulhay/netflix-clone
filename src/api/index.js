import axios from 'axios';
import { getRandomPage } from '../shared/random';

const baseUrl = process.env.REACT_APP_BASEURL;
const key = process.env.REACT_APP_API_KEY;

const getTrendingMovieList = async () => {
  const url = `${baseUrl}/trending/movie/week`;
  const movie = await axios.get(`${url}`, {
    params: {
      api_key: key,
      page: getRandomPage(),
    },
  });
  return movie.data.results;
};

const getMovieDetail = async (id) => {
  const url = `${baseUrl}/movie/${id}`;
  const movie = await axios.get(`${url}`, {
    params: {
      api_key: key,
    },
  });
  return movie.data;
  // console.log(movie.data);
};

export { getTrendingMovieList, getMovieDetail };
