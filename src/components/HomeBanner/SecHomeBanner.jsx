import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Text from '../UI/Text';
import '../../assets/scss/components/home/homeBanner.scss'
import ImageParallax from './ImageParallax';
import AppBtn from './AppBtn';
import useAOS from '../../utils/hooks/useAOS';

const SecHomeBanner = () => {
  useAOS();
  return (
    <>
    <section className="sec-home-banner">
      <Container className="bg-elem">
        <Row className="justify-content-center justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-between justify-content-xl-between justify-content-xxl-between">
          <Col data-aos="fade-right" xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
            <div className="desc">
              <Text as='h1'>Revolutionizing the  <Text as='span'>Tattoo Experience</Text></Text>
              <Text as="p">Tattooscan transforms the traditional concept of tattoos from static images into dynamic, interactive experiences. By seamlessly integrating your tattoos with personalized multimedia content, Tattooscan allows you to capture and relive the stories behind your ink like never before. Whether it’s a cherished memory, a meaningful message, or a unique piece of art, Tattooscan connects you to your tattoos in a deeper, more engaging way.</Text>
              <AppBtn/>
            </div>
          </Col>
          <Col data-aos="fade-left" xs={12} sm={9} md={8} lg={5} xl={5} xxl={5}>
          <ImageParallax/>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default SecHomeBanner