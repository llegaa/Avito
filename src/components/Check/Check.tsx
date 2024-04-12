import {CheckboxProps} from "./CheckInput";
import {useState} from "react";
import * as style from "./Check.module.scss"
import arrow from "../../assets/arrow.png"
import cn from "classnames"
export function Check({text, list, onClick, error, loading}: CheckboxProps) {
    const [checked, setChecked] = useState(false)
    return(
        <div className={style.check}>
        <div onClick={()=>setChecked(prew => !prew)} className={cn(style.container, {
            [style.checked] : checked
        })}>
            {text}
            <img src={arrow} alt='стрелка'/>
        </div>
            {checked && (
                <div className={style.list}>
                    {!error ? (!loading ?
                        list.map((el, ind) => (
                            <div onClick={(event) => {
                                onClick(event.currentTarget.innerHTML);
                                setChecked(false);
                            }} key={el.name}>
                                {el.name}
                            </div>
                        ))
                        : <div>Loading...</div>) : <div>{error}</div>
                    }
                </div>
            )}
        </div>
    )
}