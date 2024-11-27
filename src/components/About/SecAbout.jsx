import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutDesc from './AboutDesc';
import useBackgroundImage from '../../utils/hooks/useBackgroundImage';
import { useQuery } from '@tanstack/react-query';
import Text from '../UI/Text'
import fetchData from '../../utils/hooks/fetchData';
// import CircleLoader from '../Loader/CircleLoader';
import { ABOUT_DESC_API } from '../../utils/constant'
import '../../assets/scss/components/about/secAbout.scss';
import { useSelector } from 'react-redux';

const useFetchData = (key, url) => {
    return useQuery({
      queryKey: key,
      queryFn: () => fetchData(url),
    });
  };

const SecAbout = () => {
    const {data:about,isLoading,isError,error} = useFetchData(['aboutDesc'],ABOUT_DESC_API);
    const aboutData = useSelector(state => state.cmsContent);
    useBackgroundImage('[data-bg-image]',aboutData);
    if (isError) {
        return <Text as="h3" className='error-message'>Fetching about details: {error.message}</Text>
    } 

    return (
        <>
            <section className='sec-about-inner' data-bg-image={aboutData?.about?.section_2_bg_image}>
                <Container className='bg-elem'>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                            <div className="desc-area">
                                <AboutDesc desc={aboutData?.about?.section_2_topics} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* {about?.map((value, index) => {
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
            })} */}
        </>
    )
}

export default SecAbout