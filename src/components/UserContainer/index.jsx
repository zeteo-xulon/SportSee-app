import UserWelcome from "../UserWelcome";
import UserGraphicAndLoss from "../UserGraphicAndLoss";


export default function UserContainer(){
    return(
        <section className="user-container">
            <UserWelcome />
            <UserGraphicAndLoss />
        </section>
    )
}