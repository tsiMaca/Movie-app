import http from "../http-common";

const getMovie = searchValue =>{
    return http.get(`s=${searchValue}`)
};
const MovieService = {
    getMovie
};
export default MovieService;