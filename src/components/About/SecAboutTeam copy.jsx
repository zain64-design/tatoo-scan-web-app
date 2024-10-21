import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, A11y } from 'swiper/modules';
import Image from '../UI/Image';
import Text from '../UI/Text'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const SecAboutTeam = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        const imgDetailsElement = document.querySelector('.img-details');

        const preventDefault = (e) => {
            e.preventDefault();
        };

        imgDetailsElement.addEventListener('mousedown', preventDefault, { passive: false });
        imgDetailsElement.addEventListener('touchstart', preventDefault, { passive: false });

        return () => {
            imgDetailsElement.removeEventListener('mousedown', preventDefault);
            imgDetailsElement.removeEventListener('touchstart', preventDefault);
        };
    }, []);

    return (
        <>
            <section className='sec-our-team'>
                <Container fluid>
                    <Row className='row align-items-center justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                            <Swiper
                                className="img-details"
                                modules={[Navigation, A11y]}
                                direction="vertical"
                                loop={true}
                                // spaceBetween={10}
                                // grabCursor={false}
                                // slideToClickedSlide={true}
                                // simulateTouch={false}
                                // touchRatio={0}
                                // touchStartPreventDefault={false}
                                // touchMoveStopPropagation={false}
                                thumbs={{ swiper: thumbsSwiper }}
                                navigation
                            >
                                <SwiperSlide>
                                    <div className="serv-detail">
                                        <Text as="h5">Alex  Brook</Text>
                                        <Text as="h6">Cheif Executive Officer</Text>
                                        <Text as="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="serv-detail">
                                        <Text as="h5">Alexa  Brook</Text>
                                        <Text as="h6">Cheif Executive Officer</Text>
                                        <Text as="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="serv-detail">
                                        <Text as="h5">Eddie  Brook</Text>
                                        <Text as="h6">Cheif Executive Officer</Text>
                                        <Text as="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="serv-detail">
                                        <Text as="h5">Alex  Brook</Text>
                                        <Text as="h6">Cheif Executive Officer</Text>
                                        <Text as="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="serv-detail">
                                        <Text as="h5">Alexa  Brook</Text>
                                        <Text as="h6">Cheif Executive Officer</Text>
                                        <Text as="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="serv-detail">
                                        <Text as="h5">Eddie  Brook</Text>
                                        <Text as="h6">Cheif Executive Officer</Text>
                                        <Text as="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="flex-controls">
                                <div className="swp-grp">
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} className='pe-xxl-0 pe-xl-0 pe-lg-0'>
                            <div className="slider-main">
                                <Swiper
                                    className=" service-slider"
                                    modules={[Navigation, Thumbs, A11y]}
                                    loop={true}
                                    spaceBetween={1}
                                    navigation
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        576: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2.2,
                                        },
                                        992: {
                                            slidesPerView: 1.9,
                                        },
                                        1200: {
                                            slidesPerView: 1.9,
                                        },
                                        1400: {
                                            slidesPerView: 2.4,
                                        },
                                        1444: {
                                            slidesPerView: 2.4,
                                        },
                                        1599: {
                                            slidesPerView: 2.4,
                                        },
                                    }}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    onSwiper={setThumbsSwiper}
                                >
                                    <SwiperSlide>
                                        <div className="img-main">
                                            <Image src="/images/about/tm1.svg" alt="slider-img" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img-main">
                                            <Image src="/images/about/tm2.svg" alt="slider-img" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img-main">
                                            <Image src="/images/about/tm3.svg" alt="slider-img" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img-main">
                                            <Image src="/images/about/tm1.svg" alt="slider-img" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img-main">
                                            <Image src="/images/about/tm2.svg" alt="slider-img" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="img-main">
                                            <Image src="/images/about/tm3.svg" alt="slider-img" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecAboutTeam