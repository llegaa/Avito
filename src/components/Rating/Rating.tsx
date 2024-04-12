import * as style from "./Rating.module.scss"
import React from "react";
import {RatingProps} from "./RatingInterface";

export function Rating({rating}: RatingProps) {
    return <div className={style.rating}>{parseFloat(rating.toFixed(1))}</div>
}