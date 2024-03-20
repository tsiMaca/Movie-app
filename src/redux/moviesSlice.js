import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import MovieService from "../services/getMovies";
// Define the async thunk for fetching user data
export const fetchMovieData = createAsyncThunk('movie/fetchMovieData', async (searchMovie) => {
  const urlParam = !!searchMovie ? searchMovie : null;
  if (urlParam) {
      try {
          const response = await MovieService.get(urlParam);
          const jsonData = response.data;
          if (jsonData && jsonData.Search) {
            return jsonData.Search;
          } else {
            console.error("Error fetching movie data: Datos no encontrados");
            return [];
        }
        } catch (error) {
            console.error("Error fetching movie data:", error);
            return [];
        }
  } else {
      return [];
  }
});

const initialState = {
    loading: false,
    error: null,
    movies: [],
    searchMovie: '',
    typeInput: '',
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setSearchMovie: (state, action) => { 
        state.searchMovie = action.payload;
    },
        typedInput: (state, action) => { 
        state.typeInput = action.payload;
    },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchMovieData.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchMovieData.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
          })
          .addCase(fetchMovieData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})


export const {setSearchMovie, typedInput} = moviesSlice.actions;
export default moviesSlice.reducer;