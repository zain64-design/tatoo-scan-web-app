import { Col, Container, Row } from 'react-bootstrap';
import Text from '../UI/Text'
import '../../assets/scss/components/about/secAboutTeam.scss'
import TeamSlider from './TeamSlider';

const SecAboutTeam = () => {
    return (
        <>
            <section className='sec-our-team'>
                <Container>
                    <Row className='row align-items-center justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="head-area">
                                <Text as="h3">Our Team</Text>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <TeamSlider/>
                </Container>
            </section>
        </>
    )
}

export default SecAboutTeam