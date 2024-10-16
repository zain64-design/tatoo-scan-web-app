import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import Text from '../UI/Text';
import '../../assets/scss/components/InnerBanner/innerBannerOne.scss'

const InnerBannerOne = ({ title, backgroundImage, paragraph }) => {

    useBackgroundImage('.sec-inner-banner');

    return (
        <>
            <section className="sec-inner-banner" data-bg-image={backgroundImage}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
                            <div className="desc">
                                <Text as="h6">{title}</Text>
                                {paragraph && <Text as="p">{paragraph}</Text>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default InnerBannerOne