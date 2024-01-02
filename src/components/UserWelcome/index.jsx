import { useContext } from "react";
import { DataContext } from "../DataProvider";

export default function UserWelcome(){
    const { userInfo } = useContext(DataContext);

    return(
        <div className="user-welcome">
            <h1 className="username">
                Bonjour {  userInfo?.userInfos?.firstName + " " + userInfo?.userInfos?.lastName  }
            </h1>
            <p className="user-objective-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}