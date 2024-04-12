import * as style from "./Movie.module.scss"
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import React, {useEffect, useState} from "react";
import {getMovie, getPosters, getReview, getSeasons} from "../../store/oneMovieSlice";
import Carousel from "../../components/Slider/Slider";
import {Rating} from "../../components/Rating/Rating";
import {ActorList} from "../../components/ActorList/ActorList";
import {SeasonList} from "../../components/SeasonsList/SeasonList";
import {ReviewList} from "../../components/ReviewList/ReviewList";
import {Title} from "../../components/Title/Title";
import {Notifications} from "../../components/Notifications/Notifications";

export function Movie() {
    const [curPersonPage, setCurPersonPage] = useState(1)
    const [curReviewPage, setCurReviewPage] = useState(1)
    const [curSeasonPage, setCurSeasonPage] = useState(1)
    let {id} = useParams();
    const dispatch = useDispatch<AppDispatch>()
    const {movie, review, loading, error, posters, seasons} = useSelector((s: RootState) => s.movie)
    const {page, count, genre, country, year} = useSelector((s: RootState) => s.queryParams)
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getMovie(parseInt(id)))
        dispatch(getPosters(parseInt(id)))
        dispatch(getSeasons({id: parseInt(id), curSeasonPage: curSeasonPage}))
        setCurReviewPage(1)
        setCurPersonPage(1)
    }, [id])
    useEffect(() => {
        dispatch(getReview({id: parseInt(id), curReviewPage: curReviewPage}))
    }, [curReviewPage, id])
    useEffect(() => {
        dispatch(getSeasons({id: parseInt(id), curSeasonPage: curSeasonPage}))
    }, [curSeasonPage, id])
    const back = () => {
        navigate(`/?page=${page}&count=${count}${country ? `&country=${country}` : ''}${country ? `&genre=${genre}` : ''}${year ? `&country=${year}` : ''}`)
    }
    const loadingElement = <div className={style.loading}><Notifications title="Loading..."/></div>;
    return (
        <div className={style.container}>
            <button className={style.back} onClick={back}>Назад</button>
            {!error.movieError ? !loading.movieLoading ? <div className={style.info}>
                    {movie.poster && movie.poster.previewUrl &&
                        <img className={style.poster} src={movie.poster.previewUrl} alt="Постер"/>}
                    <div className={style.mainInfo}>
                        <div className={style.infoRow}>
                            <div>
                                <div className={style.title}>{movie.name ?? movie.alternativeName}({movie.year})</div>
                                <div className={style.addition}>{movie.alternativeName && movie.alternativeName} {movie.ageRating !== null ? `${movie.ageRating}+` : ''}</div>
                            </div>
                            {movie.rating && <Rating rating={movie.rating.kp}/>}
                        </div>
                        <div className={style.description}>{movie.description}</div>
                        {(movie && movie.persons && movie.persons.length !== 0) ?
                            <ActorList curPersonPage={curPersonPage} setCurPersonPage={setCurPersonPage}
                                       persons={movie.persons}/> : <div>Ни один актер не пострадал на съемке</div>}
                    </div>
                </div> : <div className={style.loading}><Notifications title="Loading..."/></div> :
                <Notifications title={error.movieError}/>}
            {error.postersError ? <Notifications title={error.postersError}/> : (loading.postersLoading ?
                <Notifications title="Loading..."/> : <div>
                    {posters.docs.length !== 0 && <Carousel slides={posters.docs.map((el) => {
                        return {id: null, url: el.url}
                    })}/>}
                </div>)}
            <Title title="Сезоны"/>
            {error.seasonError ? <Notifications title={error.seasonError}/> : (loading.seasonLoading ?
                <Notifications title="Loading..."/> : ((seasons && seasons.docs && seasons.docs.length !== 0) ? <div>
                    <SeasonList curSeasonPage={curSeasonPage} setCurSeasonPage={setCurSeasonPage} seasons={seasons}/>
                </div> : <Notifications title="Нет других частей"/>))}
            <Title title="Отзывы"/>
            {error.reviewError ? <Notifications title={error.reviewError}/> : (!loading.reviewLoading ? (
                (review && review.docs && review.docs.length !== 0) ? (
                    <ReviewList review={review} curReviewPage={curReviewPage} setCurReviewPage={setCurReviewPage}/>
                ) : (
                    <Notifications title="Отзывов пока нет"/>
                )
            ) : (
                <div className={style.loading}><Notifications title="Loading..."/></div>
            ))}
            {error.movieError ? <Notifications title={error.movieError}/> : (!loading.postersLoading ? <div>
                <Title title="Похожие фильмы"/>
                {(movie && movie.similarMovies && movie.similarMovies.length) ?
                    <Carousel slides={movie.similarMovies.map((el) => {
                        return {id: el.id, url: el.poster.url}
                    })}/> : <Notifications title="Этот фильм уникален, похожих нет"/>}
            </div> : <div className={style.loading}><Notifications title="Loading..."/></div>)}
        </div>
    )
}