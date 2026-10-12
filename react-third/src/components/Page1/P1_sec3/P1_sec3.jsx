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
                        <div></div>
                    </div>
                    <div className="center_cont">

                    </div>
                    <div className="right_cont">

                    </div>
                </div>
            </section>
        </>
    )
}