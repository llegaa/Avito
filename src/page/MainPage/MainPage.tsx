import * as style from "./MainPage.module.scss"
import {Filters} from "../../components/Filters/Filters";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import {Page} from "../../components/Page/Page";
import {queryParamsActions} from "../../store/queryParamsSlice";
import {MovieCard} from "../../components/MovieCard/MovieCard";
import {Notifications} from "../../components/Notifications/Notifications";
import {moviesAPI} from "../../store/services/moviesSlice";

export function MainPage() {
    const dispatch = useDispatch<AppDispatch>()
    const queryParam = useSelector((s: RootState) => s.queryParams)
    const {data: moviesRTK, isLoading, error} = moviesAPI.useFetchAllMoviesQuery({
        page: queryParam.page,
        countElement: queryParam.count,
        genre: queryParam.genre,
        country: queryParam.country,
        year: queryParam.year
    })
    const scrollRef = useRef(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [...Object.values(queryParam)]);
    const changeParams = (name: 'page' | 'count') => {
        return (value: number) => {
            dispatch(queryParamsActions.changeNumberParam({type: name, value: value}));
            console.log(1)
        }
    }
    const setCountElement = (count: number) => {
        changeParams('count')(count)
        changeParams('page')(1)
    }
    let errMsg;
    if (error) {
        if ('status' in error) {
            errMsg = 'error' in error ? error.error : JSON.stringify(error.data)
        }
    }
    return (
        <div className={style.layout}>
            <Filters/>
            {errMsg ? <Notifications title={errMsg}/> :
                (isLoading ? <Notifications title="Loading..."/> :
                    (moviesRTK.docs.length !== 0 ? (
                        <div ref={scrollRef} className={style.movies}>
                            <div>{moviesRTK.docs.map((el) => (<MovieCard el={el}/>))}</div>
                            <div className={style.pages}>
                                <Page curPage={queryParam.page} allPages={moviesRTK.pages}
                                      setCurPage={changeParams('page')}/>
                                <select className={style.count_pages}
                                        onChange={(e) => setCountElement(Number(e.target.value))} name="select">
                                    <option selected={queryParam.count === 5} value="5">5</option>
                                    <option selected={queryParam.count === 10} value="10">10</option>
                                    <option selected={queryParam.count === 15} value="15">15</option>
                                    <option selected={queryParam.count === 30} value="30">30</option>
                                </select>
                            </div>
                        </div>) : <Notifications title="Фильмов нет"/>))}
        </div>
    )
}