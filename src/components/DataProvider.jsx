import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = createContext();

const DataProvider = ({ children}) => {
    const [userInfo, setUserInfo] = useState();
    const [userActivity, setUserActivity] = useState();
    const [userAverageSession, setUserAverageSession] = useState();
    const [userPerformance, setUserPerformance] = useState();
    const server = "http://localhost:3000";
    const id = 12; // ou 18

    /** The different routes
     * [0] - /user/${userId} - user informations firstname | lastname | age
     * [1] - /user/${userId}/activity - user's activity day by day with kg & caloris
     * [2] - /user/${userId}/average-sessions - averages sessions per day starting weeks by monday
     * [3] - /user/${userId}/performance - user's performance | energy | endurance | etc.
     */
    const serverRoutes = [
        server + "/user/" + id,
        server + "/user/" + id + "/activity",
        server + "/user/" + id + "/average-sessions",
        server + "/user/" + id + "/performance",
    ]


    const getData = async () => {
        try {
            const response = await axios.all(  serverRoutes.map((route) => axios.get(route))).then( axios.spread((...allData) => { console.log({ allData })}))
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    /** The different routes
     * [0] - /user/${userId} - user informations firstname | lastname | age
     * [1] - /user/${userId}/activity - user's activity day by day with kg & caloris
     * [2] - /user/${userId}/average-sessions - averages sessions per day starting weeks by monday
     * [3] - /user/${userId}/performance - user's performance | energy | endurance | etc.
     */
    useEffect(()=>{

        const data = getData();
        console.log(data)
    },[])

    return (
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )


}

export default DataProvider;