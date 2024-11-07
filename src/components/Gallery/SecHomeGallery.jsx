import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Text from '../UI/Text';
import VideoBox from './VideoBox';
import { HOME_VIDEO_GALLERY_API } from '../../utils/constant';
import { useQuery } from '@tanstack/react-query';
import fetchData from '../../utils/hooks/fetchData';
import CircleLoader from '../Loader/CircleLoader';
import '../../assets/scss/components/home/homeGallery.scss';
import useAOS from '../../utils/hooks/useAOS';

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecHomeGallery = () => {

    const {data:gallery,isLoading,isError,error} = useFetchData(['gallery'],HOME_VIDEO_GALLERY_API);

    useAOS();

    if(isLoading) return <CircleLoader/>

    if (isError) {
        return <Text as="h3" className='error-message'>Fetching gallery: {error.message}</Text>
    }

    return (
        <>
            <section className='sec-gallery'>
                <Container>
                    <div className="head-area">
                        <Row>
                            <Col data-aos="fade-right" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <Text as="h4">Experience the magic of memory and artistry combined</Text>
                                <Text as="h6">Your skin, your stories, your way!"</Text>
                            </Col>
                            <Col data-aos="fade-left" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <Text as="p">Join a vibrant community of tattoo enthusiasts, artists, and studios. Share your tattoo stories, discover new artists, and stay updated on tattoo events and trends.</Text>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Container>
                            <VideoBox galleryData={gallery}/>
                        </Container>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecHomeGallery