import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutDesc from './AboutDesc';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import '../../assets/scss/components/about/secAbout.scss';

const SecAbout = () => {

    useBackgroundImage('.sec-about-inner');

  return (
    <>
    <section className='sec-about-inner' data-bg-image='/images/about/about-img.png'>
        <Container className='bg-elem'>
            <Row>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    <div className="desc-area">
                        <AboutDesc/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default SecAbout