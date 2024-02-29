import axios from "axios";
export default axios.create({
  baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=f2ab93fd",
  headers: {
    "Content-type": "application/json"
  }
});
