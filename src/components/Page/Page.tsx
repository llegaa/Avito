import * as style from "./Page.module.scss"
import {useEffect, useState} from "react";
import cn from "classnames"

export function Page({curPage, allPages, setCurPage}: {
    curPage: number,
    allPages: number,
    setCurPage: (page: number) => void
}) {
    const [pages, setPages] = useState([])
    useEffect(() => {
        let newPages = [];
        let lastPage = allPages
        if (allPages > 5) {
            if (curPage + 5 < allPages) lastPage = curPage + 5
        }
        if (allPages < 5 || curPage > 2 && curPage <= allPages - 2) {
            for (let i = (allPages > 5 ? curPage - 2 : 1); i <= (allPages > 5 ? curPage + 2 : allPages); i++) {
                newPages.push(i)
            }
        } else if (curPage <= 2) {
            for (let i = 1; i <= 5; i++) {
                newPages.push(i)
            }
        } else {
            for (let i = allPages - 4; i <= allPages; i++) {
                newPages.push(i)
            }
        }
        setPages(newPages)
    }, [curPage, allPages])
    const handlePrevPage = () => {
        if (curPage > 1) {
            setCurPage(curPage - 1)
        }
    }
    const handleNextPage = () => {
        if (curPage < allPages) {
            setCurPage(curPage + 1)
        }

    }
    const setPage = (el: number) => {
        setCurPage(el)
    }
    return (
        <div className={style.pages}>
            <button onClick={handlePrevPage}>{'<'}</button>
            {pages.map((el) => <div className={cn({[style.curPage]: el === curPage})} onClick={() => setPage(el)}
                                    key={el}>{el}</div>)}
            {curPage + 2 < allPages && '...'}
            {curPage + 2 < allPages && <div onClick={() => setPage(allPages)}>{allPages}</div>}
            <button onClick={handleNextPage}>{'>'}</button>
        </div>
    )
}