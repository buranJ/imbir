import card from "../../../assets/Imgs/blog-card.png"
import star from "../../../assets/icons/star.png"
import loc from "../../../assets/icons/location.png"
import "./mobCard.scss"
function MobCard({ img, title, span1, span2, text, add, imgWidth, cardWidth, imgRadius,imgHeight }) {
    return (

        <div className="mobCard" style={{
            width: cardWidth
        }}>
            <img src={img} alt="image" className="mobCard__img" style={{
                width: imgWidth,
                borderRadius: imgRadius,
                height:imgHeight
            }} />
            <div className="mobCard__right">
                <h2 className="mobCard__title">{title}</h2>
                <div className="mobCard__desc"><img src={star} alt="star" /><span className="mobCard__desc-span1">{span1}</span> {text} <span className="mobCard__desc-span2">{span2}</span></div>
                <p className="mobCard__text"><img src={loc} alt="location" />{add}</p>
            </div>
            <label className="appointment__label mobCard__label">
                <input
                    type="radio"
                    name="card"
                    className="appointment__payment-input"
                />
                <span className="appointment__label-radio"></span>
            </label>
        </div>

    )
}

export default MobCard