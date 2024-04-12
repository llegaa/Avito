import {NavLink} from "react-router-dom";
import * as style from "./Header.module.scss"
import logo from "../../assets/logo.svg"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {queryParamsActions} from "../../store/searchSlice";
import {getMovies} from "../../store/searchSlice";
import {useEffect, useState} from "react";
import {MoviesInterface} from "../../store/interfaces/moviesInterface";
import {Element} from "../Element/Element";
import {loadState, saveState} from "../../store/storage";

export function Header() {
    const [active, setActive] = useState(false)
    const [data, setData] = useState<MoviesInterface[]>(loadState('pastSearchResults'))
    const dispatch = useDispatch<AppDispatch>()
    const search = useSelector((s: RootState) => s.search)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (search.search) dispatch(getMovies(search.search));
        }, 1000);
        if (search.search === '') {
            setData(loadState('pastSearchResults') ?? [])
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [search.search]);
    useEffect(() => {
        setData(search.docs)
    }, [search.docs])

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        dispatch(queryParamsActions.setSearch(event.target.value))
    }

    const searchClick = (el: MoviesInterface) => {
        saveState(el, 'pastSearchResults')
        setActive(false)
    }
    const inputClick = () => {
        setData(loadState('pastSearchResults'))
        setActive(true)
    }
    return (
        <div className={style.container}>
            <img src={logo} alt='logo'/>
            <div className={style.search}>
                <input onClick={() => inputClick()} onChange={onInputChange} className={style.input}/>
                {active && (<>
                    <ul className={style.searchResult}>
                        {data &&
                            data.map((el, index) => (
                                <li key={index} onClick={() => searchClick(el)}>
                                    <NavLink key={el.id} to={"/movie/" + el.id}><Element id={el.id}
                                                                                         photo={el.poster.previewUrl}
                                                                                         title={el.name}
                                                                                         addition={String(el.year)}/></NavLink>
                                </li>
                            ))}
                    </ul>
                    <div onClick={() => setActive(false)} className={style.background}></div>
                </>)
                }
            </div>
        </div>
    )
}