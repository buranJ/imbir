import "./card.scss";
import docStar from "../../../assets/icons/star.png"
import doctor from "../../../assets/Imgs/Image - Doctor.png"
import like from "../../../assets/icons/heart.png"

type DoctorCardProps = {
  image: string;
  name: string;
  specialty: string;
  clinic: string;
  rating: number;
  reviews: number;
  experience: number;
};

function Card({
  image,
  name,
  specialty,
  clinic,
  rating,
  reviews,
  experience,
}: DoctorCardProps) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={doctor} alt={name} />
        <div className="card__like">
          <img src={like} alt="Like" />
        </div>
      </div>

      <div className="card__info">
        <h3 className="card__name">Айбеков Нурлан Эльдарович</h3>

        <p className="card__meta">
          Врач-терапевт • <span className="card__meta-clinic">Nova Clinic</span>
        </p>

        <div className="card__stats">
          <img src={docStar} alt="Rating" className="rating" />
          <span>(4.5)</span>
          <span> • 12 лет опыта</span>
        </div>

        <button className="card__btn">
          Записаться
        </button>
      </div>
    </div>
  );
}

export default Card;