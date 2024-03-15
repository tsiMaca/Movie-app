import {configureStore} from "@reduxjs/toolkit"
import moviesReducers from "./moviesSlice"

export const store = configureStore({
    reducer: {
        movies: moviesReducers,
    }
})