import {Page} from "../Page/Page";
import React from "react";
import {ReviewInterface} from "../../store/interfaces/ReviewInterface";
import {Review} from "../Review/Review";
import * as style from "./ReviewList.module.scss"
import {Title} from "../Title/Title";

interface ReviewListProps {
    review: ReviewInterface,
    curReviewPage: number,
    setCurReviewPage: (number:number)=>void
}
export function ReviewList({review, curReviewPage, setCurReviewPage}: ReviewListProps) {
    return(
        <div className={style.container}>
            {review.docs.map((el) => <Review key={el.id} review={el} />)}
            <Page curPage={curReviewPage} allPages={Math.ceil(review.pages / 3)} setCurPage={setCurReviewPage} />
        </div>
    )
}