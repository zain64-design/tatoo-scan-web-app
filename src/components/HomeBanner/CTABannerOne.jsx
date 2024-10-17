import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import ImgBox from './ImgBox';
import ctaImgOne from '/images/home/cta-img-1.jfif';
import ctaImgTwo from '/images/home/cta-img-2.jfif';
import ctaImgThree from '/images/home/cta-img-3.png';
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/components/home/ctaBannerOne.scss'

const CTABannerOne = () => {
    return (
        <>
            <section className='sec-cta-one'>
                <Container fluid className='px-3 px-sm-3 px-md-0 px-lg-0 px-xl-0 px-xxl-0'>
                    <Row className='justify-content-between'>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                            <ImgBox src={ctaImgOne}/>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                            <div className="desc">
                                <Image src={ctaImgThree} className="icon"/>
                                <Text as="h6">Easy Tattoo Management</Text>
                                <Text as='p'>Our app is like your personal tattoo curator, but way cooler. It lets you store, organize, and manage your entire tattoo collection in one place. You can also add details, stories, and preferences to each tattoo, creating a personalized digital archive that's totally you.</Text>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                            <ImgBox src={ctaImgTwo}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CTABannerOne