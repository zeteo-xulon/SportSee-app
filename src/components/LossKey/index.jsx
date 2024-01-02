
export default function LossKey(props){
    return(
        <div className="losskey">
            <img src={props.src} alt={props.alt} className="losskey-icon" />
            <div className="losskey-text-container">
                <h3 className="losskey-title">{props.title}</h3>
                <p className="losskey-text">{props.text}</p>
            </div>
        </div>
    )
}