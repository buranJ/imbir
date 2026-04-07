import Button from "../UI/Button/Button"
import "./hero.scss"
import imbir from "../../assets/Imgs/imbir.png"
// import input from "../../assets/Imgs/imbir-input.png"

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__left">
                        <h1 className="hero__title">Лучшие специалисты и честные отзывы</h1>
                        <p className="hero__text"> Свяжитесь со специалистом из любой точки —быстро, удобно и без ожидания</p>
                        <Button>Выбрать специалиста / услугу</Button>
                        <form action="" className="hero__form">
                            <div className="hero__input-wrap">
                                <textarea type="text" className="hero__input" placeholder="Что вас беспокоит? Я помогу подобрать вам специалиста" />
                                <Button className="hero__input-btn">Описать симптомы</Button>
                            </div>
                        </form>
                    </div>
                    <div className="hero__right">
                        <img src={imbir} alt="imbir" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero