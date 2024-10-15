import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Text from '../UI/Text';
import VideoBox from './VideoBox';
import '../../assets/scss/components/home/homeGallery.scss';
const SecHomeGallery = () => {
    return (
        <>
            <section className='sec-gallery'>
                <Container>
                    <div className="head-area">
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                <Text as="h4">Experience the magic of memory and artistry combined</Text>
                                <Text as="h6">Your skin, your stories, your way!"</Text>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                <Text as="p">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Container>
                            <VideoBox/>
                        </Container>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecHomeGallery