import { useContext, useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from "../DataProvider";


export default function Activity(){
    let { userActivity } = useContext(DataContext);
    const [activities, setActivities] = useState();
    
    useEffect(()=>{ if(userActivity != undefined) { setActivities(userActivity?.sessions) } },[userActivity])

    return(
        <div className="user-activity">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={835} height={320} data={activities}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day"/>
                    <YAxis yAxisId="left" orientation="left" stroke="#282D30" />
                    <YAxis yAxisId="right" orientation="right" stroke="#282D30" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[10, 10, 0, 0]} />
                    <Bar yAxisId="right" dataKey="calories" fill="#E60000" name="Calories Brûlées (Kcal)" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}