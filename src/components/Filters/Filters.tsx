import {Check} from "../Check/Check";
import * as style from "./Filters.module.scss"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {fields, getCountries, getGenres} from "../../store/moviesSlice";
import {queryParamsActions} from "../../store/queryParamsSlice";

export function Filters(){
    const [years, setYears] = useState<fields[]>([{name:'', slug:''}])
    const dispatch = useDispatch<AppDispatch>()
    const movies = useSelector((s: RootState)=> s.movies)
    const queryParam = useSelector((s: RootState)=> s.queryParams)
    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getGenres())
        let yearList: fields[] = []
        for(let year = 1874; year <= new Date().getFullYear(); year++) {
            yearList.push({name: `${year}`, slug: `${year}`})
        }
        setYears(yearList)
        console.log('years')
        console.log(years)
    },[])
    const changeParams = (name:'country' | 'genre' | 'year') => {
        return (value: string|null)=>{
            dispatch(queryParamsActions.changeStringParam({type: name, value: value}));
            dispatch(queryParamsActions.changeNumberParam({type: "page", value: 1}));
        }
    }
    const copy = ()=>{
        let record_url = document.URL; //Узнаю текущий url
        navigator.clipboard.writeText(record_url); //Копирую в буфер обмена
    }
    return(
        <div className={style.container}>
            <div className={style.filters}>
            <Check text={queryParam.country ?? 'Страна'} loading={movies.loading.countriesLoading} error={movies.error.countriesError} onClick={changeParams("country")} list={movies.countries}/>
            <Check text={queryParam.year??'Год'} loading={false} error='' onClick={changeParams("year")} list={years}/>
            <Check text={queryParam.genre??'Жанры'} loading={movies.loading.genresLoading} error={movies.error.genresError} onClick={changeParams("genre")} list={movies.genres}/>
            </div>
            <button className={style.button} onClick={copy}>Копировать ссылку</button>
        </div>
    )
}