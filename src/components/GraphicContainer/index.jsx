import SubGraphicContainer from "../SubGraphicContainer";
import Activity from "../Activity";

export default function GraphicContainer(){
    return(
        <div className="graphic-container">
            <Activity />
            <SubGraphicContainer />
        </div>
    )
}