import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Define the async thunk for fetching user data
  export const fetchMovieData = createAsyncThunk('movie/fetchMovieData', async (searchMovie) => {
    if(!!searchMovie){
        const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=f2ab93fd`;
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData.Search;
      
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