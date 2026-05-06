
import Button from "../UI/Button/Button"
import image from "../../assets/Imgs/blog-card.png"
import blog from "../../assets/Imgs/blog.png"
import share from "../../assets/icons/share.png"
import "./article.scss"
import Arrow from "../UI/Arrow/Arrow"
function Article({ bg, color, className }) {
    return (
        <section className="article">
            <div className="container">
                <div className="article__content">
                    <div className="article__top">
                        <Arrow className={"article__top-arrow"} />
                        <h2 className="article__top-title">Статья</h2>
                        <ul className="article__list">
                            <li className="article__top-text">Главная</li>
                            <li className="article__top-text">Блог</li>
                            <li className="article__top-text"><span className="article__top-span">Как понять, что пора к врачу, а не в Google</span></li>
                        </ul>
                    </div>
                    <div className="article__btns">
                        <Button color={"#F5653E"} bg={"#fff"} className={"article__btn"}><img src={share} alt="image" />Новое</Button>
                        <Button color={"#686F72"} bg={"#fff"} className={"article__btn"}>23 октября 2025</Button>
                    </div>
                    <div className="article__main">
                        <div className="article__left">
                            <h2 className="article__title">Как понять, что пора к врачу, а не в Google</h2>
                            <img src={blog} alt="image" className="article__left-img" />
                            <p className="article__left-desc">Мы все сначала открываем поиск — это быстро, удобно и вроде бы помогает понять, что происходит с организмом. Но интернет не видит вас, не задаёт уточняющих вопросов и легко может либо напугать, либо усыпить бдительность. Есть ситуации, когда лучше закрыть вкладку и записаться к врачу.</p>
                            <div className="article__left-text">
                                <p className="article__left-title">🚩 Симптомы не проходят или становятся сильнее</p>
                                <p className="article__left-desc">Если дискомфорт длится несколько дней, усиливается или появляются новые ощущения — это сигнал, что нужна профессиональная оценка. Самодиагностика тут только тянет время.</p>
                            </div>
                            <div className="article__left-text">
                                <p className="article__left-title">🚩 Симптомы не проходят или становятся сильнее</p>
                                <p className="article__left-desc">Если дискомфорт длится несколько дней, усиливается или появляются новые ощущения — это сигнал, что нужна профессиональная оценка. Самодиагностика тут только тянет время.</p>
                            </div>
                            <div className="article__left-text">
                                <p className="article__left-title">🚩 Симптомы не проходят или становятся сильнее</p>
                                <p className="article__left-desc">Если дискомфорт длится несколько дней, усиливается или появляются новые ощущения — это сигнал, что нужна профессиональная оценка. Самодиагностика тут только тянет время.</p>
                            </div>
                            <div className="article__left-text">
                                <p className="article__left-title">🚩 Симптомы не проходят или становятся сильнее</p>
                                <p className="article__left-desc">Если дискомфорт длится несколько дней, усиливается или появляются новые ощущения — это сигнал, что нужна профессиональная оценка. Самодиагностика тут только тянет время.</p>
                            </div>
                            <div className="article__left-text">
                                <p className="article__left-title">🚩 Симптомы не проходят или становятся сильнее</p>
                                <p className="article__left-desc">Если дискомфорт длится несколько дней, усиливается или появляются новые ощущения — это сигнал, что нужна профессиональная оценка. Самодиагностика тут только тянет время.</p>
                            </div>

                        </div>
                        <div className="article__right">
                            <h3 className="article__right-title">Читать далее</h3>
                            <div className="article__cards">
                                <div className="article__card">
                                    <img src={image} alt="image" className="article__card-img" />
                                    <h3 className="article__card-text">
                                        Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                                    <p className="article__card-title">Онлайн-консультация с врачом:
                                        мифы и реальность</p>
                                </div>
                                <div className="article__card">
                                    <img src={image} alt="image" className="article__card-img" />
                                    <h3 className="article__card-text">
                                        Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                                    <p className="article__card-title">Онлайн-консультация с врачом:
                                        мифы и реальность</p>
                                </div>
                                <div className="article__card">
                                    <img src={image} alt="image" className="article__card-img" />
                                    <h3 className="article__card-text">
                                        Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                                    <p className="article__card-title">Онлайн-консультация с врачом:
                                        мифы и реальность</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Article