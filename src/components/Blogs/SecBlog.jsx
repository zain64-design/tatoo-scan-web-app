import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from '../UI/Image';
import Text from '../UI/Text';
import {Link} from 'react-router-dom';
import '../../assets/scss/components/blog/secBlog.scss';
import blogImg from '/images/blogs/blog1.png';
import author from '/images/blogs/author.png';
import icon from '/images/blogs/icon.png';
import { HiArrowUpRight } from "react-icons/hi2";

const SecBlog = () => {
  return (
    <>
    <section className='sec-blog'>
        <Container>
            <Row>
                <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
                    <Card className='blog-card'>
                    <Image src={blogImg} className="blog-img" alt='blog'/>
                    <div className="desc">
                        <Text as="h6">Best tattoo designs studios in United States</Text>
                        <div className="author-area">
                            <Image src={author} className="auth-ico" alt="author"/>
                            <Text as='span'>By James Mark</Text>
                        </div>
                        <div className="btm-area">
                            <Text as='span'>
                                <Image src={icon} className="icon"/> 60
                            </Text>

                            <Link to="/blogs" className="btn read-btn">read more <HiArrowUpRight /></Link>
                        </div>
                    </div>
                </Card>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default SecBlog