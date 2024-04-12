import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {RootState} from "./store";
import {PREFIX} from "./API";
import {MovieInterface} from "./interfaces/movieInterface";
import {ReviewInterface} from "./interfaces/ReviewInterface";
import {PosterInterface} from "./interfaces/posterInterface";
import {Seasons} from "./interfaces/seasonInterface";
import {getOneMovieInitialState} from "./initialState/oneMovieInitialState";

export interface MoviePage {
    movie: MovieInterface,
    review: ReviewInterface,
    posters: PosterInterface,
    seasons: Seasons,
    loading: {
        movieLoading: boolean,
        reviewLoading: boolean,
        postersLoading: boolean,
        seasonLoading: boolean
    },
    error: {
        movieError: string,
        reviewError: string,
        postersError: string,
        seasonError: string
    }
}

const initialState: MoviePage = getOneMovieInitialState()

export const getMovie = createAsyncThunk<MovieInterface, number, { state: RootState }>('v1.4/movie',
    async (id, {rejectWithValue}) => {
        const token = process.env.REACT_APP_TOKEN;
        for (let i = 0; i < 3; i++) {
            try {
                const {data} = await axios.get(`${PREFIX}/v1.4/movie/${id}`, {
                    headers: {
                        'X-API-KEY': token
                    }
                })
                return data
            } catch (e) {
                if (i === 2 || e.name === 'TypeError') {
                    return rejectWithValue(e);
                }
            }
        }
    }
)
export const getReview = createAsyncThunk<ReviewInterface, { id: number, curReviewPage: number }, {
    state: RootState
}>('v1.4/review',
    async ({id, curReviewPage}, {rejectWithValue}) => {
        const token = process.env.REACT_APP_TOKEN;
        for (let i = 0; i < 3; i++) {
            try {
                const {data} = await axios.get(`${PREFIX}/v1.4/review?movieId=${id}&page=${curReviewPage}&limit=3`, {
                    headers: {
                        'X-API-KEY': token
                    }
                })
                return data
            } catch (e) {
                if (i === 2 || e.name === 'TypeError') {
                    return rejectWithValue(e);
                }
            }
        }

    }
)
export const getPosters = createAsyncThunk<PosterInterface, number, { state: RootState }>('v1.4/image',
    async (id, {rejectWithValue}) => {
        const token = process.env.REACT_APP_TOKEN;
        for (let i = 0; i < 3; i++) {
            try {
                const {data} = await axios.get(`${PREFIX}/v1.4/image?page=1&limit=10&movieId=${id}`, {
                    headers: {
                        'X-API-KEY': token
                    }
                })
                return data
            } catch (e) {
                if (i === 2 || e.name === 'TypeError') {
                    return rejectWithValue(e);
                }
            }
        }
    }
)
export const getSeasons = createAsyncThunk<Seasons, { id: number, curSeasonPage: number }, {
    state: RootState
}>('v1.4/season',
    async ({id, curSeasonPage}, {rejectWithValue}) => {
        const token = process.env.REACT_APP_TOKEN;
        for (let i = 0; i < 3; i++) {
            try {
                const {data} = await axios.get(`${PREFIX}/v1.4/season?page=${curSeasonPage}&limit=10&movieId=${id}`, {
                    headers: {
                        'X-API-KEY': token
                    }
                })
                return data
            } catch (e) {
                if (i === 2 || e.name === 'TypeError') {
                    return rejectWithValue(e);
                }
            }
        }
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
            state.error.movieError = ''
        })
        builder.addCase(getMovie.pending, (state, action) => {
            state.loading.movieLoading = true
        })
        builder.addCase(getMovie.rejected, (state, action) => {
            state.error.movieError = action.error.message
        })
        builder.addCase(getReview.fulfilled, (state, action) => {
            state.review = action.payload
            state.loading.reviewLoading = false
            state.error.reviewError = ''
        })
        builder.addCase(getReview.pending, (state, action) => {
            state.loading.reviewLoading = true
        })
        builder.addCase(getReview.rejected, (state, action) => {
            state.error.reviewError = action.error.message
        })
        builder.addCase(getPosters.fulfilled, (state, action) => {
            state.posters = action.payload
            state.loading.postersLoading = false
            state.error.postersError = ''
        })
        builder.addCase(getPosters.pending, (state, action) => {
            state.loading.movieLoading = true
        })
        builder.addCase(getPosters.rejected, (state, action) => {
            state.error.postersError = action.error.message
        })
        builder.addCase(getSeasons.fulfilled, (state, action) => {
            state.seasons = action.payload
            state.loading.seasonLoading = false
            state.error.seasonError = ''
        })
        builder.addCase(getSeasons.pending, (state, action) => {
            state.loading.seasonLoading = true
        })
        builder.addCase(getSeasons.rejected, (state, action) => {
            state.error.seasonError = action.error.message
        })
    }
})

export default oneMovieSlice.reducer
export const oneMovieActions = oneMovieSlice.actions