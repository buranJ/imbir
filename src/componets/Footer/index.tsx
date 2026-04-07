import logo from "../../assets/icons/logo.png"
import logo2 from "../../assets/icons/logo-footer.png"
import media from "../../assets/icons/media.png"
import "./footer.scss"

function Footer() {
  return <footer className="footer">
    <div className="container">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__left">
            <a href="" className="footer__logo"><img src={logo2} alt="" className="footer__logo-1"/><img src={logo} alt="logo" className="footer__logo-2"/></a>
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
    </div>
  </footer>
}

export default Footer;
