import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Text from '../UI/Text'
import '../../assets/scss/components/services/secServices.scss'
import ServicesCard from './ServicesCard'

const SecServices = () => {
  return (
    <>
    <section className='sec-services'>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="head-area">
                    <Text as="h6">Our Tattoo App</Text>
                    <Text as="h3">Services & Features</Text>
                </div>
                </Col>
            </Row>
        </Container>
        <ServicesCard/>
    </section>
    </>
  )
}

export default SecServices