import PropTypes from "prop-types";
import { useState } from "react";

const Searchbar = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={props.value}
        placeholder="Ingrese su busqueda"
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log("lo que tipeo antes de hacer click", inputValue);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            props.setSearchValue(e.target.value);
          }
        }}
      />
      <button
        onClick={() => {
          props.setSearchValue(inputValue);
        }}
      >
        Buscar
      </button>
    </div>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
};

export default Searchbar;
