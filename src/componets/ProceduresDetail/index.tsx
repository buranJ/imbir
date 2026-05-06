
import arrow from "../../assets/icons/arrow.png"
import pencil from "../../assets/icons/pencil.png"
import trash from "../../assets/icons/trash.png"
import image from "../../assets/Imgs/blog-card.png"
import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);
import "react-datepicker/dist/react-datepicker.css";
import Arrow from "../UI/Arrow/Arrow"
function ProceduresDetail({ bg, color, className, title, text, type }) {
    const [date, setDate] = useState(null);
    return (
        <div className="spec">
            <div className="spec__top">
                <div className="spec__top-sides">
                    <Arrow className="spec__top-btn" />

                    <h2 className="spec__top-title">Назад</h2>
                </div>
                <div className="spec__top-sides">
                    <Button color={"#191A1B"} bg={"#fff"} className={"spec__btn"}><img src={pencil} alt="pencil" />Редактировать</Button>
                    <button className="spec__top-btn spec__top-btn-mb"><img src={pencil} alt="pencil" className="spec__top-img" /></button>
                    <button className="spec__top-btn"><img src={trash} alt="trash" className="spec__top-img" /></button>
                </div>
            </div>
            <div className="spec__card">
                <div className="srec__card ">
                    <Input title={"Процедура"} value={"Чистка лица"} className={"spec__input"} />
                    <label htmlFor="" className="spec__label">Фото процедуры
                        <div className="spec__photo">
                            <img src={image} alt="image" className="spec__photo-img" />
                            <Button color={"#191A1B"} bg={"#fff"} className="spec__btn"><img src={pencil} alt="pencil" /> Новое фото</Button >
                        </div>
                    </label>
                    <Input title={"Стоимость"} value={"1 700 с"} className={"spec__input"} />
                    <Input title={"Адрес"} value={"г. Бишкек, ул. Тыныстанова, 189"} className={"spec__input"} />
                    <Input title={"График работы"} value={"ПН-ПТ, 10:00-17:00"} className={"spec__input"} />
                    <div className="spec__manager">
                        <h3 className="spec__manager__title">Специалисты, выполняющие услугу</h3>
                        <div className="spec__manager-list">
                            {[
                                "Мамбетова Назгуль Бакытовна",
                                "Мухамедова Мухаббат Рыскуловна",
                                "Нурбаев Данияр Кадырбаевич",
                                "Суюмбаев Арсен Акимович",
                                "Токтогулова Жаркынай Маматкуловна",
                                "Чолпонкулова Мейрамкан Бекешовна"
                            ].map((name) => (
                                <div  className="spec__item">
                                    <span className="spec__item-name">{name}</span>
                                    <button className="spec__item-remove">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                           <circle cx="12" cy="12" r="11.5" fill="#fff" stroke="#DFE1E7" stroke-width="1"/>
                                           <path d="M15 9L9 15M9 9L15 15" stroke="#ACB1B4" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button className="spec__text-or">+ Добавить специалиста</button>
                    </div>

                </div>
                <div className=" spec__bot">
                    <h3 className="spec__bot-title">Записи</h3>
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

            </div>
        </div>
    )
}

export default ProceduresDetail