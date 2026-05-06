
import arrow from "../../assets/icons/arrow.png"
import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
import "react-datepicker/dist/react-datepicker.css";
import Arrow from "../UI/Arrow/Arrow"
import "./appointment.scss"
import qr from "../../assets/Imgs/qr.png"
import visa from "../../assets/icons/visa-logo.png"


function Appointement({ bg, color, className, title, text, type }) {
    const [date, setDate] = useState(null);
    const [payment, setPayment] = useState("card");
 
    return (
        <section className="appointment">
            <div className="container">
                <div className="appointment__content">
                    <div className="appointment__top">
                        <Arrow />
                        <h2 className="appointment__top-title">Оформление записи</h2>
                    </div>
                    <div className="spec__card appointment__card">
                        <div className="appointment__card-top">
                            <div className="appointment__card-num">1</div>
                            <h3 className="appointment__card-title">Выберите</h3>
                        </div>        
                        <label htmlFor="" className="spec__label">Специалист
                            <select name="" id="" className="input__input spec__input spec__input-select appointment__input" defaultValue="">
                                <option value="" disabled hidden >Выберите из списка</option>
                                {[
                                    "Специалист", "Специалист", "Специалист"
                                ].map((item, index) => (
                                    <option value={index + 1}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="" className="spec__label">Специалист
                            <select name="" id="" className="input__input spec__input spec__input-select appointment__input" defaultValue="">
                                <option value="" disabled hidden >Выберите из списка</option>
                                {[
                                    "Специалист", "Специалист", "Специалист"
                                ].map((item, index) => (
                                    <option value={index + 1}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="" className="spec__label">Услуга
                            <select name="" id="" className="input__input spec__input spec__input-select appointment__input" defaultValue="">
                                <option value="" disabled hidden >Выберите из списка</option>
                                {[
                                    "Услуга", "Услуга", "Услуга"
                                ].map((item, index) => (
                                    <option value={index + 1}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <div className=" spec__bot">
                            <div className="appointment__card-top">
                                <div className="appointment__card-num">2</div>
                                <h3 className="appointment__card-title">Выберите дату и время</h3>
                            </div>
                            <div className="spec__btns">
                                <Button bg={"#fff"} color={"#191A1B"} className={"spec__bot-btn"}>Онлайн</Button>
                                <Button bg={"#f0f0f0"} color={"#686F72"} className={"spec__bot-btn"}>Оффлайн</Button>
                            </div>
                            <div className="spec__dates">
                                <DatePicker
                                    selected={date}
                                    onChange={(d) => setDate(d)}
                                    inline
                                    locale="ru"
                                    calendarClassName="spec__date"

                                    formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 2)}

                                    renderDayContents={(day, date) => {
                                        const weekDay = date
                                            .toLocaleDateString("ru-RU", { weekday: "short" })
                                            .slice(0, 2);

                                        return (
                                            <div className="custom-day">
                                                <span className="custom-day__week">{weekDay}</span>
                                                <span className="custom-day__num">{day}</span>
                                            </div>
                                        );
                                    }}

                                    renderCustomHeader={({
                                        date,
                                        decreaseMonth,
                                        increaseMonth,
                                    }) => (
                                        <div className="spec__header">
                                            <button onClick={decreaseMonth} className="spec__arrow">
                                                <img src={arrow} alt="prev" />
                                            </button>

                                            <span className="spec__month">
                                                {date.toLocaleString("ru-RU", { month: "long", year: "numeric" })}
                                            </span>

                                            <button onClick={increaseMonth} className="spec__arrow">
                                                <img src={arrow} alt="next" style={{ transform: "rotate(180deg)" }} />
                                            </button>
                                        </div>
                                    )}
                                />
                                <div className="spec__card spec__date-card">
                                    <div className="spec__date-group">
                                        <h3 className="spec__date-title">Morning</h3>
                                        <div className="spec__date-time">
                                            {["08:00", "09:00", "10:00", "11:00", "12:00"].map(item => <Button color={"#191A1B"} bg={"#fff"} className={"spec__date-btn"}>{item}</Button>)}
                                        </div>
                                    </div>

                                    <div className="spec__date-group">
                                        <h3 className="spec__date-title">Afternoon</h3>
                                        <div className="spec__date-time">
                                            {["01:00", "02:00", "03:00", "04:00", "05:00"].map(item => <Button color={"#191A1B"} bg={"#fff"} className={"spec__date-btn"}>{item}</Button>)}
                                        </div>
                                    </div>
                                    <div className="spec__date-group">
                                        <h3 className="spec__date-title">Evening</h3>
                                        <div className="spec__date-time">
                                            {["06:00", "07:00", "08:00", "09:00"].map(item => <Button color={"#191A1B"} bg={"#fff"} className={"spec__date-btn"}>{item}</Button>)}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spec__bot ">
                            <div className="appointment__card-top appointment__card-bot">
                                <div className="appointment__card-num">3</div>
                                <h3 className="appointment__card-title">Заполните данные</h3>
                            </div>
                            <div className="appointment__bot">
                                <div className="appointment__bot-sides">
                                    <Input type={"text"} text={"Введите ваше имя"} className={"spec__input appointment__input"} title={"Имя"} />
                                    <Input type={"text"} text={"000 000 000"} className={"spec__input"} title={"Номер телефона"} value={"+996"} />
                                </div>
                                <div className="appointment__bot-sides">
                                    <Input type={"text"} text={"Введите вашу фамилию"} className={"spec__input appointment__input"} title={"Введите фамилию"} value={"+996"} />
                                    <Input type={"email"} text={"Введите вашу почту"} className={"spec__input appointment__input"} title={"Электронная почта"} />
                                </div>
                            </div>
                            <label htmlFor="" className="myClinic__label">Комментарий
                                <textarea name="" id="" className="appointment__text" placeholder="Введите ваш комментарий"></textarea>
                            </label>
                        </div>
                        <div className="spec__bot ">
                            <div className="appointment__card-top ">
                                <div className="appointment__card-num">4</div>
                                <h3 className="appointment__card-title">Выберите способ оплаты</h3>
                            </div>

                            <div className="appointment__payment">
                                <label className="appointment__label">
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={payment === "card"}
                                        onChange={() => setPayment("card")}
                                        className="appointment__payment-input"
                                    />
                                    <span className="appointment__label-radio"></span>
                                    Банковской картой <img src={visa} alt="visa" className="appointment__label-img" />
                                </label>

                                {payment === "card" && (
                                    <div className=" appointment__payment-bot">
                                        <div className="appointment__bot appointment__bot-bot">
                                            < div className="appointment__bot-sides">
                                                <Input type={"text"} text={"Введите ваше имя"} className={"spec__input appointment__input"} title={"Имя"} />
                                                <Input type={"text"} text={"000 000 000"} className={"spec__input appointment__input"} title={"Номер телефона"} value={"+996"} />
                                            </div>
                                            <div className="appointment__bot-sides">
                                                <Input type={"text"} text={"Введите вашу фамилию"} className={"spec__input appointment__input"} title={"Введите фамилию"} value={"+996"} />
                                                <Input type={"email"} text={"Введите вашу почту"} className={"spec__input appointment__input"} title={"Электронная почта"} />
                                            </div>
                                        </div>
                                        <Button> Перейти к оплате</Button>
                                    </div>
                                )}

                                <label className="appointment__label">
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={payment === "qr"}
                                        onChange={() => setPayment("qr")}
                                        className="appointment__payment-input"
                                    />
                                    <span className="appointment__label-radio"></span>
                                    По QR-коду
                                </label>

                                {payment === "qr" && (
                                    <div className="appointment__payment-qr">
                                        <div className="appointment__payment-wrap">
                                            <img src={qr} alt="qr" className="appointment__payment-img" />
                                        </div>
                                        <div className="appointment__payment-right">
                                            <h4 className="appointment__payment-title">Инструкция по оплате</h4>
                                            <ol className="appointment__payment-list">
                                                <li className="appointment__payment-item">Откройте приложение для оплаты</li>
                                                <li className="appointment__payment-item">Перейдите в сканер QR</li>
                                                <li className="appointment__payment-item">Наведите камеру</li>
                                                <li className="appointment__payment-item">Подтвердите</li>
                                            </ol>
                                        </div>
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}

export default Appointement