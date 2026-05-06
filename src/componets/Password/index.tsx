
import arrow from "../../assets/icons/arrow.png"

function Password({ children, color, bg, className, title, span, mode, desc }) {
    return (
        <>
            <form action="" className="reg">
                <div className="reg__top">
                    <button className="reg__top-btn"><img src={arrow} alt="arrow" className="reg__top-btn-img" /></button>
                </div>
                <div className="reg__main">
                    <p className="reg__desc">Восстановить пароль
                        <span className="reg__span">Введите код подтверждения, отправленный на вашу почту</span></p>
                    <div className="reg__inputs">
                        <input type="" className="reg__input" maxLength="1" />
                        <input type="text" className="reg__input" maxLength="1" />
                        <input type="text" className="reg__input" maxLength="1" />
                        <input type="text" className="reg__input" maxLength="1" />
                        <input type="text" className="reg__input" maxLength="1" />
                    </div>
                    <p className="reg__desc"><span className="reg__span">Получить код повторно</span></p>
                </div>

            </form>

        </>
    )
}

export default Password