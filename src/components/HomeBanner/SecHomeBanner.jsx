import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Text from '../UI/Text';
import '../../assets/scss/components/home/homeBanner.scss'
import ImageParallax from './ImageParallax';
import AppBtn from './AppBtn';
import useAOS from '../../utils/hooks/useAOS';
import { useSelector } from 'react-redux';

const SecHomeBanner = () => {
  const homeData = useSelector(state => state.cmsContent)?.home;
  useAOS();
  return (
    <>
    <section className="sec-home-banner">
      <Container className="bg-elem">
        <Row className="justify-content-center justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-between justify-content-xl-between justify-content-xxl-between">
          <Col data-aos="fade-right" xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
            <div className="desc">
              <Text as='h1'>{homeData?.section_1_title}</Text>
              <Text as="p">{homeData?.section_1_desc}</Text>
              <AppBtn/>
            </div>
          </Col>
          <Col data-aos="fade-left" xs={12} sm={9} md={8} lg={5} xl={5} xxl={5}>
          <ImageParallax 
            backOrnament={homeData?.section_1_back_ornament_image}
            phone1={homeData?.section_1_phone1_image}
            phone2={homeData?.section_1_phone2_image}
          />
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default SecHomeBanner