import UserWelcome from "../UserWelcome";
import Activity from "../Activity";

export default function UserContainer(){
    return(
        <section className="user-container">
            <UserWelcome />
            <Activity />
        </section>
    )
}