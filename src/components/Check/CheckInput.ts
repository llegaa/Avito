import {fields} from "../../store/interfaces/moviesInterface";


export interface CheckboxProps {
    text: string
    list: fields[]
    onClick: (value: string|null)=>void
    loading: boolean
    error: string
}