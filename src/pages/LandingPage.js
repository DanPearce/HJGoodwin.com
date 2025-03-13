import React from 'react'
import styles from '../styles/LandingPage.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LandingPage = () => {
  return (
    <Container className={styles.Container}>
      <Row>
        <Col className={styles.LandingContainer} lg={6}>
        
        </Col>
        <Col className={styles.LandingContainer} lg={6}>
        
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage