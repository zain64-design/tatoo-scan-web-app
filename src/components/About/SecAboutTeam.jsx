import React, { useRef} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, A11y } from 'swiper/modules';
import Image from '../UI/Image';
import Text from '../UI/Text'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../assets/scss/components/about/secAboutTeam.scss'

const SecAboutTeam = () => {

    const detailsSwiperRef = useRef(null);
    const sliderSwiperRef = useRef(null);

    const handleDetailsSlideChange = (swiper) => {
        if (sliderSwiperRef.current) {
            sliderSwiperRef.current.slideTo(swiper.activeIndex);
        }
    };

    return (
        <>
            <section className='sec-our-team'>
                <Container fluid>
                    <Row className='row align-items-center justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                            <Swiper
                                ref={detailsSwiperRef}
                                modules={[Navigation,Thumbs, A11y]}
                                slidesPerView={1}
                                grabCursor={false}
                                touchRatio= {0}
                                spaceBetween={10}
                                loop={true}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                className="service-details"
                            >
                                <SwiperSlide>
                                    <div className="desc">
                                    <Text as="h4">Alex  Brook</Text>
                                    <Text as='h6'>Cheif Executive Officer</Text>
                                    <Text as="p">Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="desc">
                                    <Text as="h4">Alexa  Brook</Text>
                                    <Text as='h6'>Cheif Executive Officer</Text>
                                    <Text as="p">Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="desc">
                                    <Text as="h4">Danny  Brook</Text>
                                    <Text as='h6'>Cheif Executive Officer</Text>
                                    <Text as="p">Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="desc">
                                    <Text as="h4">Alex  Brook</Text>
                                    <Text as='h6'>Cheif Executive Officer</Text>
                                    <Text as="p">Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="desc">
                                    <Text as="h4">Alexa  Brook</Text>
                                    <Text as='h6'>Cheif Executive Officer</Text>
                                    <Text as="p">Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="desc">
                                    <Text as="h4">Danny  Brook</Text>
                                    <Text as='h6'>Cheif Executive Officer</Text>
                                    <Text as="p">Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                                    </div>
                                </SwiperSlide>
                                <div className="swiper-button-prev">
                                </div>
                                <div className="swiper-button-next">
                                </div>
                            </Swiper>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} className='pe-xxl-0 pe-xl-0 pe-lg-0'>
                            <div className="slider-main">
                                <Swiper
                                    ref={sliderSwiperRef}
                                    modules={[Thumbs, A11y]}
                                    spaceBetween={1}
                                    grabCursor={true}
                                    loop={true}
                                    navigation={{
                                        prevEl: '.swiper-button-prev',
                                        nextEl: '.swiper-button-next',
                                    }}
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
                                            slidesPerView: 2.5,
                                        },
                                        1400: {
                                            slidesPerView: 2.5,
                                        },
                                        1444: {
                                            slidesPerView: 2.5,
                                        },
                                        1599: {
                                            slidesPerView: 2.5,
                                        },
                                    }}
                                    className="service-slider"
                                >
                                    <SwiperSlide>
                                        <Image src="/images/about/tm1.svg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="/images/about/tm2.svg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="/images/about/tm3.svg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="/images/about/tm1.svg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="/images/about/tm2.svg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="/images/about/tm3.svg" />
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