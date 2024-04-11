import React from "react";
import * as style from "./Element.module.scss"

interface ElementProps {
    id: number
    photo: string
    title: string
    addition: string|number
}

export function Element(element: ElementProps) {
    return (
        <div className={style.container} key={element.id}>
            {element.photo && <img src={element.photo} alt='фото'/>}
            <div>
                <div>{element.title}</div>
                {element.addition && <div className={style.enName}>{element.addition}</div>}
            </div>
        </div>
    )
}