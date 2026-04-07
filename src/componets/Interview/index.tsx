
import user from "../../assets/icons/user.png"
import card from "../../assets/Imgs/blog.png"
import btn from "../../assets/icons/Button.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import "./interview.scss"

import { Navigation } from 'swiper/modules';

function Interview() {
    return (
        <section className="interview">
            <div className="container">
                <div className="interview__content">
                    <h2 className="interview__title">Интервью</h2>
                    <p className="interview__text">Ознакомьтесь с интервью наших специалистов</p>

                    <div className="interview__nav">
                        <div className="interview__swiper-prev"></div>
                        <div className="interview__swiper-next"></div>
               
                    <Swiper slidesPerView={3}
                        spaceBetween={20}
                        navigation={{
                            prevEl: '.interview__swiper-prev',
                            nextEl: '.interview__swiper-next',
                        }}
                        modules={[Navigation]}
                        className="interview__swiper">
                        <SwiperSlide>  <div className="interview__card">
                            <div className="interview__card-wrap">
                                <img src={card} alt="image" className="interview__card-img" />
                                <img src={btn} alt="" className="interview__card-btn" />
                            </div>
                            <div className="interview__card-bot">
                                <p className="interview__card-title">Врач онлайн: как это работает за 1 минуту</p>
                                <div className="interview__card-text"><img src={user} alt="" />Садыкова А. Т<span>Врач-терапевт</span></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>  <div className="interview__card">
                            <div className="interview__card-wrap">
                                <img src={card} alt="image" className="interview__card-img" />
                                <img src={btn} alt="" className="interview__card-btn" />
                            </div>
                            <div className="interview__card-bot">
                                <p className="interview__card-title">Врач онлайн: как это работает за 1 минуту</p>
                                <div className="interview__card-text"><img src={user} alt="" />Садыкова А. Т<span>Врач-терапевт</span></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>  <div className="interview__card">
                            <div className="interview__card-wrap">
                                <img src={card} alt="image" className="interview__card-img" />
                                <img src={btn} alt="" className="interview__card-btn" />
                            </div>
                            <div className="interview__card-bot">
                                <p className="interview__card-title">Врач онлайн: как это работает за 1 минуту</p>
                                <div className="interview__card-text"><img src={user} alt="" />Садыкова А. Т<span>Врач-терапевт</span></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>  <div className="interview__card">
                            <div className="interview__card-wrap">
                                <img src={card} alt="image" className="interview__card-img" />
                                <img src={btn} alt="" className="interview__card-btn" />
                            </div>
                            <div className="interview__card-bot">
                                <p className="interview__card-title">Врач онлайн: как это работает за 1 минуту</p>
                                <div className="interview__card-text"><img src={user} alt="" />Садыкова А. Т<span>Врач-терапевт</span></div>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                         </div>

                </div>
            </div>

        </section>
    )
}

export default Interview