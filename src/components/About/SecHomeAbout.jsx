import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../UI/Image';
import aboutImage from '/images/home/about-img2.png';
import Text from '../UI/Text';
import '../../assets/scss/components/home/homeAbout.scss'
import HomeAboutBox from './HomeAboutBox';

const SecHomeAbout = () => {
  return (
    <>
      <section className="sec-about">
        <Container className='bg-elem'>
          <Row className='justify-content-center align-items-end'>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
              <div className="img-box">
                <Image src={aboutImage} />
              </div>
            </Col >
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
              <div className="desc">
                <Text as="h2">What Makes Us Ink-redible</Text>
                <Row>
                  <HomeAboutBox/>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SecHomeAbout