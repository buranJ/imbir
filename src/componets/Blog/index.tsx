import "./blog.scss"
import blog from "../../assets/Imgs/blog.png"
import card from "../../assets/Imgs/blog-card.png"

function Blog() {
    return (
        <section className="blog">
            <div className="container">
                <div className="blog__content">
                    <h2 className="blog__title">Блог</h2>
                    <p className="blog__card-desc">Comprehensive medical care tailored to your needs for a healthier life</p>
                    <div className="blog__main">
                        <div className="blog__left">
                            <img src={blog} alt="image" className="blog__left-img" />
                            <div className="blog__card">
                                <h3 className="blog__card-text">Здоровье<span >29 января 2026</span></h3>
                                <h3 className="blog__card-title">Как понять, что пора к врачу, а не в Google</h3>
                                <p className="blog__card-desc">Простые признаки, при которых самодиагностика может навредить,и когда нужна консультация специалиста</p>
                            </div>
                        </div>
                        <div className="blog__right">
                            <div className="blog__right-card">
                                <img src={card} alt="image" />
                                <div className="blog__right-card-text">
                                    <h3 className="blog__card-text">Телемедицина<span>12 января 2026</span></h3>
                                    <p className="blog__card-title">Онлайн-консультация с врачом: мифы и реальность</p>
                                </div>
                            </div>
                            <div className="blog__right-card">
                                <img src={card} alt="image" />
                                <div className="blog__right-card-text">
                                    <h3 className="blog__card-text">Телемедицина<span>12 января 2026</span></h3>
                                    <p className="blog__card-title">Онлайн-консультация с врачом: мифы и реальность</p>
                                </div>
                            </div>
                            <div className="blog__right-card">
                                <img src={card} alt="image" />
                                <div className="blog__right-card-text">
                                    <h3 className="blog__card-text">Телемедицина<span>12 января 2026</span></h3>
                                    <p className="blog__card-title">Онлайн-консультация с врачом: мифы и реальность</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog