import { Photos } from "../../../Photos";
import "../P1_sec5/P1_sec5.scss"
export default function P1_sec5() {
    return (
        <>
            <section className="P1_sec5">
                <div className="container">
                    <div className="text">
                        <h1>Book an Appointment</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    </div>
                    <div className="wrapper">
                        <div className="box1">
                            <input type="text" placeholder="   Name" />
                        </div>
                        <div className="box2">
                            <input type="text" placeholder="   Gender" />
                            <img src={Photos.str_down} alt="" />
                        </div>
                        <div className="box3">
                            <input type="text" placeholder="   Email" />
                        </div>
                        <div className="box4">
                            <input type="text" placeholder="   Phone" />
                        </div>
                        <div className="box5">
                            <input type="text" placeholder="   Date" />
                            <img src={Photos.str_down} alt="" />
                        </div>
                        <div className="box6">
                            <input type="text" placeholder="   Time" />
                            <img src={Photos.str_down} alt="" />
                        </div>
                        <div className="box7">
                            <input type="text" placeholder="   Doctor" />
                            <img src={Photos.str_down} alt="" />
                        </div>
                        <div className="box8">
                            <input type="text" placeholder="   Department" />
                            <img src={Photos.str_down} alt="" />
                        </div>
                        <div className="box9">
                            <input type="text" placeholder="   Message" />
                        </div>
                        <div className="box10">
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}