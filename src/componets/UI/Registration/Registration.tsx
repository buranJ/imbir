import Button from "../Button/Button"
import "./reg.scss"
import media from "../../../assets/icons/media.png"
import arrow from "../../../assets/icons/arrow.png"

function Registration({ children, color, bg, className, title, span, mode, desc }) {
    return (
        <>
            <form action="" className="reg">
                <div className="reg__top">
                    <button className={`reg__top-btn ${mode === "login" ? "active" : ""}`}><img src={arrow} alt="arrow" className="reg__top-btn-img" /></button>
                    <div className="reg__btns">
                        <button className={`reg__but ${mode === "login" ? "active" : ""}`}>Вход</button>
                        <button className={`reg__but ${mode === "register" ? "active" : ""}`}>Регистрация</button>
                    </div>
                </div>
                <div className="reg__main">
                    <p className="reg__desc">{title}
                        <span className="reg__span">{span}</span></p>

                    {children}
                </div>
                <div className={`reg__bot ${mode === "password" ? "active" : ""}`}>
                    <Button className="reg__btn">Продолжить</Button>
                    <p className="reg__desc reg__desc-mb "><span className="reg__span">{desc}</span></p>

                    <div className="reg__media">
                        <Button className="reg__media-btn" color={"#191A1B"} bg={"#fff"}>
                            <img src={media} alt="media" className="reg__media-img" />
                            <span className="reg__media-text">Google</span></Button>
                        <Button className="reg__media-btn" color={"#191A1B"} bg={"#fff"}>  <img src={media} alt="media" className="reg__media-img" /> <span className="reg__media-text">Facebook</span></Button>
                        <Button className="reg__media-btn" color={"#191A1B"} bg={"#fff"}>  <img src={media} alt="media" className="reg__media-img" /> <span className="reg__media-text">Apple</span></Button>
                    </div>
                </div>
            </form>
            
        </>
    )
}

export default Registration