import Registration from "../UI/Registration/Registration"
import image from "../../assets/Imgs/reg.png"
import user from "../../assets/icons/user.svg"
import mail from "../../assets/icons/mail.png"
import Input from "../UI/Input/Input"

function Register({ title, span, type, mode, icon }) {
    return (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <img src={image} alt="image" className="login__img" />
                    <Registration
                        title="Добро пожаловать в Imbir"
                        span="Заполните данные, чтобы создать аккаунт"
                        mode="register"
                        desc="Или продолжить с помощью"
                    >
                        <Input type="text" text="Мадина" title={"Имя"} icon={user} />
                        <Input type="text" text="Талантова" title={"Фамилия"} icon={user} />
                        <Input type="email" text="Введите вашу почту" title={"Электронная почта"} icon={mail}/>
                    </Registration>

                </div>
            </div>
        </div>
    )
}

export default Register