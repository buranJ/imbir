import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import Search from "../../assets/icons/serch.svg";
import Chat from "../../assets/icons/chat.svg";
import User from "../../assets/icons/user.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <img src={Logo} alt="Logo" className="header__logo-img" />
          </Link>
          <nav className="header__nav">
            <ul>
              <li><Link to="/">Клиники</Link></li>
              <li><Link to="/">Специалисты</Link></li>
              <li><Link to="/">Услуги</Link></li>
              <li><Link to="/">Блог</Link></li>
            </ul>

            <div className="header__nav-buttons">
              <button className="header__nav-btn">btn</button>

              <Link to="/search">
                <img src={Search} alt="Search" className="header__nav-icon" />
              </Link>

              <Link to="/chat">
                <img src={Chat} alt="Chat" className="header__nav-icon" />
              </Link>

              <Link to="/user">
                <img src={User} alt="User" className="header__nav-icon" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
