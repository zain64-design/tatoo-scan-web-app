import React from 'react';
import Text from '../UI/Text';
import AppBtn from './AppBtn';
import { Container, Row, Col } from 'react-bootstrap';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import '../../assets/scss/components/home/ctaBannerThree.scss';
import useAOS from '../../utils/hooks/useAOS';
import { useSelector } from 'react-redux';

const CTABannerThree = () => {
    const homeData = useSelector(state => state.cmsContent)?.home;
    useBackgroundImage('[data-bg-image]', homeData);
    useAOS();
    return (
        <>
            <section className='sec-cta-three'>
                <Container>
                    <Row>
                        <Col data-aos="fade-up" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="cta-area" data-bg-image={homeData?.section_7_bg_image}>
                                <div className="ct-bg"></div>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <div className="desc">
                                            <Text as="h4">{homeData?.section_7_title}</Text>
                                            <Text as="p">{homeData?.section_7_desc}</Text>
                                            <AppBtn />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CTABannerThree