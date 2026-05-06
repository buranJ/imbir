import Registration from "../UI/Registration/Registration"
import image from "../../assets/Imgs/reg.png"
import user from "../../assets/icons/user.svg"
import "./login.scss"
import Input from "../UI/Input/Input"


function Login({ title, span, type, mode, icon, className }) {
    return (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <img src={image} alt="image" className="login__img" />
                    <Registration
                        title="С возвращением!"
                        span="Введите пароль от вашего аккаунта"
                        mode="login"
                        desc="Или продолжить с помощью"

                    >
                        <Input type="email" text="Введите вашу почту" title={"Электронная почта"} icon={user} />
                    </Registration>

                </div>
            </div>
        </div>
    )
}

export default Login