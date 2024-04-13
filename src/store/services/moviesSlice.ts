import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PREFIX} from "../API";
import {fields, moviesListInterface} from "../interfaces/moviesInterface";


export const moviesAPI = createApi({
    reducerPath: 'moviesAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: PREFIX,
        prepareHeaders: (headers, {getState}) => {
            const token = process.env.REACT_APP_TOKEN;
            if (token) {
                headers.set('X-API-KEY', token);
            }
            return headers;
        },
    }),
    tagTypes: ['Movies'],
    endpoints: (build) => ({
        fetchAllMovies: build.query<moviesListInterface, {
            page: number,
            countElement: number,
            country: string,
            genre: string,
            year: string
        }>({
            query: ({page, countElement, country, genre, year}) => ({
                url: `/v1.4/movie?page=${page}&limit=${countElement}${country !== null ? `&countries.name=${country}` : ''}${genre !== null ? `&genres.name=${genre}` : ''}${year !== null ? `&year=${year}` : ''}`,

            }),
            providesTags: result => ['Movies']
        }),
        fetchCountries: build.query<fields[], void>({
            query: () => ({
                url: `v1/movie/possible-values-by-field?field=countries.name`
            }),
            extraOptions: {maxRetries: 3},
        }),
        fetchGenres: build.query<fields[], void>({
            query: () => ({
                url: '/v1/movie/possible-values-by-field?field=genres.name'
            }),
            extraOptions: {maxRetries: 3},
        })
    })
})
