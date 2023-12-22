import meditate from "../../assets/meditate.svg";
import swim from "../../assets/swim.svg";
import cycling from "../../assets/cycling.svg";
import weightbar from "../../assets/weightbar.svg";


export default function MenuBar(){
    return(
        <section className="menu-bar">
            <ul className="menu-bar-list">
                <li className="list-item">
                    <img src={meditate} className="list-item-img" alt="icone de meditation"/>
                </li>
                <li className="list-item">
                    <img src={swim} className="list-item-img" alt="icone d'un personnage nageant"/>
                </li>
                <li className="list-item">
                    <img src={cycling} className="list-item-img" alt="icone de personnage faisant du velo"/>
                </li>
                <li className="list-item">
                    <img src={weightbar} className="list-item-img" alt="icone d'une barre de poids"/>
                </li>
            </ul>
            <p className="copyright">Copiryght, SportSee 2020</p>
        </section>
    )
}