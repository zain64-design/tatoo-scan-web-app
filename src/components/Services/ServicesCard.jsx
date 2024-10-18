import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import Text from '../UI/Text'

const ServicesCard = () => {
    useBackgroundImage('[data-bg-image]');
  return (
    <>
                <div className='service-card' data-bg-image="/images/home/cta-bg1.jpg">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <div className="desc">
                                <Text as="h4">Lorem Ipsum is simply dummy text </Text>
                                <Text as="p">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    </>
  )
}

export default ServicesCard