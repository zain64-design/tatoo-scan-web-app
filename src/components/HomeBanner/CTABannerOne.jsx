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

const CTABannerOne = () => {
    useAOS();
    return (
        <>
            <section className='sec-cta-one'>
                <Container fluid className='px-3 px-sm-3 px-md-0 px-lg-0 px-xl-0 px-xxl-0'>
                    <Row className='justify-content-between'>
                        <Col data-aos="zoom-out-up" xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                            <ImgBox src={ctaImgOne}/>
                        </Col>
                        <Col data-aos="zoom-out-down" xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
                            <div className="desc">
                                <Image src={ctaImgThree} className="icon"/>
                                <Text as="h6">Your Tattoo Archive, Reimagined</Text>
                                <Text as='p'>Keep your tattoo journey at your fingertips. Tattooscan lets you save, organize, and personalize each tattoo with stories, details, and artist information in one streamlined space. Turn your collection into a meaningful digital gallery, capturing every memory and moment that makes each tattoo unique to you.</Text>
                            </div>
                        </Col>
                        <Col data-aos="zoom-out-up" xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                            <ImgBox src={ctaImgTwo}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CTABannerOne