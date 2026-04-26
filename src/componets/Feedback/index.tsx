import Button from "../UI/Button/Button"
import "./feedback.scss"
import stethoscope from "../../assets/icons/stethoscope.png"
import star from "../../assets/icons/star-white.png"
import loc from "../../assets/icons/location.png"
import user from "../../assets/Imgs/blog-card.png"
import hospital from "../../assets/icons/hospital.png"
import medical from "../../assets/icons/medical service.png"
import setting from "../../assets/icons/settings.png"
import pencil from "../../assets/icons/pencil.png"
import trash from "../../assets/icons/trash.png"
function Feedback({ children, color, bg, className }) {
    return (
        <section className="feedback">
            <div className="container">
                <div className="feedback__content">
                    <div className="feedback__top">
                        <div className="feedback__top-top">
                            <h2 className="feedback__top-title">Отзывы</h2>
                            <form action="">
                                <input type="text" placeholder="Поиск" />
                                <button className="feedback__top-btn"><img src={setting} alt="setting" /></button>
                            </form>
                        </div>
                        <div className="feedback__top-bot">
                            <Button  >
                                <img src={hospital} alt="hospital" />
                                Клиники</Button>
                            <Button bg={"#F2F3F5"} color={"#686F72"}>
                                <img src={stethoscope} alt="stethoscope" />
                                Специалисты</Button>
                            <Button bg={"#F2F3F5"} color={"#686F72"}>
                                <img src={medical} alt="medical service" />
                                Услуги</Button>

                        </div>
                        <div className="feedback__cards">
                            <div className="feedback__card">
                                <div className="feedback__card-top">
                                    <div className="feedback__card-left">
                                        <img src={user} alt="image" className="feedback__card-img" />
                                        <div className="feedback__card-text">
                                            <h3 className="feedback__card-title">Nova Clinic</h3>
                                            <div className="feedback__card-add"><img src={loc} alt="location" className="feedback__card-loc" />ул. Московская, 189</div>
                                        </div>
                                    </div>
                                    <div className="feedback__card-right">
                                        <button className="feedback__top-btn"><img src={pencil} alt="pencil" /></button>
                                        <button className="feedback__top-btn"><img src={trash} alt="trash" /></button>
                                    </div>
                                </div>
                                <div className="feedback__card-stars">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                </div>
                                <p className="feedback__card-desc">Доктор Нурлан Эльдарович внимателен, добр и очень тщателен. Он убедился, что на все мои вопросы даны ответы, и очень терпеливо объяснил мой диагноз</p>
                                <p className="feedback__card-date">20 Ноября, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback