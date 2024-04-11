import * as style from "./Rating.module.scss"
import React from "react";

export function Rating({rating}: {rating:number}){
    return <div className={style.rating}>{parseFloat(rating.toFixed(1))}</div>
}