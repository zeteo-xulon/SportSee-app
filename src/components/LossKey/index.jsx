import { useState, useEffect } from "react"

export default function LossKey(props){
    const [lossKey, setLossKey] = useState(props);

    useEffect(()=>{
        if(props != undefined){ setLossKey(props) }
    },[props])

    return(
        <div className="losskey">
            <img src={lossKey?.props?.src} alt="food" className="losskey-icon" />
            <div className="losskey-text-container">
                <h3 className="losskey-title">{lossKey?.props?.name}</h3>
                <p className="losskey-text">{lossKey?.props?.value}</p>    
            </div>
        </div>
    )
}