import "./arrow.scss"
import arrow from "../../../assets/icons/arrow.png"

function Arrow({className }) {
    return (
        <button className={`arrow__btn ${className || ""}`}><img src={arrow} alt="arrow" className="arrow__btn-img" /></button>
    )
}
export default Arrow