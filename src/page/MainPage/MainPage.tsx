import { Button } from "../../components/Button/Button";
import * as style from "./MainPage.module.scss"
import {Filters} from "../../components/Filters/Filters";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getMovies} from "../../store/moviesSlice";
import {Link, useLocation} from "react-router-dom";
import {Page} from "../../components/Page/Page";
import {queryParamsActions} from "../../store/queryParamsSlice";
import {Rating} from "../../components/Rating/Rating";
import {MovieCard} from "../../components/MovieCard/MovieCard";
import {Notifications} from "../../components/Notifications/Notifications";

export function MainPage(){
    const dispatch = useDispatch<AppDispatch>()
    const movies = useSelector((s: RootState)=> s.movies)
    const queryParam = useSelector((s: RootState)=> s.queryParams)

    useEffect(()=>{
        console.log(queryParam.page)
        dispatch(getMovies({page: queryParam.page,
            countElement:queryParam.count,
            genre:queryParam.genre,
            country:queryParam.country,
            year: queryParam.year
        }))
    },[queryParam.page, queryParam.count, queryParam.year, queryParam.country, queryParam.genre])
    const changeParams = (name:'page' | 'count') => {
        return (value: number)=>{
            dispatch(queryParamsActions.changeNumberParam({type: name, value: value}));
            console.log(1)
        }
    }
    const setCountElement = (count: number)=>{
        changeParams('count')(count)
        changeParams('page')(1)
    }
    return (
        <div className={style.layout}>
            <Filters/>
            {!movies.loading.moviesLoading ? (movies && movies.movies && movies.movies.docs && movies.movies.docs.length!==0) ? (<div className={style.movies}>
                {movies.movies.docs.map((el) => (<MovieCard el={el}/>))}
                <div className={style.pages}>
                <Page curPage={queryParam.page} allPages={movies.movies.pages} setCurPage={changeParams('page')}/>
                <select className={style.count_pages} onChange={(e) => setCountElement(Number(e.target.value))} name="select">
                    <option selected={queryParam.count === 5} value="5">5</option>
                    <option selected={queryParam.count === 10} value="10">10</option>
                    <option selected={queryParam.count === 15} value="15">15</option>
                    <option selected={queryParam.count === 30} value="30">30</option>
                </select>
                </div>
            </div>) : <Notifications title="Фильмов нет"/> : <Notifications title="Loading..."/>}
        </div>
    )
}