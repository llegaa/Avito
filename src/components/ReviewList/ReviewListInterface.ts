import {ReviewInterface} from "../../store/interfaces/ReviewInterface";

export interface ReviewListProps {
    review: ReviewInterface,
    curReviewPage: number,
    setCurReviewPage: (number: number) => void
}