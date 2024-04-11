import {fields} from "../../store/moviesSlice";

export interface CheckboxProps {
    text: string
    list: fields[]
    onClick: (value: string|null)=>void
    loading: boolean
    error: string
}