import { useState } from "react"

export default function UserWelcome(){
    const [userName, setUserName] = useState("userName");
    const [userObjectiveText, setUserObjectiveText] = useState("Félicitation ! Vous avez explosé vos objectifs hier 👏")

    return(
        <div className="user-welcome">
            <h1 className="username">
                Bonjour {userName}
            </h1>
            <p className="user-objective-text">{userObjectiveText}</p>
        </div>
    )
}