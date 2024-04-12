import * as style from "./Title.module.scss"
import {TitleProps} from "./TitleInterface";

export function Title({title}: TitleProps) {
    return <div className={style.title}>{title}</div>
}