import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const navigate = ({type, value}: { type: string, value: string | number | null }) => {
    let queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get(type)) queryParams.delete(type)
    if (value) queryParams.set(type, value.toString());
    window.history.pushState({}, '', '?' + queryParams.toString());
}

export interface queryParams {
    page: number,
    count: number,
    country: string | null,
    genre: string | null,
    year: string | null
}

const queryParam = new URLSearchParams(location.search);
const initialState: queryParams = {
    page: queryParam.get('page') ? parseInt(queryParam.get('page')) : 1,
    count: queryParam.get('count') ? parseInt(queryParam.get('count')) : 10,
    country: queryParam.get('country') ?? null,
    genre: queryParam.get('genre') ?? null,
    year: queryParam.get('year') ?? null
}

const queryParamsSlice = createSlice({
    name: 'queryParams',
    initialState,
    reducers: {
        changeNumberParam: (state, action: PayloadAction<{ type: 'page' | 'count', value: number }>) => {
            navigate({type: action.payload.type, value: action.payload.value})
            state[action.payload.type] = action.payload.value
        },
        changeStringParam: (state, action: PayloadAction<{
            type: 'country' | 'genre' | 'year',
            value: string | null
        }>) => {
            navigate({type: action.payload.type, value: action.payload.value})
            state[action.payload.type] = action.payload.value
            console.log(`param ${state.country}`)
        },
    },
})

export default queryParamsSlice.reducer
export const queryParamsActions = queryParamsSlice.actions