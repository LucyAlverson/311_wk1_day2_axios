// import axios here

const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = process.env.MOVIE_DB_API_KEY;

console.log("The api key is --", api_key);

/**
 * We are getting axios url and then
 * @returns the response from axios
 */

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios(url)
    .then(function (response) {
      // console.log('RESPONSE: ', response);
      return response;
    });
}

/**
 * 
 * @param {*} id 
 * @returns 
 */


const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  // get request specified by User ID
  return axios(url)
    .then(function (response) {
      // console.log('Movie:', response)
      return response.data
    })
}

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios(url)
  .then( function (response) {
    return response.status
  })
  .catch(function (error) {
    return error.response.status
  })
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}