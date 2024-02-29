import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx"
import Searchbar from "./components/Searchbar.jsx";
import MovieList from "./components/MovieList.jsx";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f2ab93fd`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
      console.log("se esta seteando movies?", movies);
		}
	};

  useEffect(() => {
    getMovieRequest()
    if (!searchValue){setMovies([])}
  }, [searchValue]);

  return (
    <>
      <Header></Header>

      <Searchbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></Searchbar>

     <MovieList movies={movies}></MovieList>
    </>
  );
}

export default App;
