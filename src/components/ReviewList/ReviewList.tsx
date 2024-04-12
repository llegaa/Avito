import {Page} from "../Page/Page";
import React from "react";
import {Review} from "../Review/Review";
import * as style from "./ReviewList.module.scss"
import {ReviewListProps} from "./ReviewListInterface";


export function ReviewList({review, curReviewPage, setCurReviewPage}: ReviewListProps) {
    return (
        <div className={style.container}>
            {review.docs.map((el) => <Review key={el.id} review={el}/>)}
            <Page curPage={curReviewPage} allPages={Math.ceil(review.pages / 3)} setCurPage={setCurReviewPage}/>
        </div>
    )
}