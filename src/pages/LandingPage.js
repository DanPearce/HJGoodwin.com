import React from 'react'
import styles from '../styles/LandingPage.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import leveling from '../assets/images/leveling.jpg'

const LandingPage = () => {
  return (
    <Container className={styles.Container}>
      <Row className='align-items-center'>
        <Col className={styles.LandingContainer} lg={12}>
        <Carousel className={styles.Carousel}>
          <Carousel.Item>
            <img src={leveling} className={styles.Cont1} alt="avatar" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={leveling} className={styles.Cont1} alt="avatar" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={leveling} className={styles.Cont1} alt="avatar" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        </Col>
        <Col className={styles.LandingContainer} lg={6}>
          <div className="p-3 border border-dark">Custom column padding</div>
        </Col>
        <Col className={styles.LandingContainer} lg={6}>
          <div className="p-3 border border-dark">Custom column padding</div>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage