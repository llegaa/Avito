import * as style from "./Notifications.module.scss"

interface NotificationsProps {
    title: string
}
export function Notifications({title}: NotificationsProps) {
    return(
        <div className={style.title}>{title}</div>
    )
}