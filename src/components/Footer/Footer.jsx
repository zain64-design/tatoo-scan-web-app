import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from '../UI/Image';
import logo from '/images/logo-header.png';
import '../../assets/scss/layout/footer.scss'
import Text from '../UI/Text'
import FooterLinks from './FooterLinks';
import { useSelector } from 'react-redux';

const Footer = () => {
  const configData = useSelector(state => state.cmsContent)?.config;

  return (
    <footer>
      <div className="footer-main">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={3}>
              <div className="footer-about">
                <Image src={configData?.logo_image} className='thumb' alt='footer logo' />
                <Text as='p'>{configData?.footer_desc}</Text>
              </div>
            </Col>
            <Col xs={12} sm={8} md={8} lg={8} xl={8} xxl={8} className='mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>
              <Row className="justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-end justify-content-xxl-end">
                <FooterLinks/>
                <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className='ms-xl-4 ms-xxl-4 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>
                  <div className="support-area">
                    <Text as="h6">Contact Us</Text>
                    <ul>
                      <li><a href={`mailto:${configData?.email_address}`} className="icon icon-mail">{configData?.email_address}</a></li>
                      {/* <li><a href="tel:+123445667889" className="icon icon-phone">+1 234 456 678 89</a></li> */}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-btm">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xxl={12}>
              <div className="left-area">
                <Text as="p">
                    {configData?.footer_copyright}
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
