import {useState} from "react";
import style from './App.module.scss'
export const AppModule = () => {
    const [count, setCount] = useState<number>(0)
    const increment = () => setCount(prev => prev + 1)
    return (
        <div>
            <h1>{count}</h1>
            <button className={style.button} onClick={increment}>inc</button>
        </div>
    )
}
