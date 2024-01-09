import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";

export default function Score(){
    let {userInfo} = useContext(DataContext);
    const [score, setScore] = useState();

    useEffect(()=>{ if(userInfo != undefined) { setScore(userInfo?.todayScore * 100) } },[userInfo])

    return(
        <div className="score sub-graphic-graphic">
            {score}
        </div>
    )
}