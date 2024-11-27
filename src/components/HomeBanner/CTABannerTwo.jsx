import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Text from '../UI/Text';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import '../../assets/scss/components/home/ctaBannerTwo.scss'
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowRight } from "react-icons/hi";
import useAOS from '../../utils/hooks/useAOS';
import { useSelector } from 'react-redux';

const CTABannerTwo = () => {
    const homeData = useSelector(state => state.cmsContent)?.home;
    useBackgroundImage('[data-bg-image]', homeData);
    useAOS();
    return (
        <>
            <section data-aos="fade-in" className='sec-cta-two' data-bg-image={homeData?.section_5_bg_image}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <div className="desc">
                                <Text as="h4">{homeData?.section_5_title}</Text>
                                <Text as="p">{homeData?.section_5_desc}</Text>
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