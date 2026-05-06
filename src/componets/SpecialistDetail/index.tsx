
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
import "./spec.scss"
import Arrow from "../UI/Arrow/Arrow"
function SpecialistDetail({ bg, color, className, title, text, type }) {
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
                    <Input title={"ФИО"} value={"Калиева Айгерим Бакытовна"} className={"spec__input"} />
                    <label htmlFor="" className="spec__label">Фото специалиста
                        <div className="spec__photo">
                            <img src={image} alt="image" className="spec__photo-img" />
                            <Button color={"#191A1B"} bg={"#fff"} className="spec__btn"><img src={pencil} alt="pencil" /> Новое фото</Button >
                        </div>
                    </label>
                    <Input title={"Специализация"} value={"Кардеология"} className={"spec__input"} />
                    <Input title={"Образование"} value={"Кыргызская Государственная Медицинская Академия, факультет лечебного дела (окончил с отличием)."} className={"spec__input"} />
                    <label htmlFor="" className="spec__label">О специалисте
                        <textarea className="spec__text" defaultValue="Опытный кардиолог с более чем 14-летней практикой.Специализируется на диагностике и лечении сердечно-сосудистых заболеваний, применяет современные методы обследования и индивидуальные программы терапии. Известен внимательным отношением к каждому пациенту, умением объяснять сложные вещи простым языком и всегда ставит на первое место безопасность и комфорт человека. Регулярно повышает квалификацию, участвует в международных конференциях и ведёт просветительскую работу по профилактике сердечных заболеваний."></textarea>
                    </label>
                    <label htmlFor="" className="spec__label"><span className="spec__text-con">Опыт работы<button className="spec__text-or">+ Добавить</button></span>
                        <div className="spec__text"><ul><li>2012-2020<span className="spec__text-or"> (8 лет)</span></li> <li>Национальный центр кардиологии</li>
                            <li> Кардиолог</li></ul>
                            <ul> <li> 2020-2026 <span className="spec__text-or">(6 лет)</span> </li>
                                <li>Частная клиника «Медлайн» </li>
                                <li>Ведущий специалист</li></ul></div>
                    </label>
                    <label htmlFor="" className="spec__label"><span className="spec__text-con">Профессиональные навыки<button className="spec__text-or">+ Добавить</button></span>
                        <div className="spec__text">
                            <ul>Диагностика и лечение заболеваний сердечно-сосудистой системы</ul>
                            <ul>ЭКГ, ЭХО-КГ и нагрузочные тесты</ul>
                            <ul> Составление индивидуальных программ реабилитации после операций на сердце</ul>
                            <ul>Лечение артериальной гипертонии, аритмий и ишемической болезни сердца</ul></div>
                    </label>
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

export default SpecialistDetail