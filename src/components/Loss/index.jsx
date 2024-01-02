import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import LossKey from "../LossKey";

export default function Loss(){
    let { userInfo } = useContext(DataContext);
    const [info, setInfo] = useState();
    

    useEffect(()=>{ if(userInfo != undefined) { 
        let userInfoItems = userInfo?.keyData;
        let userInfoObjectTransformedInArray = []
        for(let [name, value] of Object.entries(userInfoItems)){ userInfoObjectTransformedInArray.push({name, value}) }
        setInfo(userInfoObjectTransformedInArray) 
    } },[userInfo])

    return(
        <aside className="loss">
            {/* {
                info.map((e)=> {
                    <LossKey props={e} />
                })
            } */}
        </aside>
    )
}