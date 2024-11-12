import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import Text from '../UI/Text';
import Image from '../UI/Image';

const FeaturesCard = ({ featuresData }) => {

    useBackgroundImage('[data-bg-image]', featuresData);

    return (
        <>
            {featuresData?.map(((value) => {
                const { id, title, thumbnail, icon, desc } = value;
                return (
                    <div className='service-card' data-bg-image={thumbnail} key={id}>
                        <Container>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={5} xxl={5}>
                                    <div className="desc">
                                        <Image className="icons" src={icon} />
                                        <Text as="h4">{title}</Text>
                                        <Text as="p">{desc}</Text>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )
            }))}
        </>
    )
}

export default FeaturesCard