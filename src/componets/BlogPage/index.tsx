import image from "../../assets/Imgs/blog-card.png"
import share from "../../assets/icons/share.png"
import blog from "../../assets/Imgs/blog.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "../UI/Button/Button"
import Arrow from "../UI/Arrow/Arrow"
import "./blogPage.scss"
function BlogPage({ color, bg, classname }) {
    return (
        <section className="blogPage">
            <div className="container">
                <div className="blogPage__content">
                    <div className="article__top">
                        <Arrow className={"article__top-arrow"} />
                        <h2 className="article__title">Блог</h2>
                    </div>
                    <div className="blogPage__main">
                        <img src={blog} alt="image" className="blogPage__main-img" />
                        <div className="blogPage__card">
                            <div className="article__btns">
                                <Button color={"#F5653E"} bg={"#fff"} className={"article__btn"}><img src={share} alt="image" />Новое</Button>
                                <Button color={"#686F72"} bg={"#fff"} className={"article__btn"}>23 октября 2025</Button>
                            </div>
                            <h3 className="blogPage__card-title">Как понять, что пора к врачу,а не в Google</h3>
                            <p className="article__left-title blogPage__card-desc">Простые признаки, при которых самодиагностика может навредить, и когда нужна консультация специалиста</p>
                            <Button>Читать статью</Button>
                        </div>
                    </div>
                    <div className="article__btns blogPage__btns">
                        <Button>Все</Button>
                        <Button color={"#686F72"} bg={"#E3E4E5"}>Здоровье</Button>
                        <Button color={"#686F72"} bg={"##E3E4E5"} > Телемедицина</Button>
                        <Button color={"#686F72"} bg={"#E3E4E5"} >Профилактика</Button>
                        <Button color={"#686F72"} bg={"#E3E4E5"} >Советы пациентам</Button>

                    </div>
                    <Swiper
                        className="blogPage__swiper"
                        slidesPerView={3.1}
                    >

                        <SwiperSlide>  <Button>Все</Button></SwiperSlide>
                        <SwiperSlide> <Button color={"#686F72"} bg={"#F2F3F5"}>Здоровье</Button></SwiperSlide>
                        <SwiperSlide>  <Button color={"#686F72"} bg={"#F2F3F5"} > Телемедицина</Button></SwiperSlide>
                        <SwiperSlide> <Button color={"#686F72"} bg={"#F2F3F5"} >Профилактика</Button></SwiperSlide>
                        <SwiperSlide> <Button color={"#686F72"} bg={"#F2F3F5"} >Советы пациентам</Button></SwiperSlide>
                    </Swiper>
                    <div className="article__cards blogPage__cards">
                        <div className="article__card blogPage__card-bot">
                            <img src={image} alt="image" className="article__card-img" />
                            <h3 className="article__card-text">
                                Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                            <p className="article__card-title">Онлайн-консультация с врачом:
                                мифы и реальность</p>
                        </div>
                        <div className="article__card blogPage__card-bot">
                            <img src={image} alt="image" className="article__card-img" />
                            <h3 className="article__card-text">
                                Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                            <p className="article__card-title">Онлайн-консультация с врачом:
                                мифы и реальность</p>
                        </div>
                        <div className="article__card blogPage__card-bot">
                            <img src={image} alt="image" className="article__card-img" />
                            <h3 className="article__card-text">
                                Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                            <p className="article__card-title">Онлайн-консультация с врачом:
                                мифы и реальность</p>
                        </div>
                        <div className="article__card blogPage__card-bot">
                            <img src={image} alt="image" className="article__card-img" />
                            <h3 className="article__card-text">
                                Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                            <p className="article__card-title">Онлайн-консультация с врачом:
                                мифы и реальность</p>
                        </div>
                        <div className="article__card blogPage__card-bot">
                            <img src={image} alt="image" className="article__card-img" />
                            <h3 className="article__card-text">
                                Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                            <p className="article__card-title">Онлайн-консультация с врачом:
                                мифы и реальность</p>
                        </div>
                        <div className="article__card blogPage__card-bot">
                            <img src={image} alt="image" className="article__card-img" />
                            <h3 className="article__card-text">
                                Телемедицина<span className="article__card-span">29 января 2026</span ></h3>
                            <p className="article__card-title">Онлайн-консультация с врачом:
                                мифы и реальность</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPage