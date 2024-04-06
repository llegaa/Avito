import { NavLink } from "react-router-dom";

export function Header(){
    return (
        <div>
            header
            <NavLink to={`${1}`}><img src='https://image.openmoviedb.com/tmdb-images/original/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg'/></NavLink>
        </div>
    )
}