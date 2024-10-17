import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Text from '../UI/Text'
import CommentForm from './CommentForm';

const SecBlogDetails = ({blogData}) => {
    const { id, title,authName } = blogData;
    
    return (
        <>
            <section className='sec-blog-details'>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {/* <Text as="h4">{title}</Text>
                        <Text as="h6">{authName}</Text> */}

                            {/* {content.map((data) => {
                                const {heading,para} = data;
                                console.log(data);
                                
                                return (<div className="desc" key={id}>
                                    {heading && <Text as="h6">{heading}</Text>}
                                    {para && <Text as="p">{para}</Text>}
                                </div>)
                                return null;
                            })} */}
                            {}
                            <div className="comment-area">
                                <CommentForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecBlogDetails