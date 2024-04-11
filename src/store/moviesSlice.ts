import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {RootState} from "./store";
import {Doc} from "./doc";
import {PREFIX} from "./API";
export interface fields {
    name: string
    slug: string
}
export const JWT_PERSISTENT_STATE = 'userData'
export interface moviesList {
        docs: Doc[],
        total: number,
        limit: number,
        page: number,
        pages: number,
}
export interface movies {
    movies: moviesList
    countries: fields[],
    genres: fields[],
    loading : {
        moviesLoading: boolean,
        countriesLoading: boolean,
        genresLoading: boolean,
    },
    error : {
        moviesError: string,
        countriesError: string,
        genresError: string,
    }
}
const initialState: movies = {
    movies: {
        docs: [
            {
                id: 0,
                name: "string",
                alternativeName: "string",
                enName: "string",
                type: "string",
                year: 0,
                description: "string",
                shortDescription: "string",
                movieLength: 0,
                names: [
                    {
                        name: "string",
                        language: "string",
                        type: "string"
                    }
                ],
                externalId: {
                    kpHD: "48e8d0acb0f62d8585101798eaeceec5",
                    imdb: "tt0232500",
                    tmdb: 9799
                },
                logo: {
                    url: "string"
                },
                poster: {
                    url: "string",
                    previewUrl: "string"
                },
                backdrop: {
                    url: "string",
                    previewUrl: "string"
                },
                rating: {
                    kp: 6.2,
                    imdb: 8.4,
                    tmdb: 3.2,
                    filmCritics: 10,
                    russianFilmCritics: 5.1,
                    await: 6.1
                },
                votes: {
                    kp: "60000",
                    imdb: 50000,
                    tmdb: 10000,
                    filmCritics: 10000,
                    russianFilmCritics: 4000,
                    await: 34000
                },
                genres: [
                    {
                        name: "string"
                    }
                ],
                countries: [
                    {
                        name: "string"
                    }
                ],
                releaseYears: [
                    {
                        start: 2022,
                        end: 2023
                    }
                ],
                isSeries: true,
                ticketsOnSale: true,
                totalSeriesLength: 0,
                seriesLength: 0,
                ratingMpaa: "string",
                ageRating: 0,
                top10: 0,
                top250: 0,
                typeNumber: 0,
                status: "string"
            }
        ],
        total: 0,
        limit: 0,
        page: 1,
        pages: 0,
    },
    countries: [
        {
            name: 'string',
            slug: 'string'
        }
    ],
    genres:  [
        {
            name: 'string',
            slug: 'string'
        }
    ],
    loading : {
        moviesLoading: false,
        countriesLoading: false,
        genresLoading: false,
    },
    error : {
        moviesError: '',
        countriesError: '',
        genresError: '',
    }
}

export const getMovies = createAsyncThunk<moviesList, {page: number, countElement: number, country: string|null, genre: string|null, year: string|null}, {state: RootState}>('v1.4/movie',
    async ({page, countElement, country, genre, year}, thunkAPI)=>{
        const token = process.env.REACT_APP_TOKEN;
        const {data} = await axios.get(`${PREFIX}/v1.4/movie?page=${page}&limit=${countElement}${country!==null?`&countries.name=${country}`:''}${genre!==null?`&genres.name=${genre}`:''}${year!==null?`&year=${year}`:''}`, {
            headers: {
                'X-API-KEY': token,
            }
        })
        return data
    }
)

export const getCountries = createAsyncThunk<fields[], void, {state: RootState}>(
    'v1/movie/possible-values-by-field?field=countries.name',
    async (_, {getState}) => {
        const token = process.env.REACT_APP_TOKEN;
        const {data} = await axios.get(`${PREFIX}/v1/movie/possible-values-by-field?field=countries.name`, {
            headers: {
                'X-API-KEY': token,
            }
        });
        console.log('countrie')
        console.log(data)
        return data;
    }
);
export const getGenres = createAsyncThunk<fields[], void, {state: RootState}>(
    'v1/movie/possible-values-by-field?field=genres.name',
    async (_, {getState}) => {
        const token = process.env.REACT_APP_TOKEN;
        const {data} = await axios.get(`${PREFIX}/v1/movie/possible-values-by-field?field=genres.name`, {
            headers: {
                'X-API-KEY': token
            }
        });
        console.log('genre')
        console.log(data)
        return data;
    }
);



const moviesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>{
        builder.addCase(getMovies.fulfilled, (state, action)=>{
            state.movies = action.payload
            state.loading.moviesLoading = false
        })
        builder.addCase(getMovies.pending, (state, action)=> {
            state.loading.moviesLoading = true
        })
        builder.addCase(getMovies.rejected, (state, action)=> {
            state.error.moviesError = action.error.message
        })
        builder.addCase(getCountries.fulfilled, (state, action)=>{
            state.countries =action.payload
            state.loading.countriesLoading = false
        })
        builder.addCase(getCountries.pending, (state, action)=> {
            state.loading.countriesLoading = true
        })
        builder.addCase(getCountries.rejected, (state, action)=> {
            state.error.countriesError = action.error.message
        })
        builder.addCase(getGenres.fulfilled, (state, action)=>{
            state.genres = action.payload
            state.loading.genresLoading = false
        })
        builder.addCase(getGenres.pending, (state, action)=> {
            state.loading.genresLoading = true
        })
        builder.addCase(getGenres.rejected, (state, action)=> {
            state.error.genresError = action.error.message
        })
    }
})

export default moviesSlice.reducer
export const userActions = moviesSlice.actions