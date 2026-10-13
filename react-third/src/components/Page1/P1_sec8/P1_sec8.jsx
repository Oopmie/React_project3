import { Photos } from "../../../Photos";
import "../P1_sec8/P1_sec8.scss"
export default function P1_sec8() {
    return (
        <>
            <section className="P1_sec8">
                <div className="text">
                    <h2>Get in touch</h2>
                    <h1>Contact</h1>
                </div>
                <div className="row">
                    <div>
                        <img src={Photos.s8p1} alt="" />
                        <h3>Emergency</h3>
                        <p>(237) 681-812-255</p>
                        <p>(237) 666-331-894</p>
                    </div>
                    <div>
                        <img src={Photos.s8p2} alt="" />
                        <h3>Location</h3>
                        <p>0123 Some place</p>
                        <p>9876 Some country</p>
                    </div>
                    <div>
                        <img src={Photos.s8p3} alt="" />
                        <h3>Email</h3>
                        <p>fildineeesoe@gmil.com</p>
                        <p>myebstudios@gmail.com</p>
                    </div>
                    <div>
                        <img src={Photos.s8p4} alt="" />
                        <h3>Working Hours</h3>
                        <p>Mon-Sat 09:00-20:00</p>
                        <p>Sunday Emergency only</p>
                    </div>
                </div>
            </section>
        </>
    )
}