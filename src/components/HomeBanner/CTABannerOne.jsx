import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import ImgBox from './ImgBox';
import ctaImgOne from '/images/home/cta-img-1.jfif';
import ctaImgTwo from '/images/home/cta-img-2.jfif';
import ctaImgThree from '/images/home/cta-img-3.png';
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/components/home/ctaBannerOne.scss';
import useAOS from '../../utils/hooks/useAOS';
import { useSelector } from 'react-redux';

const CTABannerOne = () => {
    const homeData = useSelector(state => state.cmsContent)?.home;
    useAOS();
    return (
        <>
            <section className='sec-cta-one'>
                <Container fluid className='px-3 px-sm-3 px-md-0 px-lg-0 px-xl-0 px-xxl-0'>
                    <Row className='justify-content-between'>
                        <Col data-aos="zoom-out-up" xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                            <ImgBox src={homeData?.section_3_image1}/>
                        </Col>
                        <Col data-aos="zoom-out-down" xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
                            <div className="desc">
                                <Image src={homeData?.section_3_image} className="icon"/>
                                <Text as="h6">{homeData?.section_3_title}</Text>
                                <Text as='p'>{homeData?.section_3_desc}</Text>
                            </div>
                        </Col>
                        <Col data-aos="zoom-out-up" xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                            <ImgBox src={homeData?.section_3_image2}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CTABannerOne