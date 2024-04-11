import * as style from "./List.module.scss"
import {useState} from "react";
 export function List () {
     const [showList, setShowList] = useState(false);
    return(
        <div>
            <button onClick={()=>setShowList(prev => !prev)}>
                {showList ? 'Hide List' : 'Show List'}
            </button>
            {showList && (
                <div className={style.list}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                </div>
            )}
        </div>
    )
 }