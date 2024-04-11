import * as style from "./Title.module.scss"

export function Title({title}: {title: string}) {
    return <div className={style.title}>{title}</div>
}