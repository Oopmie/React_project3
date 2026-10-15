import { Photos } from "../../../Photos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../P1_sec7/P1_sec7.scss";

const items = [
    {
        id: 1,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 2,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 3,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 4,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 5,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 6,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 7,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 8,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 9,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 10,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 11,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    },
    {
        id: 12,
        image: Photos.s7img,
        title: "Monday 05, September 2021 | By Author",
        description: "This Article’s Title goes Here, but not too long.",
        view: Photos.view,
        view_count: "68",
        like: Photos.like,
        like_count: 86
    }
];

export default function P1_sec7() {
    return (
        <section className="P1_sec7">
            <div className="text">
                <h2>Better information, Better health</h2>
                <h1>News</h1>
            </div>

            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                initialSlide={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Array.from(
                    { length: items.length / 4 },
                    (_, index) => (
                        <SwiperSlide key={index}>
                            <div className="news-grid">
                                {items
                                    .slice(index * 4, index * 4 + 4)
                                    .map((item) => (
                                        <div className="news-card" key={item.id}>
                                            <img className="news-img" src={item.image} alt="" />
                                            <div className="news-info">
                                                <p className="news-date">{item.title}</p>
                                                <p className="news-description">{item.description}</p>
                                                <div className="news-stats">
                                                    <div className="news-stat">
                                                        <img src={item.view} />
                                                        <span>{item.view_count}</span>
                                                    </div>
                                                    <div className="news-stat">
                                                        <img src={item.like}/>
                                                        <span>{item.like_count}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}
