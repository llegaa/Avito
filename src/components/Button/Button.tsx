import { ButtonInterface } from "./button.interface";
import * as style from "./Button.module.scss"

export function Button({ children, ...props }: ButtonInterface) {
    return (
        <button className={style.button} {...props}>
            {children}
        </button>
    )
}