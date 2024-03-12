import PropTypes from "prop-types";
import { useState } from "react";

const SearchBar = ({setSearchValue, setInput }) => {
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
            setSearchValue(e.target.value);
          }
        }}
      />
      <button
        onClick={() => {
          setSearchValue(inputValue);
        }}
      >
        Buscar
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
};

export default SearchBar;
