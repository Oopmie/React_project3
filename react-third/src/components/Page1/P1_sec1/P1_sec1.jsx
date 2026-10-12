import { Photos } from "../../../Photos";
import "../P1_sec1/P1_sec1.scss"
export default function P1_sec1(){
    return(
        <>
            <section className="P1_sec1">
                <div className="container">
                    <div className="first">
                        <p>Book an Appointment</p>
                        <img src={Photos.calendar} alt="" />
                    </div>
                    <div className="second">
                        <p>Book an Appointment</p>
                        <img src={Photos.team} alt="" />
                    </div>
                    <div className="third">
                        <p>Book an Appointment</p>
                        <img src={Photos.cash} alt="" />
                    </div>
                </div>
            </section>
        
        </>
    )
}