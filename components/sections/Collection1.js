'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.3,
    },
    freeMode: true,
    speed: 4000,
    disableOnInteraction: true
}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 5
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
        delay: 0.3,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 5000,
    // disableOnInteraction: false
}

export default function Collection1() {
    return (
        <>

            <section className=" tf-collection ">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="swiper-container collection-1 visible">
                                <Swiper {...swiperOptions} className="swiper-wrapper ">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product ">
                                                <div className="image">
                                                    <img src="/assets/images/product/01.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Management Consulting #01</Link></h6>
                                                {/* <h6 className="name"><Link href="/item-detail">Management Consulting #01</Link></h6> */}
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/02.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Auditing #02</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/03.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Coaching #03</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/04.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Interim Management #04</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/05.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Staff Development #05</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/06.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Qualified Professional(QP) #06</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/06.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Qualified Supervising Professional(QSP) #07</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/07.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">245D Living Compliance #08</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tf-container-2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container collection-2 visible">
                                <Swiper {...swiperOptions2} className="swiper-wrapper ">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/08.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Comprehensive Client Paperwork Management #01</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/09.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Creation of 245D Program Books #02</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/10.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Intake Documentation Compliance #03</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/11.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Maintaining detailed Record Keeping #04</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/12.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Ensuring regulatory Compliance #05</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/13.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="">Follow-up assessments to monitor client progress. #06</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
