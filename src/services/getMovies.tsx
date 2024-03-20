import axios from "axios";


const get = (param) => {
    return axios.get(`http://www.omdbapi.com/?s=${param}&apikey=f2ab93fd`);
};

const MovieService = {
    get,
}

export default MovieService;