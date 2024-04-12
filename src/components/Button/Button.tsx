import {ButtonProps} from "./buttonProps";
import * as style from "./Button.module.scss"

export function Button({children, ...props}: ButtonProps) {
    return (
        <button className={style.button} {...props}>
            {children}
        </button>
    )
}