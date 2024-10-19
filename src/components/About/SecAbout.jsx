import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutDesc from './AboutDesc'

const SecAbout = () => {
  return (
    <>
    <section className='sec-about'>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={10} lg={8} xl={8} xxl={8}>
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