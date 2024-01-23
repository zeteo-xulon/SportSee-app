import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Session(){
    const {userAverageSession} = useContext(DataContext);
    const [userSession, setUserSession] = useState();

     // Fonction pour transformer le numéro du jour en initiale
     const transformDay = (day) => {
        const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
        return days[day % 7]; // Utilisez modulo 7 pour éviter les erreurs en cas de nombre hors de portée
    };

    useEffect(() => {
        if(userAverageSession?.sessions){
            const transformedSessions = userAverageSession.sessions.map(session => ({
                ...session,
                day: transformDay(session.day)
            }));
            setUserSession(transformedSessions);
        }
    }, [userAverageSession]);

    return(
        <section className="user-average-session sub-graphic-graphic">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={300} data={userSession}
                margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
                    <XAxis dataKey="day" tick={{ fill: '#FFFFFF', opacity: '0.5' }} />
                    <Tooltip dataKey="sessionLength" viewBox={{ x: 0, y: 0, width: 400, height: 400 }} />
                    <Legend />
                    <Line 
                    type="natural" 
                    fillOpacity={0.5} 
                    dataKey="sessionLength" 
                    dot={false} 
                    stroke="#FFFFFF" 
                    connectNulls={true}
                    strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}