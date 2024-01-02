import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Session(){
    const {userSession} = useContext(DataContext);
    const [userAverageSession, setUserAverageSession] = useState();

    useEffect(()=>{
        if(userSession != undefined){ setUserAverageSession(userSession) }
    },[userSession])

    return(
        <section className="user-average-session">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={300} data={userAverageSession}
                margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sessionLength" tick={{ fill: '#FFFFFF', opacity: '0.5' }} />
                    <YAxis dataKey="day" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}