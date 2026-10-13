import { Link } from "react-router-dom"
import { Photos } from "../../Photos"
import "../Footer/Footer.scss"
export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="contain">
                        <div className="col1">
                            <img className="logo" src={Photos.logo1} alt="" />
                            <p>Leading the Way in Medical
                                Execellence, Trusted Care.
                            </p>
                        </div>
                        <div className="col">
                            <h2>Important Links</h2>
                            <ul>
                                <li>Appointment</li>
                                <li>Doctors</li>
                                <li>Services</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2>Contact Us</h2>
                            <ul>
                                <li>Call: (237) 681-812-255</li>
                                <li>Email: fildineesoe@gmail.com</li>
                                <li>Address: 0123 Some place</li>
                                <li>Some country</li>
                            </ul>
                        </div>
                        <div className="col2">
                            <h2>Newsletter</h2>
                            <div className="input">
                                <input type="text" placeholder="     Enter your email address" />
                                <img src={Photos.tg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="foot">
                    <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
                    <div className="icons">
                        <img src={Photos.in2} alt="" />
                        <img src={Photos.fb2} alt="" />
                        <img src={Photos.inst2} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}