
import pencil from "../../assets/icons/pencil.png"
import image from "../../assets/Imgs/blog-card.png"
import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import Arrow from "../UI/Arrow/Arrow"
function AddSpecialist({ bg, color, className, title, text, type }) {
    return (
        <div className="spec">
            <div className="spec__top">
                <div className="spec__top-sides">
                    <Arrow className="spec__top-btn" />
                    <h2 className="spec__top-title spec__top-title-add">Добавить специалиста</h2>
                </div>
                <Button className={"myClinic__btn"}>Сохранить</Button>
            </div>
            <div className="spec__card">
                <div className="srec__card ">
                    <h3 className="spec__card-title">Личные данные</h3>

                    <label htmlFor="" className="spec__label">Фото специалиста
                        <div className="spec__photo">
                            <img src={image} alt="image" className="spec__photo-img" />
                            <Button color={"#191A1B"} bg={"#fff"} className="spec__btn"><img src={pencil} alt="pencil" /> Новое фото</Button >
                        </div>
                    </label>
                    <Input type={"text"} text={"Введите имя"} className={"spec__input"} title={"Имя специалиста"} />
                    <Input type={"text"} text={"Введите фамилию"} title={"Фамилия специалиста"} className={"spec__input"} />
                    <label htmlFor="" className="spec__label">Специализация
                        <select name="" id="" className="input__input spec__input spec__input-select" defaultValue="">
                            <option  value="" disabled hidden >Выберите из списка</option>
                            {[
                                "Специализация", "Специализация", "Специализация"
                            ].map((item, index) => (
                                <option value={index + 1}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </label>
                    <Input type={"text"} text={"0 лет"} title={"Стаж работы"} className={"spec__input"} />
                    <div className="spec__time">
                        <h3 className="spec__card-title">График работы</h3>
                        {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС", "Обеденный перерыв"].map((day) => (
                            <div className="spec__time-day" >
                                <h3 className="spec__card-title spec__time-title">{day}</h3>
                                <Input type="text" text="00:00" className={"spec__date-btn spec__date-btn-add"} />
                                <span>-</span>
                                <Input type="text" text="00:00" className={"spec__date-btn spec__date-btn-add"} />
                            </div>
                        ))}
                    </div>
                    <div className="spec__text-con"><h3 className="spec__card-title">Опыт работы</h3> <button className="spec__text-or">+ Добавить</button></div>
                    <Input type={"text"} text={"Введите название клиники"} title={"Клиника"} className={"spec__input"} />
                    <label htmlFor="" className="spec__label">Специализация
                        <select name="" id="" className="input__input spec__input spec__input-select" defaultValue="">
                            <option value="" disabled hidden>Выберите из списка</option>
                            {[
                                "Специализация", "Специализация", "Специализация"
                            ].map((item, index) => (
                                <option value={index + 1}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </label>
                    <div className="spec__time-bot spec__time-bot-add">
                        <div className="spec__time-bot">
                            <label htmlFor="" className="spec__label">Начало
                                <select name="" id="" className="spec__date-btn spec__date-btn-time" defaultValue="">
                                    <option value="" disabled hidden>Месяц</option>
                                    {[
                                        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                                        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
                                    ].map((month, index) => (
                                        <option value={index + 1}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <Input type="text" text="Год" className={"spec__date-btn spec__date-btn-time "} />
                        </div>
                        <div className="spec__time-bot">
                            <label className="reg__password-checkbox spec__time-checkbox">
                                <input type="checkbox" name="" id="" className="reg__password-input" />
                                <span className="reg__password-checkmark">
                                    <svg width="8" height="6" viewBox="0 0 12 9" fill="none">
                                        <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                Работаю сейчас
                            </label>
                            <label htmlFor="" className="spec__label">Окончание
                                <select name="" id="" className=" spec__date-btn spec__date-btn-time " defaultValue="">
                                    <option className="spec__date-option" value="" disabled hidden >Месяц</option>
                                    {[
                                        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                                        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
                                    ].map((month, index) => (
                                        <option value={index + 1}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <Input type="text" text="Год" className={"spec__date-btn spec__date-btn-time"} />
                        </div>
                    </div>
                    <h3 className="spec__card-title spec__card-title-add">Дополнительные данные</h3>
                    <Input type={"text"} text={"Введите название учебного заведения"} title={"Образование"} className={"spec__input"} />
                    <Input type={"text"} text={"Введите информацию о враче"} title="Описание" className={"spec__input"} />

                    <label htmlFor="" className="spec__label"><span className="spec__text-con">Опыт работы<button className="spec__text-or">+ Добавить</button></span>
                        <input type="text" className="input__input spec__input spec__input-select" placeholder="Введите навык" />
                    </label>
                </div>
             
            </div>
                <div className="myClinic__mb">
                     <Button className={"myClinic__mb-btn"} > Сохранить</Button >
                </div>
        </div>
    )
}

export default AddSpecialist