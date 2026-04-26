import Registration from "../UI/Registration/Registration"
import image from "../../assets/Imgs/reg.png"
import Input from "../UI/Input/Input"

function Code({ title, span, type, mode, desc }) {
    return (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <img src={image} alt="image" className="login__img"/>
                    <Registration
                        title="Восстановить пароль"
                        span="Введите код подтверждения, отправленный на вашу почту"
                        mode="code"
                        desc="Получить код повторно
                        через 00:59"
                    >

                    </Registration>

                </div>
            </div>
        </div>
    )
}

export default Code