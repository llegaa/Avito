import {useEffect, useState} from "react";
import {Doc} from "../../store/interfaces/ReviewInterface";
import cn from "classnames";
import * as style from "./Review.module.scss"
import {fail} from "assert";
interface Interface {
    review: Doc
}
export function Review({review}: Interface){
    const [open, setOpen] = useState(false)
    const [button, setButton] = useState(false)
    useEffect(()=>{
        if(review.review.split(' ').length>50){
            setButton(true)
        }
        },[])
    const reduction = (feedback: string)=>{
        if(feedback.split(' ').length>50){
            if(open){
                return feedback
            }
            return feedback.split(' ').slice(0, 50).concat('...').join(' ')
        }else{
            return feedback
        }
    }
    return(
        <div className={style.container}>
            <div className={cn(style.name, {
                [style.neutral]: review.type==='Нейтральный',
                [style.negative]: review.type==='Негативный',
                [style.positive]: review.type==='Позитивный',
            })}>{review.author}</div>
            <div className={style.review} dangerouslySetInnerHTML={{ __html: reduction(review.review) }} />
            <button className={cn(style.button, {
                [style.open]: open,
                [style.close]: !open,
            })} onClick={()=>setOpen(prev=>!prev)}>{open ? 'Скрыть' : 'Ещё'}</button>
        </div>
    )
}