import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {movies} from "./moviesSlice";
import {Doc} from "./doc";
import {RootState} from "./store";
import axios from "axios";
import {PREFIX} from "./API";


export interface queryParams {
    search?: string
    docs: Doc[]
    total: number,
    limit: number,
    page: number,
    pages: number,
}
const queryParam = new URLSearchParams(location.search);
const initialState: queryParams = {
    search: "",
    docs:[],
    total: 0,
    limit:10,
    page:1,
    pages:1
}
export const getMovies = createAsyncThunk<queryParams, string, {state: RootState}>('v1.4/movie/search',
    async (search, thunkAPI)=>{
        const token = process.env.REACT_APP_TOKEN;
        const {data} = await axios.get(`${PREFIX}/v1.4/movie/search?page=1&limit=7&query=${search}`, {
            headers: {
                'X-API-KEY': token
            }
        })
        console.log(data)
        return data
    }
)
const searchSlice = createSlice({
    name: 'queryParams',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            return {...state, ...action.payload};
        })
    }
})

export default searchSlice.reducer
export const queryParamsActions = searchSlice.actions