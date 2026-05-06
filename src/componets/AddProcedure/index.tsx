
import pencil from "../../assets/icons/pencil.png"
import image from "../../assets/Imgs/blog-card.png"
import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import Arrow from "../UI/Arrow/Arrow"
function AddProcedure({ bg, color, className, title, text, type }) {
    return (
        <div className="spec">
            <div className="spec__top">
                <div className="spec__top-sides">
                    <Arrow className="spec__top-btn" />
                    <h2 className="spec__top-title spec__top-title-add">Добавить процедуру</h2>
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
                    <Input type={"text"} text={"Введите название"} className={"spec__input"} title={"Название процедуры"} />
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
                    <Input type={"text"} text={"0 сом"} title={"Стоимость"} className={"spec__input"} />
                    <Input type={"text"} text={"Введите название клиники"} title={"Клиника, проводящая процедуру"} className={"spec__input"} />
                    <Input type={"text"} text={"Введите адрес клиники"} title={"Адрес клиники, проводящей процедуру"} className={"spec__input"} />
                    <div className="spec__time spec__time-add">
                        <h3 className="spec__card-title">График проведения процедуры</h3>
                        <p className="spec__time-desc">Укажите время проведения процедуры (с какого времени до какого), оставьте поля пустыми, если в какой-то день процедура не проводится.</p>
                        {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС", "Обеденный перерыв"].map((day) => (
                            <div className="spec__time-day" >
                                <h3 className="spec__card-title spec__time-title">{day}</h3>
                                <Input type="text" text="00:00" className={"spec__date-btn spec__date-btn-add"} />
                                <span>-</span>
                                <Input type="text" text="00:00" className={"spec__date-btn spec__date-btn-add"} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="myClinic__mb">
                <Button className={"myClinic__mb-btn"} > Сохранить</Button >
            </div>
        </div>
    )
}

export default AddProcedure