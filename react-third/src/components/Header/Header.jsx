import { Link } from "react-router-dom"
import { Photos } from "../../Photos"
import "../Header/Header.scss"
export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Doctors</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <img src={Photos.search} alt="" />
                        <button>Appointment</button>
                    </div>
                </nav>
            </header>
        </>
    )
}