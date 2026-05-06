
import image from "../../assets/Imgs/reg.png"

import Password from "../Password"
import Saved from "../Saved"

function Code({ title, span, type, mode, desc }) {
    return (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <img src={image} alt="image" className="login__img"/>
                   <Password/>
                   {/* <Saved/> */}

                </div>
            </div>
        </div>
    )
}

export default Code