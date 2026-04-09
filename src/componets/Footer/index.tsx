import logo from "../../assets/icons/logo.png"
import logo2 from "../../assets/icons/logo-footer.png"
import media from "../../assets/icons/media.png"
import home from "../../assets/icons/home-2.png"
import search from "../../assets/icons/stethoscope.png"
import chat from "../../assets/icons/message-text.png"
import user from "../../assets/icons/user.png"
import "./footer.scss"

function Footer() {
  return <footer className="footer">
    <div className="container">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__left">
            <a href="" className="footer__logo"><img src={logo2} alt="" className="footer__logo-1" /><img src={logo} alt="logo" className="footer__logo-2" /></a>
            <div className="footer__media">
              <img src={media} alt="" className="footer__media-img" />
              <img src={media} alt="" className="footer__media-img" />
              <img src={media} alt="" className="footer__media-img" />
              <img src={media} alt="" className="footer__media-img" />
            </div>
          </div>

          <div className="footer__right">
            <ul className="footer__list">
              <li className="footer__item footer__item-title">Быстрые ссылки</li>
              <li className="footer__item">Клиники</li>
              <li className="footer__item">Специалисты</li>
              <li className="footer__item">Услуги</li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item footer__item-title">Помощь и поддержка</li>
              <li className="footer__item">Контакты</li>
              <li className="footer__item">Условия и положения</li>
              <li className="footer__item">Политика конфиденциальности</li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item footer__item-title">Свяжитесь с нами</li>
              <li className="footer__item"><a href="mailto:info@preste.com" className="footer__item">info@preste.com</a></li>
              <li className="footer__item"><a href="tel:+996 (702) 555-0122" className="footer__item">996 (702) 555-0122</a></li>
              <li className="footer__item footer__item-l">г. Бишкек, ул. Тыныстанова, 56</li>
            </ul>
          </div>
        </div>
        <p className="footer__text">2026 Imbir. Все права защищены</p>
      </div>
      <div className="footer__mb">
        <div className="footer__mb-content">
          <div className="footer__mb-item">
            <img src={home} alt="" />
            <h3 className="footer__mb-text"><span>Главная</span></h3>
          </div>
          <div className="footer__mb-item">
            <img src={search} alt="" />
            <h3 className="footer__mb-text">Поиск</h3>
          </div>
          <div className="footer__mb-item">
            <img src={chat} alt="" />
            <h3 className="footer__mb-text">Чат</h3>
          </div>
          <div className="footer__mb-item">
            <img src={user} alt="" />
            <h3 className="footer__mb-text">Профиль</h3>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;
