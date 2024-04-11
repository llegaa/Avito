import {Button} from "../Button/Button";
import * as style from "./MovieCard.module.scss";
import {Rating} from "../Rating/Rating";
import {Link} from "react-router-dom";
import React from "react";
import {Doc} from "../../store/doc";

interface MovieCardProps {
    el: Doc
}
export function MovieCard({el}:MovieCardProps) {
    return(
        <Link to={`/movie/${el.id}`}>
            <Button>
                <div className={style.container}>
                    <div className={style.part}>
                        {el.poster.url && <img src={el.poster.url} alt="Превью"/>}
                        <div className={style.information}>
                            <div>{el.name}</div>
                            <div>{`${el.alternativeName ? `${el.alternativeName},` : ''} ${el.year}, ${el.movieLength ?? el.seriesLength} мин.`}</div>
                            <div>{`${(el && el.countries) && el.countries.map(c => ` ${c.name}`)}, ${el.genres[0].name}`}</div>
                        </div>
                    </div>
                    <Rating rating={el.rating.kp}/>
                </div>
            </Button>
        </Link>
    )
}