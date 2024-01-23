import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

export default function Score(){
    let {userInfo} = useContext(DataContext);
    const [score, setScore] = useState();

    useEffect(()=>{ if(userInfo != undefined) { 
        const scoreSelected = userInfo?.todayScore || userInfo?.score;
        setScore({value: scoreSelected * 100}) } 
    },[userInfo])


    return(
        <div className="score sub-graphic-graphic">
            <ResponsiveContainer>

                <RadialBarChart 
                barSize={15}
                data={score}
                innerRadius="30%"
                outerRadius="100%"
                startAngle={90}
                endAngle={450}
                margin={10}
                fill="#FF0000"
                >
                    <RadialBar dataKey="value" cornerRadius={25} fill="#000000" />
                </RadialBarChart>

                <div className="score-text-container">
                    <p className="score-result">{score?.value}%</p>
                    <p className="score-text">de votre<br/>objectif</p>
                </div>

            </ResponsiveContainer>
            


        </div>
    )
}