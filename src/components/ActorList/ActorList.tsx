import * as style from "./ActorList.module.scss";
import {Element} from "../Element/Element";
import {Page} from "../Page/Page";
import React, {useState} from "react";
import {Person} from "../../store/interfaces/movieInterface";
import {Title} from "../Title/Title";

interface ActorListProps {
    persons: Person[],
    curPersonPage: number,
    setCurPersonPage: (numder: number)=>void
}
export function ActorList({persons}: ActorListProps) {
    const [curPersonPage, setCurPersonPage] = useState(1)
    return(
        <div className={style.actors}>
            <Title title="Актёры"/>
            <div className={style.actorsList}>
                {persons.map((el, ind) => (
                    (ind >= (curPersonPage - 1) * 4 && ind < curPersonPage * 4) ?
                        <Element key={el.id} id={el.id} photo={el.photo} title={el.name} addition={el.enName}/>  : null
                ))}</div>
            <Page curPage={curPersonPage} allPages={Math.ceil(persons.length / 4)}
                  setCurPage={setCurPersonPage}/>
        </div>
    )
}