import React from "react";
import user from "../../assets/icons/user.png";
import "./site.scss";

function SiteBar() {
  return (
    <section className="site">
      <div className="container">
        <div className="site__content">
          <h2 className="site__title">Мой профиль</h2>
          <div className="site__card">
            <img src={user} alt="" />
            <h3 className="site__card-text">Айжан К. К.</h3>
          </div>
          <div className="site__cards">
            <div className="site__card-content">
              <img src={user} alt="" />
              <h3 className="site__card-text">Айжан К. К.</h3>
            </div>
            <div className="site__card-content">
              <img src={user} alt="" />
              <h3 className="site__card-text">Айжан К. К.</h3>
            </div>
            <div className="site__card-content">
              <img src={user} alt="" />
              <h3 className="site__card-text">Айжан К. К.</h3>
            </div>
            <div className="site__card-content">
              <img src={user} alt="" />
              <h3 className="site__card-text">Айжан К. К.</h3>
            </div>
          </div>
          <div className="site__card">
            <img src={user} alt="" />
            <h3 className="site__card-text">Айжан К. К.</h3>
          </div>
          <div className="site__cards">
            <p className="site__card-desc">Статус пользователя</p>
            <h3 className="site__card-title">Витамин С</h3>
            <p className="site__card-edtext">
              Ваши отзывы действуют на врачей как ударная доза витамина C! Вы
              замечаете светлые стороны, дарите надежду другим пациентам и
              помогаете клинике расцветать. Спасибо за ваш позитивный заряд!
            </p>
            <div className="site__card-input">
                <div className="site__card-input-content">
              <div className="site__card-fb">
                <p className="site__card-fb-text">Положительных отзывов</p>
                <div className="site__card-fb-pt">90%</div>
              </div>
              <div className="site__card-fb">
                <p className="site__card-fb-text">Положительных отзывов</p>
                <div className="site__card-fb-pt">90%</div>
              </div>
              </div>
              <input type="range" value="20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SiteBar;
