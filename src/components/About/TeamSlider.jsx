import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, A11y } from 'swiper/modules';
import Image from '../UI/Image';
import { Col, Row } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SliderNav from './SliderNav';
import TeamSliderDesc from './TeamSliderDesc';
import useFetch from '../../utils/hooks/useFetch';
import { ABOUT_TEAM_SLIDER_API } from '../../utils/constant';

const TeamSlider = () => {

    const { data, isloading, error } = useFetch(ABOUT_TEAM_SLIDER_API);

    if (isloading) return <div>loading...</div>

    if (error) return <div>fetching teams details: {error}</div>

    return (
        <>
            <Row className='row align-items-center justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center bg-elem'>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                    <Swiper
                        modules={[Navigation, A11y, Thumbs]}
                        slidesPerView={1}
                        grabCursor={false}
                        touchRatio={0}
                        spaceBetween={10}
                        loop={true}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        className="team-details"
                    >
                        {data.map((value) => {
                            const { id } = value;
                            return (
                                <SwiperSlide key={id}>
                                    <TeamSliderDesc {...value} />
                                </SwiperSlide>
                            )
                        })}
                        <SliderNav />
                    </Swiper>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} className='pe-xxl-0 pe-xl-0 pe-lg-0'>
                    <div className="slider-main">
                        <Swiper
                            modules={[Navigation, Thumbs, A11y]}
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
                                    slidesPerView: 2.6,
                                },
                            }}
                            className="team-slider"
                        >
                            {data.map((value) => {
                                const {id,image} = value;
                                return (
                                    <SwiperSlide key={id}>
                                        <Image src={image} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TeamSlider