import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../assets/scss/components/blog/secBlog.scss';
import BlogCard from './BlogCard';
import Paginations from './Paginations';

const SecBlog = () => {
    return (
        <>
            <section className='sec-blog'>
                <Container>
                    <Row>
                        <BlogCard/>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Paginations/>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecBlog