
import loc from "../../assets/icons/location.png"
import loc1 from "../../assets/icons/loc.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import "./clinics.scss"

import { Navigation } from 'swiper/modules';
import heart from "../../assets/icons/heart.png"
import card from "../../assets/Imgs/blog.png"
import star from "../../assets/icons/star.png"
import x from "../../assets/icons/x.png"
import Filter from "../UI/Filter/Filter";
function Clinics() {
    const [specialty, setSpecialty] = useState('Все');
    const [experience, setExperience] = useState(0);
    const [rating, setRating] = useState('Все');
    const [price, setPrice] = useState(0);
    return (
        <section className="clinics">
            <div className="container">
                <div className="clinics__content">
                    <div className="clinics__top">
                        <h2 className="clinics__title">Клиники</h2>
                        <h3 className="clinics__btn-mb">Все</h3>
                        <div className="clinics__top-loc">
                            <img src={loc1} alt="" />
                            <div className="clinics__top-text">г. Бишкек <span>Ленинский район</span></div>
                        </div>
                    </div>
                    <p className="clinics__text">Выберите интересующие вас параметры, чтобы ознакомиться с подходящими клиниками</p>
                    <div
                        style={{
                            display: window.innerWidth <= 510 ? 'none' : 'flex',
                            gap: '20px'
                        }}
                    >


                        <Filter
                            label="Специализация"
                            type="select"
                            value={specialty}
                            options={['Все', 'Все', 'Все']}
                            onChange={setSpecialty}
                        />
                        {/* 
                        <Filter
                            label="Стаж, лет"
                            type="range"
                            value={experience}
                            min={0}
                            max={10}
                            onChange={setExperience}
                        /> */}
                        <Filter
                            label="Оценка"
                            type="select"
                            value={rating}
                            options={['Все', 'Все', 'Все']}
                            onChange={setRating}
                        />

                        {/* <Filter
                            label="Стоимость, с"
                            type="range"
                            value={price}
                            min={0}
                            max={1000}
                            onChange={setPrice}
                        /> */}
                        <button className="clinics__btn"><img src={x} alt="" />Сбросить фильтры</button>

                    </div>

                    <div className="clinics__nav">
                        <div className="clinics__swiper-prev"></div>
                        <div className="clinics__swiper-next"></div>

                        <Swiper slidesPerView={4}
                            spaceBetween={20}
                            navigation={{
                                prevEl: '.clinics__swiper-prev',
                                nextEl: '.clinics__swiper-next',
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 3,
                                    direction: 'vertical',
                                },
                                510: {
                                    slidesPerView: 1,
                                    direction: 'horizontal',
                                },

                                700: {
                                    slidesPerView: 2,
                                },
                                1000: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },


                            }}
                            modules={[Navigation]}
                            className="clinics__swiper">
                            <SwiperSlide><div className="clinics__card">
                                <div className="clinics__card-wrap">
                                    <img src={card} alt="image" className="clinics__card-img" />
                                    <img src={heart} alt="" className="clinics__card-btn" />
                                </div>
                                <div className="clinics__card-bot">
                                    <h3 className="clinics__card-title">Nova Clinic</h3>
                                    <div className="clinics__card-text"><img src={star} alt="" /> <span className="clinics__card-span1">4.85</span>(255) <span className="clinics__card-span2">12 лет опыта</span></div>
                                    <div className="clinics__card-desc"><img src={loc} alt="" />ул. Московская, 189</div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="clinics__card">
                                <div className="clinics__card-wrap">
                                    <img src={card} alt="image" className="clinics__card-img" />
                                    <img src={heart} alt="" className="clinics__card-btn" />
                                </div>
                                <div className="clinics__card-bot">
                                    <h3 className="clinics__card-title">Nova Clinic</h3>
                                    <div className="clinics__card-text"><img src={star} alt="" /> <span className="clinics__card-span1">4.85</span>(255) <span className="clinics__card-span2">12 лет опыта</span></div>
                                    <div className="clinics__card-desc"><img src={loc} alt="" />ул. Московская, 189</div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="clinics__card">
                                <div className="clinics__card-wrap">
                                    <img src={card} alt="image" className="clinics__card-img" />
                                    <img src={heart} alt="" className="clinics__card-btn" />
                                </div>
                                <div className="clinics__card-bot">
                                    <h3 className="clinics__card-title">Nova Clinic</h3>
                                    <div className="clinics__card-text"><img src={star} alt="" /> <span className="clinics__card-span1">4.85</span>(255) <span className="clinics__card-span2">12 лет опыта</span></div>
                                    <div className="clinics__card-desc"><img src={loc} alt="" />ул. Московская, 189</div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="clinics__card">
                                <div className="clinics__card-wrap">
                                    <img src={card} alt="image" className="clinics__card-img" />
                                    <img src={heart} alt="" className="clinics__card-btn" />
                                </div>
                                <div className="clinics__card-bot">
                                    <h3 className="clinics__card-title">Nova Clinic</h3>
                                    <div className="clinics__card-text"><img src={star} alt="" /> <span className="clinics__card-span1">4.85</span>(255) <span className="clinics__card-span2">12 лет опыта</span></div>
                                    <div className="clinics__card-desc"><img src={loc} alt="" />ул. Московская, 189</div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="clinics__card">
                                <div className="clinics__card-wrap">
                                    <img src={card} alt="image" className="clinics__card-img" />
                                    <img src={heart} alt="" className="clinics__card-btn" />
                                </div>
                                <div className="clinics__card-bot">
                                    <h3 className="clinics__card-title">Nova Clinic</h3>
                                    <div className="clinics__card-text"><img src={star} alt="" /> <span className="clinics__card-span1">4.85</span>(255) <span className="clinics__card-span2">12 лет опыта</span></div>
                                    <div className="clinics__card-desc"><img src={loc} alt="" />ул. Московская, 189</div>
                                </div>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Clinics