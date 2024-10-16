import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../UI/Image';
import aboutImage from '/images/home/about-img2.png';
import Text from '../UI/Text';
import homeAbout from '../../utils/API/homeAbout.json'
import '../../assets/scss/components/home/homeAbout.scss'

const SecHomeAbout = () => {
  return (
    <>
      <section className="sec-about">
        <Container className='bg-elem'>
          <Row className='justify-content-center align-items-end'>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
              <div className="img-box">
                <Image src={aboutImage} />
              </div>
            </Col >
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
              <div className="desc">
                <Text as="h2">What Makes Us Ink-redible</Text>
                <Row>
                  {homeAbout.map((data) => {
                    const { id, image, head, desc } = data;
                    return (<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} key={id}>
                      <div className="box-main">
                        <div className="ct-head">
                          <Image src={image} className="icon" />
                          <Text as="h6">{head}</Text>
                        </div>
                        <Text as="p">{desc}</Text>
                      </div>
                    </Col>)
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SecHomeAbout