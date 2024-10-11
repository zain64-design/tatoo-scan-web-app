import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import appBtn from '/images/home/app-btn.png';
import playBtn from '/images/home/play-btn.png';
import Text from '../UI/Text';
import Image from '../UI/Image'
import '../../assets/scss/components/home/homeBanner.scss'
import ImageParallax from './ImageParallax';

const HomeBanner = () => {

  return (
    <>
    <section className="sec-home-banner">
      <Container className="bg-elem">
        <Row className="justify-content-center justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-between justify-content-xl-between justify-content-xxl-between">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
            <div className="desc">
              <Text as='h1'>Scan <Text as='span'>Connect</Text> And Celebrate <Text as='span'>Your Ink</Text> </Text>
              <Text as="p">App that brings you closer to the art, the stories, and the people that make tattoos unforgettable. 
              Upload, interact, and explore art like never before.</Text>
              <div className="btn-flex">
                <NavLink to="/" className="links">
                  <Image src={appBtn} className="img-fluid thumb" alt="App Button" />
                </NavLink>
                <NavLink to="/" className="links">
                  <Image src={playBtn} className="img-fluid thumb" alt="Play Button" />
                </NavLink>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={9} md={8} lg={5} xl={5} xxl={5}>
          <ImageParallax/>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default HomeBanner