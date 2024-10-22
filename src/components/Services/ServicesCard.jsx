import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFetch from '../../utils/hooks/useFetch';
import { SERVICES_API } from '../../utils/constant';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import Text from '../UI/Text';
import Image from '../UI/Image';
import CircleLoader from '../Loader/CircleLoader';
import FetchingError from '../Error/FetchingError';

const ServicesCard = () => {

    const { data, isloading, error } = useFetch(SERVICES_API);

    useBackgroundImage('[data-bg-image]',data);

    if (isloading) return <CircleLoader/>

    if (error) return <FetchingError text='services' error={error}/>

    return (
        <>
            {data.map(((value) => {
                const {id,title,thumbnail,icon,desc} =  value;
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

export default ServicesCard