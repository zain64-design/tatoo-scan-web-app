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
          <Col data-aos="fade-up" xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
            <div className="desc">
              <Text as='h1'>Unlock the <Text as='span'>Story</Text> Behind <Text as='span'>Your Ink</Text> </Text>
              <Text as="p">With Tattooscan, your tattoos are more than just body art. Our revolutionary tattoo app allows you to scan tattoos and connect them with personalized multimedia content like videos, audio, and detailed information about your Tattoo storytelling. Whether it’s a cherished memory, a message from the artist, or a deeper meaning, Tattooscan brings your tattoos to life.</Text>
              <AppBtn/>
            </div>
          </Col>
          <Col data-aos="fade-down" xs={12} sm={9} md={8} lg={5} xl={5} xxl={5}>
          <ImageParallax/>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default SecHomeBanner