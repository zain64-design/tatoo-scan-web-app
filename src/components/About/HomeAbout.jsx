import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Image from '../UI/Image';
import aboutImage from '/images/home/about-img.png';

const HomeAbout = () => {
  return (
    <>
    <section class="sec-about">
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
                    <Image src={aboutImage} className="about-img"/>
                </Col >
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default HomeAbout