import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../UI/Image';
import aboutImage from '/images/home/about-img2.png';
import Text from '../UI/Text';
import HomeAboutBox from './HomeAboutBox';
import { HOME_ABOUT_API } from '../../utils/constant';
import { useQuery } from '@tanstack/react-query';
import fetchData from '../../utils/hooks/fetchData';
import CircleLoader from '../Loader/CircleLoader';
import '../../assets/scss/components/home/homeAbout.scss';
import useAOS from '../../utils/hooks/useAOS';
import { useSelector } from 'react-redux';

const useFetchData = (key, url) => {
  return useQuery({
    queryKey: key,
    queryFn: () => fetchData(url),
  });
};

const SecHomeAbout = () => {
  const homeData = useSelector(state => state.cmsContent)?.home;
  const {data:homeAbout,isLoading,isError,error} = useFetchData(['homeAbout'],HOME_ABOUT_API);

  // useAOS(homeData);
  useAOS({
    offset: 100,
  })

  if(isLoading) return <CircleLoader/>

  if (isError) {
      return <Text as="h3" className='error-message'>Fetching home About: {error.message}</Text>
  }

  return (
    <>
      <section className="sec-about">
        <Container className='bg-elem'>
          <Row className='justify-content-center align-items-end'>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
              <div data-aos="fade-right" className="img-box">
                <Image src={homeData?.section_2_leftside_image} />
              </div>
            </Col >
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={5}>
              <div data-aos="fade-left" className="desc">
                <Text as="h2">{homeData?.section_2_title}</Text>
                <Row>
                  <HomeAboutBox aboutData={homeData?.section_2_feature_list}/>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SecHomeAbout