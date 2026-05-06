import Button from "../Button/Button"
import MobCard from "../MobCard/MobCard"
import card from "../../../assets/Imgs/blog-card.png"
import x from "../../../assets/icons/x-black.png"
import search from "../../../assets/icons/serch.svg"
import "./choise.scss"
function Choise({ className,tit,inputText , children}) {
    return (
        <div className="choise">
            <div className="choise__top">
                <h2 className="choise__title">{tit}</h2>
                <button className="choise__btn"><img src={x} alt="" className="choise__btn-img" /></button>
            </div>
            <div className="choise__wrap">
                <input type="text" className="choise__input" placeholder= {inputText}/>
                <img src={search} alt="search" className="choise__input-img" />
            </div>
            {/* <MobCard title="Med Center" add="ул. Московская, 189" span1="4.85" text="(255)" span2="12 лет опыта" img={card} /> */}
            {children}
            <Button className={"choise__bot"}>Выбрать</Button>

        </div>
    )
}

export default Choise