import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";

export default function Intensity(){
    let {userPerfomance} = useContext(DataContext);
    const [performance, setPerformance] = useState();

    useEffect(()=>{ if(userPerfomance != undefined){ setPerformance(userPerfomance) } },[userPerfomance])
    return(
        <div className="intensity">

        </div>
    )
}