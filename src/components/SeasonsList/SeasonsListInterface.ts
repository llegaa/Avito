import {Seasons} from "../../store/interfaces/seasonInterface";

export interface SeasonListProps {
    seasons: Seasons,
    curSeasonPage: number,
    setCurSeasonPage: (number: number) => void
}