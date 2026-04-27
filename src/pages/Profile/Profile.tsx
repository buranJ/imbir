import Feedback from "../../componets/Feedback";
import SiteBar from "../../componets/SiteBar";
import "./profile.scss"

function Profile() {
   return(
        <section className="profile">
            <div className="container">
                <div className="profile__content">
                    <SiteBar/>
                    <Feedback/>
                </div>
            </div>
        </section>
    )
}

export default Profile;
