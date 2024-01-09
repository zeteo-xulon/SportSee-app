import { useContext, useState, useEffect, PureComponent} from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import {DataContext} from "../DataProvider";

export default function Performance(){
    let {userPerformance} = useContext(DataContext);
    const [performance, setPerformance] = useState(userPerformance);

    useEffect(()=>{ if(userPerformance != undefined){
        let transformedPerformance = userPerformance.data.map(item => ({ ...item, kind: userPerformance.kind[item.kind]}))
        setPerformance(transformedPerformance)
    } },[userPerformance])

    // const transformedData = data.map(item => ({
    //     ...item,
    //     kind: kindMapping[item.kind]
    // }));

    return(
        <div className="performance sub-graphic-graphic">
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="value" angle={30} />
                    <PolarRadiusAxis />
                    <Radar dataKey="value" stroke="none" fill="#FF0101B2" fillOpacity={0.8} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}