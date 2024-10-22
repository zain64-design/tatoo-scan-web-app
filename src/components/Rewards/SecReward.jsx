import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import useFetch from '../../utils/hooks/useFetch';
import { REWARDS_API } from '../../utils/constant';
import RewardSlider from './RewardSlider';
import RewardHead from './RewardHead';
import '../../assets/scss/components/reward/secReward.scss'

const SecReward = () => {
    const { data, isloading, error } = useFetch(REWARDS_API);

    if (isloading) return <div>loading...</div>;

    if (error) return <div>Fetching rewards: {error}</div>

    return (
        <>
            <section className='sec-reward'>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={10} lg={12} xl={12} xxl={12}>
                            <div className="cta-reward">
                                <RewardHead heading="Awards & Achievements"/>
                                <RewardSlider data={data}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SecReward