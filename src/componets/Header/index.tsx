import "./header.scss";
import Logo from "../../assets/icons/logo.png";
import Search from "../../assets/icons/serch.svg";
import Chat from "../../assets/icons/chat.svg";
import User from "../../assets/icons/user.svg";
import Button from "../UI/Button/Button";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="/" className="header__logo">
            <img src={Logo} alt="Logo" className="header__logo-img" />
          </a>
    
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-text">Клиники</li>
              <li className="header__nav-text">Специалисты</li>
              <li className="header__nav-text">Услуги</li>
              <li className="header__nav-text">Блог</li>
            </ul>

            <div className="header__nav-buttons">
              <Button color="#fff" bg="#F5653E">Записаться на приём</Button>
                <img src={Search} alt="Search" className="header__nav-icon" />
                <img src={Chat} alt="Chat" className="header__nav-icon" />
                <img src={User} alt="User" className="header__nav-icon" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
