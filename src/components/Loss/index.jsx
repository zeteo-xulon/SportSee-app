import { useContext} from "react";
import { DataContext } from "../DataProvider";
import LossKey from "../LossKey";
import flame from "../../assets/flame.svg";
import meat from "../../assets/meat.svg";
import apple from "../../assets/apple.svg";
import burger from "../../assets/burger.svg";

export default function Loss(){
    let { userInfo } = useContext(DataContext);
    let lossData = [];
    let iconArray = [ 
        {src: flame, bgcolor: "rgba(255, 0, 0, 0.1)"}, 
        {src: meat, bgcolor: "rgba(74, 184, 255, 0.1)"}, 
        {src: apple, bgcolor: "rgba(249, 206, 35, 0.1)"}, 
        {src: burger, bgcolor: "rgba(253, 81, 129, 0.1)"} 
    ]


    for (let [name, value] of Object.entries(userInfo.keyData)){ lossData.push({name,value}) }
    lossData.map((element,i)=> element.icon = iconArray[i])

    return(
        <aside className="loss">
            { lossData.map((e,i)=> <LossKey key={'losskey'+i} props={e} /> ) }
        </aside>
    )
}