import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovie, fetchMovieData } from "../redux/moviesSlice.js";

const MIN_LENGTH = 4;

export const useHome = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state)=>state.movies.movies)
    const searchMovie = useSelector((state)=>state.movies.searchMovie)
    const [input, setInput] = useState("");
  
     useEffect(() => {
      if(!input){
        dispatch(fetchMovieData(""))
        dispatch(setSearchMovie(""))
      } else if (searchMovie && searchMovie.length >= MIN_LENGTH ){
      dispatch(fetchMovieData(searchMovie))
      }
    }, [searchMovie, input]);
    

    return {
        movies,
        setInput
    }
}

 