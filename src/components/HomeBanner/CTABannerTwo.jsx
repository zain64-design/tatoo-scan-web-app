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
                                <Text as="h4">Transforming Tattoo Stories into Living Memories</Text>
                                <Text as="p">With Tattooscan, tattoos evolve from static ink to interactive experiences. Seamlessly link each tattoo to personal multimedia, bringing out the unique stories, memories, and meanings behind every design. Share your journey with others and connect on a deeper level within the tattoo community, where each piece of art can inspire, engage, and unite.</Text>
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