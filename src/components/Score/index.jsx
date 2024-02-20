import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

export default function Score(){
    let {userInfo} = useContext(DataContext);
    const [score, setScore] = useState([{name: 'score', value:0}]);

    useEffect(()=>{ if(userInfo != undefined) { 
        const scoreSelected = userInfo?.todayScore || userInfo?.score;
        setScore([{name: 'base', uv: 100, fill:"transparent"},{name: 'score', uv: scoreSelected * 100, fill:"#FF0000"}]) } 
    },[userInfo])


    return(
        <div className="score sub-graphic-graphic">
            <ResponsiveContainer>
                <Legend>Score</Legend>

                <RadialBarChart data={score} cx="50%" cy="50%" innerRadius="50%" outerRadius="80%">
                    <RadialBar dataKey="uv" startAngle={180} barSize={10} cornerRadius={100} />
                </RadialBarChart> 
                
                <div className="score-text-container">
                    <p className="score-result">{score[1]?.uv}%</p>
                    <p className="score-text">de votre<br/>objectif</p>
                </div>

            </ResponsiveContainer>
            


        </div>
    )
}