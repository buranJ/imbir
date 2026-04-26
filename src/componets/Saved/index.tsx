import Button from "../UI/Button/Button"
import "./saved.scss"
import image from "../../assets/Imgs/Success.png"

function Saved({className}){
    return(
<div className="saved">
    <img src={image} alt="image" />
    <h2 className="saved__title">Пароль успешно сохранён!</h2>
    <p className="saved__desc">Войдите в свой аккаунт с новым паролем</p>
     <Button className="saved__btn">Войти</Button>
</div>
    )
}

export default Saved