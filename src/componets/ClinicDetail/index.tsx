import React, { useState } from "react";
import Button from "../UI/Button/Button";

import loc from "../../assets/icons/location.png";
import time from "../../assets/icons/clock.svg";

import "./clin.scss";

function ClinicDetail({ bg, color, className }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://swiperjs.com/demos/images/abstract-1.jpg",
    "https://swiperjs.com/demos/images/abstract-2.jpg",
    "https://swiperjs.com/demos/images/abstract-3.jpg",
    "https://swiperjs.com/demos/images/abstract-4.jpg",
    "https://swiperjs.com/demos/images/abstract-5.jpg",
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="clin">
      <div className="container">
        <div className="clin__content">
          <div className="clin__top">
            <li className="clin__top-item">Главная</li>
            <li className="clin__top-item">Клиники</li>
            <li className="clin__top-item">
              <span className="clin__top-dif">MED Clinic</span>
            </li>
          </div>

          <div className="clin__main">
            <div className="clin__left">
              <div className="clin__slider">
                <div className="clin__slider-main">
                  <img
                    src={images[activeSlide]}
                    alt={`Slide ${activeSlide + 1}`}
                    className="clin__slider-image"
                  />
                  <button
                    className="clin__slider-arrow clin__slider-arrow--prev"
                    onClick={handlePrev}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="clin__slider-arrow clin__slider-arrow--next"
                    onClick={handleNext}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="clin__slider-thumbs">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`clin__slider-thumb ${
                        activeSlide === index
                          ? "clin__slider-thumb--active"
                          : ""
                      }`}
                      onClick={() => setActiveSlide(index)}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="clin__right">
              <div className="clin__card">
                <h3 className="clin__card-title">MED Clinic</h3>
                <p className="clin__card-text">Многопрофильная клиника</p>
                <p className="clin__card-text">
                  <img
                    src={loc}
                    alt="location"
                    className="clin__card-text-img"
                  />
                  ул. Московская, 189
                </p>
                <p className="clin__card-text">
                  <img src={time} alt="clock" className="clin__card-text-img" />
                  ПН-ПТ 08:00-17:00
                </p>
                <div className="clin__card-bot">
                  <div className="clin__card-num">
                    4.85 <span>Оценка</span>
                  </div>
                  <div className="clin__card-num">
                    12 лет <span>Опыта</span>
                  </div>
                  <div className="clin__card-num">
                    255 <span>Отзывов</span>
                  </div>
                </div>
              </div>

              <div className="clin__btns">
                <Button
                  bg={"#F5653E1A"}
                  color={"#F5653E"}
                  className={"clin__btn"}
                >
                  Оффлайн-консультация
                </Button>
                <Button className={"clin__btn"}>Онлайн-консультация</Button>
              </div>

              <div className="clin__card">
                <h3 className="clin__title2">О клинике</h3>
                <p className="clin__card-text">
                  Наша клиника — это современная медицинская помощь, опытные
                  врачи и индивидуальный подход к каждому пациенту. Мы
                  используем проверенные методы и технологии, чтобы обеспечить
                  точную диагностику, эффективное лечение и комфорт на каждом
                  этапе заботы о вашем здоровье.
                </p>
              </div>

              <div className="clin__card">
                <h3 className="clin__title2">Контакты</h3>
                <p className="clin__card-text">
                  <img src={time} alt="clock" className="clin__card-text-img" />
                  ПН-ПТ 08:00-17:00
                </p>
                <p className="clin__card-text">
                  <img
                    src={loc}
                    alt="location"
                    className="clin__card-text-img"
                  />
                  ул. Московская, 189
                </p>
                <a href="" className="clin__card-text">
                  +997 700 123 456
                </a>
                <a href="" className="clin__card-text">
                  dr.sadykova@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicDetail;
