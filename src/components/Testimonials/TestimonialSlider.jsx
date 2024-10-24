import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from 'react-bootstrap'
import Image from '../UI/Image';
import Fancybox from '../UI/Fancybox';
import { FaPlay } from "react-icons/fa";
import Text from '../UI/Text'
import Slider from 'react-slick';
import SliderNextArrow from "./SliderNextArrow";


const TestimonialSlider = ({ testimonialData }) => {
    console.log(testimonialData);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [nav3, setNav3] = useState(null);

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    let sliderRef3 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        setNav3(sliderRef3);
    }, []);

    const sliderOneSetting = {
        asNavFor:nav2,
        ref:slider => (sliderRef1 = slider),
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        fade: true,
    }

    const sliderTwoSetting = {
        asNavFor:nav3,
        ref:slider => (sliderRef2 = slider),
        slidesToShow: 1,
        arrows: false,
        fade: true,
    }

    const sliderThreeSetting = {
        asNavFor:nav1,
        ref:slider => (sliderRef3 = slider),
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: <SliderNextArrow/>,
    }

    return (
        <>
            <div className="testimonial-slider-area">
                <Row className='justify-content-center gx-4 gx-sm-4 gx-md-4 gx-lg-4 gx-xl-3 gx-xxl-3'>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                    <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            }
                        }}>
                            <Slider className="single-img" {...sliderOneSetting}>
                                {testimonialData?.map((value) => {
                                    const { id, image, designation, link } = value;
                                    return (
                                        <div className="img-main" key={id}>
                                            <a data-fancybox="gallery" data-caption={designation} data-src={link} href={link}>
                                                <FaPlay />
                                            </a>
                                            <Image src={image} alt='slider-img' />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </Fancybox>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}  className="position-relative">

                        <Slider className="desc-slider" {...sliderTwoSetting}>
                            {testimonialData?.map((value)=> {
                                const {id,desc,designation,name} = value;
                                return (
                                    <div className="desc" key={id}>
                                        <Text as="h4">{name}</Text>
                                        <Text as="h6">{designation}</Text>
                                        <Text as="p">{desc}</Text>
                                    </div>
                                )
                            })}
                        </Slider>
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            }
                        }}>
                            <Slider className="multi-img" {...sliderThreeSetting}>
                                {testimonialData?.map((value) => {
                                    const { id, image, designation, link } = value;
                                    return (
                                        <div className="img-main" key={id}>
                                            <a data-fancybox="gallery" data-caption={designation} data-src={link} href={link}>
                                                <FaPlay />
                                            </a>
                                            <Image src={image} alt='slider-img' />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </Fancybox>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default TestimonialSlider