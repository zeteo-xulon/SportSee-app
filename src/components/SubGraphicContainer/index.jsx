import Session from "../Session";
import Score from "../Score";
import Performance from "../Performance";

export default function SubGraphicContainer(){

    return(
        <section className="sub-graphic-container">
            <Session />
            <Performance />
            <Score />
        </section>
    )
}