import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CommentForm from './CommentForm';
import BlogDesc from './BlogDesc';
import '../../assets/scss/components/blog/secBlogDetails.scss'
import Text from '../UI/Text';
import Comments from './Comments';

const SecBlogDetails = (blogData) => {
    return (
        <>
            <section className='sec-blog-details'>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="desc-area">
                                <BlogDesc blogData={blogData}/>
                            </div>
                            <div className="comment-form">
                                <Text as="h4">Comments</Text>
                                <CommentForm />
                            </div>
                            <div className="comments-area">
                                <Comments/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecBlogDetails