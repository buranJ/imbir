import "./specialists.scss";
import Location from "../../assets/icons/loc.png";
import Card from "../UI/Card/Card";

function Specialists() {
  return (
    <section className="specialists">
      <div className="container">

        <div className="specialists__top">
          <h2 className="specialists__title">Специалисты</h2>

          <div className="specialists__location">
            <div className="specialists__location-icon">
              <img src={Location} alt="loc" />
            </div>
            <div>
              <div className="specialists__city">г. Бишкек</div>
              <div className="specialists__district">Ленинский район</div>
            </div>
          </div>
        </div>

        <p className="specialists__subtitle">
          Выберите интересующие вас параметры, чтобы ознакомиться с подходящими врачами
        </p>

        <div className="specialists__filters">

          <div className="specialists__filter">
            <label>Специализация</label>
            <select>
              <option>Все</option>
            </select>
          </div>

          <div className="specialists__filter specialists__filter--range">
            <label>Стаж, лет</label>
            <div className="range-box">
              <span>0</span>
              <input type="range" min="0" max="10" />
              <span>10</span>
            </div>
          </div>

          <div className="specialists__filter">
            <label>Оценка</label>
            <select>
              <option>Все</option>
            </select>
          </div>

          <div className="specialists__filter specialists__filter--range">
            <label>Стоимость, с</label>
            <div className="range-box">
              <span>0</span>
              <input type="range" min="0" max="1000" />
              <span>1000</span>
            </div>
          </div>


        </div>
          <button className="specialists__reset">
            ✕ Сбросить фильтры
          </button>
      </div>
    </section>
  );
}

export default Specialists;