import Nav from "../Nav"
import sportseeLogo from "../../assets/logo_sportsee.svg"

export default function Header(){
    return (
        <header className="header">
            <img src={sportseeLogo} className="logo" />
            <Nav />
        </header>
    )
}