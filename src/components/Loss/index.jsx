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
    let iconArray = [ flame, meat, apple, burger ]

    for (let [name, value] of Object.entries(userInfo.keyData)){ lossData.push({name,value}) }
    lossData.map((element,i)=> element.src = iconArray[i])

    return(
        <aside className="loss">
            { lossData.map((e,i)=> <LossKey key={'losskey'+i} props={e} /> ) }
        </aside>
    )
}