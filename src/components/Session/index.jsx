import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
            <ResponsiveContainer width="100%" height="90%">

                <LineChart 
                data={userSession}
                margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >

                    <XAxis 
                    dataKey="day" 
                    tick={{ fill: '#FFFFFF', opacity: '0.5' }} 
                    tickMargin={20}
                    axisLine={false}
                    tickLine={false}/>

                    <YAxis hide domain={['dataMin-10', 'dataMax+10']} />

                    <Tooltip dataKey="sessionLength" viewBox={{ x: 0, y: 0, width: 400, height: 400 }} />
                    {/* <Legend /> */}

                    <Line 
                    type="natural" 
                    width="100%" 
                    height="80%"
                    dataKey="sessionLength" 
                    dot={false} 
                    stroke="url(#colorUv)" 
                    connectNulls={true}
                    strokeWidth={2}
                    />
                   <defs>
						<linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
							<stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
							<stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
							<stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
						</linearGradient>
					</defs>

                </LineChart>
            </ResponsiveContainer>
        </section>
    )
}