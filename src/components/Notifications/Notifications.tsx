import * as style from "./Notifications.module.scss"
import {NotificationsProps} from "./NotificationInterface";


export function Notifications({title}: NotificationsProps) {
    return (
        <div className={style.title}>{title}</div>
    )
}