import { Fragment } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieList from "../components/MovieList.jsx";
import { useDispatch } from "react-redux";
import { useHome } from "./useHome.jsx";

const Home = () => {
    const dispatch = useDispatch();
    const {
      movies,
      setInput
    } = useHome(dispatch)

    return (
        <Fragment>
            <SearchBar
              setInput={setInput} />
              <MovieList movies={movies} /> 
        </Fragment>
    );
}

export default Home;
 