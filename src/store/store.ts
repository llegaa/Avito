import {configureStore} from "@reduxjs/toolkit";
import movies from "./moviesSlice";
import movie from "./oneMovieSlice";
import queryParams from "./queryParamsSlice"
import search from "./searchSlice"

export const store = configureStore({
    reducer:{
        movies: movies,
        movie: movie,
        queryParams: queryParams,
        search: search
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch