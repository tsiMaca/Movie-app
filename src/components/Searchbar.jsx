import PropTypes from "prop-types";
import { useState } from "react";
import { setSearchMovie, typedInput } from "../redux/moviesSlice.js"
import { useDispatch } from "react-redux";

const SearchBar = ({ setInput }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese su busqueda"
        onChange={(e) => {
          setInputValue(e.target.value);
          setInput(e.target.value)
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            dispatch(setSearchMovie(e.target.value));
          }
        }}
      />
      <button
        onClick={() => {
          dispatch(setSearchMovie(inputValue));
        }}
      >
        Buscar
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setInput: PropTypes.func.isRequired,
};

export default SearchBar;
