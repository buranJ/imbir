import "./profileCard.scss";
import calendar from "../../assets/icons/calendar.svg"
import doctor from "../../assets/Imgs/Image - doctor.png"
import star from "../../assets/icons/star.png"
import clock from "../../assets/icons/clock.svg"
import X from "../../assets/icons/x.png"
import locetion from "../../assets/icons/location.png"

type HistoryCardProps = {
  image: string;
  name: string;
  specialty: string;
  clinic: string;
  address: string | number;
  price: number;
  rating: number;
};

function ProfileHistoryCard({
  image,
  name,
  specialty,
  price,
  address,
  rating    

}: HistoryCardProps) {
  return (
    <div className="historyCard">
        <div className="container">
            <div className="historyCard__content">
                <div className="historyCard__card">
                <div className="historyCard__doctor">
                    <img src={doctor} alt="Doctor" className="historyCard__img" />
                    <img src={star} alt="Star" className="historyCard__star" />
                </div>
                <div className="historyCard__info">
                    <div className="historyCard__info-top">
                    <h3 className="historyCard__name">Айбеков Нурлан Эльдарович</h3>
                    <p className="historyCard__specialty">Врач-терапевт • <span className="historyCard__clinic">Nova Clinic</span></p>
                    </div>
                    <div className="historyCard__info-bottom">
                    <p className="historyCard__address"><img src={locetion} alt="locetion" />г. Бишкек, ул. Ленина 123</p>
                    <p className="historyCard__date"><img src={calendar} alt="Calendar" />31.01.2026</p>
                    <p className="historyCard__time"><img src={clock} alt="Clock" />10:00 - 11:00</p>
                    </div>
                </div>
                <div className="historyCard__btns">
                    <button className="historyCard__btn"><img src={X} alt="X" />Отменить</button>
                    <div className="historyCard__btns-price">
                    <p className="historyCard__btns-uzi">УЗИ</p>
                    <p className="historyCard__price"> 1700 с</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileHistoryCard;