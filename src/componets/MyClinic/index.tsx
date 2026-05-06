import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import "swiper/css";
import "./myClinic.scss"
import n from "../../assets/Imgs/n.png"
import pencil from "../../assets/icons/pencil.png"
import image from "../../assets/Imgs/blog.png"
import arrow from "../../assets/icons/arrow.png"
import Arrow from "../UI/Arrow/Arrow"

function MyClinic({ title, text, type, className, bg, color, value }) {
    return (
        <section className="myClinic">
            <div className="myClinic__content">
                <div className="myClinic__top">
                    <Arrow className={"myClinic__top-btn"} />
                    <h2 className="myClinic__title">Моя клиника</h2>
                    <Button className={"myClinic__btn"} > Сохранить</Button >
                </div>
                <div className="myClinic__main">
                    <Input title={"Название"} value={"K-MED"} type={"text"} className={"myClinic__input"} />
                    <label htmlFor="" className="myClinic__label">Логотип
                        <div className="myClinic__logo">
                            <img src={n} alt="image" className="myClinic__logo-img" />
                            <Button color={"#191A1B"} bg={"#fff"} className="myClinic__btn"><img src={pencil} alt="pencil" /> Новый логотип</Button >
                        </div>
                    </label>
                    <label htmlFor="" className="myClinic__label">Описание
                        <textarea name="" id="" className="myClinic__text" defaultValue="K-MED Наша клиника — это современная медицинская помощь, опытные врачи и индивидуальный подход к каждому пациенту. Мы используем проверенные методы и технологии, чтобы обеспечить точную диагностику, эффективное лечение и комфорт на каждом этапе заботы о вашем здоровье."></textarea>
                    </label>
                    <label htmlFor="" className="myClinic__label myClinic__label-mb-hid">Фотографии
                        <div className="myClinic__photo">
                            <img src={image} alt="image" className="myClinic__logo-photo" />
                            <img src={image} alt="image" className="myClinic__logo-photo" />
                            <img src={image} alt="image" className="myClinic__logo-photo" />
                            <img src={image} alt="image" className="myClinic__logo-photo" />
                            <button className="myClinic__logo-btn">+</button>
                        </div>
                    </label>
                    <label htmlFor="" className="myClinic__label myClinic__label-mb">
                        Фотографии
                        <div className="myClinic__swiper-wrap">
                            <Swiper
                                className="myClinic__swiper"
                                spaceBetween={12}
                                slidesPerView={2.3}
                            >

                                <SwiperSlide><img src={image} alt="image" className="myClinic__logo-photo" /></SwiperSlide>
                                <SwiperSlide><img src={image} alt="image" className="myClinic__logo-photo" /></SwiperSlide>
                                <SwiperSlide><img src={image} alt="image" className="myClinic__logo-photo" /></SwiperSlide>
                                <SwiperSlide><img src={image} alt="image" className="myClinic__logo-photo" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </label>

                    <div className="myClinic__bot">
                        <div className="myClinic__sides">
                            <Input title={"Номер телфона"} value={"+996 996 000 000"} className={"myClinic__input"} type={""} />
                            <Input title={"Адрес"} value={"г. Бишкек, ул. Тыныстанова, 189"} className={"myClinic__input"} />

                        </div>
                        <div className="myClinic__sides">
                            <Input title={"Электронная почта"} value={"kmed@gmail.com"} className={"myClinic__input"} />
                            <Input title={"График работы"} value={"ПН-ПТ, 10:00-17:00"} className={"myClinic__input"} />
                        </div>
                    </div>
                </div>
                <div className="myClinic__mb">
                    <Button className={"myClinic__mb-btn"} > Сохранить</Button >
                </div>
            </div>
        </section>
    )
}

export default MyClinic