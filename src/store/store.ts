import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movie from "./oneMovieSlice";
import queryParams from "./queryParamsSlice"
import search from "./searchSlice"
import {moviesAPI} from "./services/movieSlice";

const rootReducer = combineReducers({
    movie,
    queryParams,
    search,
    [moviesAPI.reducerPath]: moviesAPI.reducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch