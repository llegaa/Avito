import { useParams } from "react-router-dom";

export function Element() {
    let { id } = useParams();

  console.log(id);
    return(
        <div>{id}</div>
    )
}