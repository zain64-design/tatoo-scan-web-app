import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Text from '../UI/Text';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import '../../assets/scss/components/home/ctaBannerTwo.scss'
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowRight } from "react-icons/hi";
import useAOS from '../../utils/hooks/useAOS';

const CTABannerTwo = () => {
    useBackgroundImage('[data-bg-image]');
    useAOS();
    return (
        <>
            <section data-aos="fade-in" className='sec-cta-two' data-bg-image="/images/home/cta-bg1.jpg">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <div className="desc">
                                <Text as="h4">Revolutionizing the Interactive Tattoo Experience</Text>
                                <Text as="p">Tattooscan transforms the traditional concept of tattoos from static images into dynamic, interactive experiences. By seamlessly integrating your tattoos with personalized tattoo content, Tattooscan allows you to capture and share tattoo stories behind your ink like never before. Whether it’s a cherished memory, a meaningful message, or a unique piece of art, Tattooscan connects you with people in tattoo community in a deeper and more engaging way.</Text>
                                <NavLink to='/contact' className='btn btn-contact'>contact us 
                                <HiOutlineArrowRight />
                                </NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CTABannerTwo