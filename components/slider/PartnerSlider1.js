'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.3,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 4000,
    disableOnInteraction: true,
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
}

export default function PartnerSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper-wrapper">
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/02.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/06.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/07.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/09.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/10.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/11.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/12.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/01.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/03.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/04.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
               
            </Swiper>
        </>
    )
}
