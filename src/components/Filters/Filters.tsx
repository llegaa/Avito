import {Check} from "../Check/Check";
import * as style from "./Filters.module.scss"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {queryParamsActions} from "../../store/queryParamsSlice";
import {moviesAPI} from "../../store/services/moviesSlice";
import {fields} from "../../store/interfaces/moviesInterface";

export function Filters() {
    const {data: countries, isLoading: loadingCountries, error: errorCountries} = moviesAPI.useFetchCountriesQuery()
    const {data: genres, isLoading: loadingGenres, error: errorGenres} = moviesAPI.useFetchGenresQuery()
    const [years, setYears] = useState<fields[]>([{name: '', slug: ''}])
    const dispatch = useDispatch<AppDispatch>()
    const queryParam = useSelector((s: RootState) => s.queryParams)
    useEffect(() => {
        let yearList: fields[] = []
        for (let year = 1874; year <= new Date().getFullYear(); year++) {
            yearList.push({name: `${year}`, slug: `${year}`})
        }
        setYears(yearList)
        console.log('years')
        console.log(years)
    }, [])
    const changeParams = (name: 'country' | 'genre' | 'year') => {
        return (value: string | null) => {
            dispatch(queryParamsActions.changeStringParam({type: name, value: value}));
            dispatch(queryParamsActions.changeNumberParam({type: "page", value: 1}));
        }
    }
    const copy = () => {
        let record_url = document.URL; //Узнаю текущий url
        navigator.clipboard.writeText(record_url); //Копирую в буфер обмена
    }
    let errMsgCountries = '', errMsgGenres = '';
    if (errorGenres) {
        if ('status' in errorGenres) {
            // you can access all properties of `FetchBaseQueryError` here
            errMsgGenres = 'error' in errorGenres ? errorGenres.error : JSON.stringify(errorGenres.data)
        }
    }
    if (errorCountries) {
        if ('status' in errorCountries) {
            errMsgGenres = 'error' in errorCountries ? errorCountries.error : JSON.stringify(errorCountries.data)
        }
    }
    return (
        <div className={style.container}>
            <div className={style.filters}>
                <Check text={queryParam.country ?? 'Страна'} loading={loadingCountries} error={errMsgCountries}
                       onClick={changeParams("country")} list={countries}/>
                <Check text={queryParam.year ?? 'Год'} loading={false} error='' onClick={changeParams("year")}
                       list={years}/>
                <Check text={queryParam.genre ?? 'Жанры'} loading={loadingGenres} error={errMsgGenres}
                       onClick={changeParams("genre")} list={genres}/>
            </div>
            <button className={style.button} onClick={copy}>Копировать ссылку</button>
        </div>
    )
}