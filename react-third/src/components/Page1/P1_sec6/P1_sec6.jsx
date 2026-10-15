import { Photos } from "../../../Photos";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "../P1_sec6/P1_sec6.scss"
const items = [
    {
        id: 1,
        image: Photos.s6img,
        title: "Doctor's Name",
        category: "Neurology",
        in: Photos.in1,
        fb: Photos.fb,
        inst: Photos.inst
    },
    {
        id: 2,
        image: Photos.s6img1,
        title: "Doctor's Name",
        category: "Neurology",
        in: Photos.in1,
        fb: Photos.fb,
        inst: Photos.inst
    },
    {
        id: 3,
        image: Photos.s6img2,
        title: "Doctor's Name",
        category: "Neurology",
        in: Photos.in1,
        fb: Photos.fb,
        inst: Photos.inst
    }
];
export default function P1_sec6() {
    return (
        <>
            <section className="P1_sec6">
                <div className="text">
                    <h2>Trusted Care</h2>
                    <h1>Our Doctors</h1>
                </div>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={3}
                    initialSlide={4}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {items.map(item => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className="cian">
                                <p>{item.title}</p>
                                <h4>{item.category}</h4>
                                <div className="links">
                                    <img src={item.in} />
                                    <img src={item.fb} />
                                    <img src={item.inst} />
                                </div>
                            </div>
                            <div className="blue">
                                <p>View Profile</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    {items.map(item => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className="cian">
                                <p>{item.title}</p>
                                <h4>{item.category}</h4>
                                <div className="links">
                                    <img src={item.in} />
                                    <img src={item.fb} />
                                    <img src={item.inst} />
                                </div>
                            </div>
                            <div className="blue">
                                <p>View Profile</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    {items.map(item => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className="cian">
                                <p>{item.title}</p>
                                <h4>{item.category}</h4>
                                <div className="links">
                                    <img src={item.in} />
                                    <img src={item.fb} />
                                    <img src={item.inst} />
                                </div>
                            </div>
                            <div className="blue">
                                <p>View Profile</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}
