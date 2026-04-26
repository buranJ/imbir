import Registration from "../UI/Registration/Registration"
import image from "../../assets/Imgs/reg.png"
import "./login.scss"
import Input from "../UI/Input/Input"
import Saved from "../Saved"

function Login({ title, span,type, mode }) {
    return (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <img src={image} alt="image" className="login__img" />
                    {/* <Registration
                        title="С возвращением!"
                        span="Введите пароль от вашего аккаунта"
                         mode="login"
                          desc="Или продолжить с помощью"
                    >
                        <Input type="email" text="Введите вашу почту" title={"Электронная почта"}/>
                    </Registration> */}
                    <Saved/>

                </div>
            </div>
        </div>
    )
}

export default Login