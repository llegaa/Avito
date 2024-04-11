import {Seasons} from "../../store/season.interface";
import {Element} from "../Element/Element";
import {Page} from "../Page/Page";
import React from "react";
import * as style from "./SeasonList.module.scss"
import {Title} from "../Title/Title";

interface SeasonListProps {
    seasons: Seasons,
    curSeasonPage: number,
    setCurSeasonPage: (numder: number) => void
}

export function SeasonList({seasons, curSeasonPage, setCurSeasonPage}: SeasonListProps) {
    return (
        <div className={style.seasons}>
            <div className={style.seasonsList}>
                {seasons.docs.map((el) => <Element id={el.movieId} photo={el.poster.previewUrl} title={el.name}
                                                   addition={el.episodesCount ? `${el.episodesCount} серий` : ''}/>)}
            </div>
            <Page curPage={curSeasonPage} allPages={seasons.pages}
                  setCurPage={setCurSeasonPage}/>
        </div>
    )
}