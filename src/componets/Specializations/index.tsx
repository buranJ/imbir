import "./specializations.scss";
import Lor from "../../assets/Imgs/lor.png"

function Specializations() {
  return (
    <section className="specializations">
      <div className="container">
      <div className="specializations__content">
      <h2 className="specializations__title">Специализации</h2>
      <p className="specializations__subtitle">Весь спектр услуг на одной площадке </p>
    <div className="specializations__list">
      <div className="specializations__list-card">
        <img src={Lor} alt="Lor" className="specializations__list-card-img" />
        <p className="specializations__list-card-text">ЛОР</p>
      </div>
      <div className="specializations__list-card">
        <img src={Lor} alt="Lor" className="specializations__list-card-img" />
        <p className="specializations__list-card-text">ЛОР</p>
      </div>
      <div className="specializations__list-card">
        <img src={Lor} alt="Lor" className="specializations__list-card-img" />
        <p className="specializations__list-card-text">ЛОР</p>
      </div>
      <div className="specializations__list-card">
        <img src={Lor} alt="Lor" className="specializations__list-card-img" />
        <p className="specializations__list-card-text">ЛОР</p>
      </div>
      <div className="specializations__list-card">
        <img src={Lor} alt="Lor" className="specializations__list-card-img" />
        <p className="specializations__list-card-text">ЛОР</p>
      </div>
      <div className="specializations__list-card">
        <img src={Lor} alt="Lor" className="specializations__list-card-img" />
        <p className="specializations__list-card-text">ЛОР</p>
      </div>
      <div className="specializations__list-card">
        <img src={Lor} alt="Lor" className="specializations__list-card-img" />
        <p className="specializations__list-card-text">ЛОР</p>
      </div>
      <div className="specializations__list-card">
        <img src={Lor} alt="Lor" className="specializations__list-card-img" />
        <p className="specializations__list-card-text">ЛОР</p>
      </div>
    </div>
      </div>
      </div>
    </section>
  )
}

export default Specializations