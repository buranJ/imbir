
// import MyClinic from "../MyClinic"

import AddProcedure from "../AddProcedure"
import AddSpecialist from "../AddSpecialist"
import MyClinic from "../MyClinic"
import ProceduresDetail from "../ProceduresDetail"
import SiteBar from "../SiteBar"
import SpecialistDetail from "../SpecialistDetail"
import "./clinicProfile.scss"

function ClinicProfile() {
    return (
        <div className="clinicProfile">
            <div className="container">
                <div className="clinicProfile__content">
                    <SiteBar mode="clinic" />
                    <MyClinic/>
                    {/* <SpecialistDetail/> */}
                    {/* <AddSpecialist/> */}
                    {/* <ProceduresDetail/> */}
                    {/* <AddProcedure /> */}
                </div>
            </div>
        </div>
    )
}

export default ClinicProfile