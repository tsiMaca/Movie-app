import PropTypes from "prop-types";

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="image-container d-flex justify-content-start m-3"
        >
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};
export default MovieList;
  