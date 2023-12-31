import { createContext, useState, useEffect } from "react";
import apiService from "../API/api";

export const DataContext = createContext();

const DataProvider = ({ children}) => {
    const [userInfo, setUserInfo] = useState();
    const [userActivity, setUserActivity] = useState();
    const [userAverageSession, setUserAverageSession] = useState();
    const [userPerformance, setUserPerformance] = useState();
    const id = 12; // ou 18

    /** The different routes
     * [0] - /user/${userId} - user informations firstname | lastname | age
     * [1] - /user/${userId}/activity - user's activity day by day with kg & caloris
     * [2] - /user/${userId}/average-sessions - averages sessions per day starting weeks by monday
     * [3] - /user/${userId}/performance - user's performance | energy | endurance | etc.
     */
    const getData = async () => {
        try {
            const responses = await Promise.all([
                apiService.getUser(id),
                apiService.getUserActivity(id),
                apiService.getUserAverageSessions(id),
                apiService.getUserPerformance(id)
            ]);

            setUserInfo(responses[0].data.data);
            setUserActivity(responses[1].data.data);
            setUserAverageSession(responses[2].data.data);
            setUserPerformance(responses[3].data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{ getData() },[])

    return (
        <DataContext.Provider value={{userInfo, userActivity, userAverageSession,userPerformance}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider;