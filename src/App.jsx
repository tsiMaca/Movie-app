import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx"
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [input, setInput] = useState("");

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f2ab93fd`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

  console.log("movies2", searchValue);

   useEffect(() => {
    if(!input){
      setMovies([])
      setSearchValue("")
    } else if (searchValue && searchValue.length >=4){
      getMovieRequest()
    }
  }, [searchValue, input]);

  return (
    <>
      <Header/>
      <SearchBar
        setSearchValue={setSearchValue}
        setInput={setInput}
      />
      <MovieList movies={movies}/>
    </>
  );
}

export default App;
