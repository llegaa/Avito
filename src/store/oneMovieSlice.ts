import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {RootState} from "./store";
import {PREFIX} from "./API";
import {Movie} from "./movie";
import {ReviewInterface} from "./review";
import {PosterInterface} from "./poster.interface";
import {Seasons} from "./season.interface";
import {getOneMovieInitialState} from "./oneMovieInitialState";

export interface MoviePage {
    movie: Movie,
    review: ReviewInterface,
    posters: PosterInterface,
    seasons: Seasons,
    loading : {
        movieLoading: boolean,
        reviewLoading: boolean,
        postersLoading: boolean,
        seasonLoading: boolean
    },
    error : {
        movieError: string,
        reviewError: string,
        postersError: string,
        seasonError: string
    }
}

const initialState: MoviePage = getOneMovieInitialState()

export const getMovie = createAsyncThunk<Movie, number, { state: RootState }>('v1.4/movie',
    async (id, thunkAPI) => {
        const token = process.env.REACT_APP_TOKEN;
        const {data} = await axios.get(`${PREFIX}/v1.4/movie/${id}`, {
            headers: {
                'X-API-KEY': token
            }
        })
        return data
    }
)
export const getReview = createAsyncThunk<ReviewInterface, { id:number, curReviewPage: number }, { state: RootState }>('v1.4/review',
    async ({id, curReviewPage}, thunkAPI) => {
        const token = process.env.REACT_APP_TOKEN;
        const {data} = await axios.get(`${PREFIX}/v1.4/review?movieId=${id}&page=${curReviewPage}&limit=3`, {
            headers: {
                'X-API-KEY': token
            }
        })
        return data
    }
)
export const getPosters = createAsyncThunk<PosterInterface, number, { state: RootState }>('v1.4/image',
    async (id, thunkAPI) => {
        const token = process.env.REACT_APP_TOKEN;
        const {data} = await axios.get(`${PREFIX}/v1.4/image?page=1&limit=10&movieId=${id}`, {
            headers: {
                'X-API-KEY': token
            }
        })
        return data
    }
)
export const getSeasons = createAsyncThunk<Seasons, { id:number, curSeasonPage: number }, { state: RootState }>('v1.4/season',
    async ({id, curSeasonPage}, thunkAPI) => {
        const token = process.env.REACT_APP_TOKEN;
        const {data} = await axios.get(`${PREFIX}/v1.4/season?page=${curSeasonPage}&limit=10&movieId=${id}`, {
            headers: {
                'X-API-KEY': token
            }
        })
        console.log(data)
        return data
    }
)

const oneMovieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovie.fulfilled, (state, action) => {
            state.movie = action.payload
            state.loading.movieLoading = false
        })
        builder.addCase(getMovie.pending, (state, action) => {
            state.loading.movieLoading = true
        })
        builder.addCase(getReview.fulfilled, (state, action) => {
            state.review = action.payload
            state.loading.reviewLoading = false
        })
        builder.addCase(getReview.pending, (state, action) => {
            state.loading.reviewLoading = true
        })
        builder.addCase(getPosters.fulfilled, (state, action) => {
            state.posters = action.payload
            state.loading.postersLoading = false
        })
        builder.addCase(getPosters.pending, (state, action) => {
            state.loading.movieLoading = true
        })
        builder.addCase(getSeasons.fulfilled, (state, action) => {
            state.seasons = action.payload
            state.loading.seasonLoading = false
        })
        builder.addCase(getSeasons.pending, (state, action) => {
            state.loading.seasonLoading = true
        })
    }
})

export default oneMovieSlice.reducer
export const oneMovieActions = oneMovieSlice.actions