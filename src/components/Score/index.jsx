import { useContext } from "react";
import { DataContext } from "../DataProvider";

export default function Score(){
    let {data} = useContext(DataContext);

    return(
        <div className="score">

        </div>
    )
}