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
            <a href="" className="footer__logo"><img src={logo2} alt="" /><img src={logo} alt="logo" /></a>
            <div className="footer__media">
              <img src={media} alt="" className="footer__media-img" />
              <img src={media} alt="" className="footer__media-img" />
              <img src={media} alt="" className="footer__media-img" />
              <img src={media} alt="" className="footer__media-img" />
            </div>
          </div>
     
        <div className="footer__right">
          <ul className="footer__list">
            <li className="footer__item">Быстрые ссылки</li>
            <li className="footer__item">Быстрые ссылки</li>
            <li className="footer__item">Быстрые ссылки</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Быстрые ссылки</li>
            <li className="footer__item">Быстрые ссылки</li>
            <li className="footer__item">Быстрые ссылки</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Быстрые ссылки</li>
            <li className="footer__item">Быстрые ссылки</li>
            <li className="footer__item">Быстрые ссылки</li>
          </ul>
        </div>
           </div>
        <p className="footer__text">2026 Imbir. Все права защищены</p>
      </div>
    </div>
  </footer>
}

export default Footer;
