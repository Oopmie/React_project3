import { Photos } from "../../../Photos";
import "../P1_sec3/P1_sec3.scss"
export default function P1_sec3() {
    return (
        <>
            <section className="P1_sec3">
                <div className="text">
                    <h2>Care you can believe in</h2>
                    <h1>Our Services</h1>
                </div>
                <div class="wrapper">
                    <div className="left_cont">
                        <div>
                            <img src={Photos.s3p1} alt="" />
                            <p>Free Checkup</p>
                        </div>
                        <div>
                            <img src={Photos.s3p2} alt="" />
                            <p>Cardiogram</p>
                        </div>
                        <div>
                            <img src={Photos.s3p3} alt="" />
                            <p>Dna Testing</p>
                        </div>
                        <div>
                            <img src={Photos.s3p4} alt="" />
                            <p>Blood Bank</p>
                        </div>
                        <div>
                            <p>View All</p>
                        </div>
                    </div>
                    <div className="center_cont">
                        <h3>A passion for putting patients first.</h3>
                        <div className="list">
                            <ul>
                                <li>A Passion for Healing</li>
                                <li>All our best</li>
                                <li>A Legacy of Excellence</li>
                            </ul>
                            <ul>
                                <li>5-Star Care</li>
                                <li>Believe in Us</li>
                                <li>Always Caring</li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                    </div>
                    <div className="right_cont">
                        <img src={Photos.s3img} alt="" />
                        <img src={Photos.s3img1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}