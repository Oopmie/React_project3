import { Photos } from "../../../Photos";
import "../P1_sec2/P1_sec2.scss"
export default function P1_sec2() {
    return (
        <>
            <section className="P1_sec2">
                <div className="container">
                    <h2>Welcome to Meddical</h2>
                    <h1>A Great Place to Receive Care</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    <div className="button">
                        <p><span>Learn More</span>  ➜</p>
                    </div>
                </div>
                <img src={Photos.back_sec2} alt="" />
            </section>
        </>
    )
}