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
import { useSelector } from 'react-redux';

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecHomeGallery = () => {
    const homeData = useSelector(state => state.cmsContent)?.home;
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
                                <Text as="h4">{homeData?.section_4_title}</Text>
                                <Text as="h6">{homeData?.section_4_title1}</Text>
                            </Col>
                            <Col data-aos="fade-left" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <Text as="p">{homeData?.section_4_desc}</Text>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Container>
                            <VideoBox galleryData={homeData?.section_4_video_gallery}/>
                        </Container>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecHomeGallery