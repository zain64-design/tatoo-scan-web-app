import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import FeaturesCard from './FeaturesCard'
import { useQuery } from '@tanstack/react-query';
import { FEATURES_API } from '../../utils/constant';
import fetchData from '../../utils/hooks/fetchData';
import '../../assets/scss/components/features/secFeatures.scss'
import FeaturesHeading from './FeaturesHeading';
import { useSelector } from 'react-redux';

const useFetchData = (key, url) => {
  return useQuery({
    queryKey: key,
    queryFn: () => fetchData(url)
  });
};

const SecFeatures = () => {
  const featureData = useSelector(state => state.cmsContent).features;
  const {data:features,isLoading,isError,error} = useFetchData(['features'],FEATURES_API);

  if (isError) {
      return <Text as="h3" className='error-message'>Fetching Features: {error.message}</Text>
  }

  

  return (
    <>
    <section className='sec-features'>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <FeaturesHeading subHeading={featureData?.section_2_title} mainHeading={featureData?.section_2_subtitle}/>
                </Col>
            </Row>
        </Container>
        <FeaturesCard featuresData={featureData?.section_2_features} loading={isLoading}/>
    </section>
    </>
  )
}

export default SecFeatures