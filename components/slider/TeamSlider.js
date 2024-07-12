'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-team-next",
        prevEl: ".button-team-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
}

import Link from "next/link"
export default function TeamSlider() {
    return (
        <>
            <div className="swiper-container team-slider ">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src="/assets/images/team/01.jpg" alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Larry Ajala</Link></h4>
                                <p className="position">CEO/Founder</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>{/* item*/}
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team active">
                                <div className="image">
                                    <img src="/assets/images/team/02.jpg" alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/">Stephen Oladoke</Link></h4>
                                <p className="position">Senior Business Developer</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>{/* item*/}
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src="/assets/images/team/04.jpg" alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/">Carla Williams</Link></h4>
                                <p className="position">Senior Project Manager</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>{/* item*/}
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src="/assets/images/team/team-4.jpg" alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Esther Howard</Link></h4>
                                <p className="position">Project Manager</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>{/* item*/}
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src="/assets/images/team/team-5.jpg" alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Jenny Wilson</Link></h4>
                                <p className="position">Artist</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>{/* item*/}
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src="/assets/images/team/team-6.jpg" alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Robert Fox</Link></h4>
                                <p className="position">UI/UX Designer</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>{/* item*/}
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="swiper-button-prev button-team-prev" />
            <div className="swiper-button-next button-team-next" />
        </>
    )
}
