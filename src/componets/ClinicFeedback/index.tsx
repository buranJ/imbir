import star from "../../assets/icons/star.png"
import Button from "../UI/Button/Button"
import "./clinFeed.scss"
function ClinicFeedback({className}) {
    return (
        <section className="clinFeed">
            <div className="container">
                <div className="clinFeed__content">
                    <h2 className="clinFeed__title">Отзывы</h2>
                    <div className="clinFeed__top">
                        <div className="clinFeed__card">
                            <div className="clinFeed__card-top">
                                <img src={star} alt="" className="clinFeed__card-img" />
                                <h3 className="clinFeed__card-title">4.85</h3>
                            </div>
                            <p className="clinFeed__card-text">Средняя оценка</p>
                        </div>
                        <div className="clinFeed__card">
                            <div className="clinFeed__card-top">
                                <img src={star} alt="" className="clinFeed__card-img" />
                                <h3 className="clinFeed__card-title">4.85</h3>
                            </div>
                            <p className="clinFeed__card-text">Средняя оценка</p>
                        </div>
                    </div>
                    <div className="clinFeed__card clinFeed__bot">
                        <h3 className="clinFeed__card-bot-title">Оставьте свой отзыв</h3>
                        <label htmlFor="" className="clinFeed__card-label">Оцените специалиста
                            <input type="text" className="clinFeed__card-input" />
                        </label>
                        <label htmlFor="" className="clinFeed__card-label">Поделитесь своим мнением о клинике
                            <textarea name="" id="" className="clinFeed__card-textarea" placeholder="Введите текст"></textarea>
                        </label>
                        <Button className={"clinFeed__btn"}>Отправить</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClinicFeedback