import Registration from "../UI/Registration/Registration"
import image from "../../assets/Imgs/reg.png"
import user from "../../assets/icons/user.svg"
import Input from "../UI/Input/Input"
import Button from "../UI/Button/Button"

function Recover({ title, span, type, mode, icon, className }) {
    return (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <img src={image} alt="image" className="login__img" />
            
                    <Registration
                        title="Восстановить пароль"
                        span="Придумайте и подтвердите новый пароль для вашего аккаунта"
                        mode="password"
                        desc="Или продолжить с помощью"

                    >
                        <Input type="text" text="Введите новый пароль" title={"Новый пароль"} icon={user} />
                        <Input type="text" text="Введите новый пароль повторно" title={"Подтвердите новый пароль"} icon={user} />
                        <div className="reg__password">
                            <p className="reg__password-checkbox">Пароль должен содержать:</p>
                            <label className="reg__password-checkbox">
                                <input type="checkbox" name="" id="" className="reg__password-input" />
                                <span className="reg__password-checkmark">
                                    <svg width="8" height="6" viewBox="0 0 12 9" fill="none">
                                        <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                8 или более символов латинского алфавита
                            </label>
                             <label className="reg__password-checkbox">
                                <input type="checkbox" name="" id="" className="reg__password-input" />
                                <span className="reg__password-checkmark">
                                    <svg width="8" height="6" viewBox="0 0 12 9" fill="none">
                                        <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                               Заглавные и строчные буквы 
                            </label>
                             <label className="reg__password-checkbox">
                                <input type="checkbox" name="" id="" className="reg__password-input" />
                                <span className="reg__password-checkmark">
                                    <svg width="8" height="6" viewBox="0 0 12 9" fill="none">
                                        <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                Цифры
                            </label>
                        </div>
                        <Button className="reg__btn">Сохранить пароль</Button>
                    </Registration>
             

                </div>
            </div>
        </div>
    )
}

export default Recover