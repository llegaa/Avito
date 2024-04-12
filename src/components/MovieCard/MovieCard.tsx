import {Button} from "../Button/Button";
import * as style from "./MovieCard.module.scss";
import {Rating} from "../Rating/Rating";
import {Link} from "react-router-dom";
import React from "react";
import {MovieCardProps} from "./MovieCardInterface";


export function MovieCard({el}: MovieCardProps) {
    return (
        <Link key={el.id} to={`/movie/${el.id}`}>
            <Button>
                <div className={style.container}>
                    <div className={style.part}>
                        {el.poster.url && <img src={el.poster.url} alt="Превью"/>}
                        <div className={style.information}>
                            <div className={style.name}>{el.name ?? el.alternativeName}</div>
                            <div>{`${el.alternativeName ? `${el.alternativeName},` : ''} ${el.year}, ${el.movieLength ?? el.seriesLength} мин.`}</div>
                            <div>{`${(el && el.countries) && el.countries.map(c => ` ${c.name}`)}${el.countries && ','} ${el.genres[0].name}`}</div>
                        </div>
                    </div>
                    <Rating rating={el.rating.kp}/>
                </div>
            </Button>
        </Link>
    )
}