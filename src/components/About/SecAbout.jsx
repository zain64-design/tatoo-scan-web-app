import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutDesc from './AboutDesc';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import useFetch from '../../utils/hooks/useFetch'
import { ABOUT_DESC_API } from '../../utils/constant'
import '../../assets/scss/components/about/secAbout.scss';

const SecAbout = () => {

    const { data, isloading, error } = useFetch(ABOUT_DESC_API);
    useBackgroundImage('[data-bg-image]',data);

    if (isloading) return <div>loading...</div>

    if (error) return <div>fetching about details: {error}</div>



    return (
        <>
            {data.map((value) => {
                const { id,image } = value;
                return (
                    <section className='sec-about-inner' data-bg-image={image} key={id}>
                        <Container className='bg-elem'>
                            <Row>
                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                    <div className="desc-area">
                                        <AboutDesc {...value} key={id} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                )
            })}
        </>
    )
}

export default SecAbout