import React from 'react'
import styles from '../styles/LandingPage.module.css'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LandingCarousel from '../components/LandingCarousel.jsx';

const LandingPage = () => {
  return (
    <Container className={styles.Container}>
      <Row>
        <Col className={styles.LandingContainer} lg={12}>
        <LandingCarousel />
        </Col>
        <Col className={styles.LandingContainer} lg={6}>
          <div className={styles.LandingBorder}>
            <h3> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> </h3>
            <h4 className={`text-center`}>Investigation and solutions for damp walls and flooring in home.</h4>

            <p>
              Harry was very knowledgeable around different options and costs, so worked within our budget. He was approachable, respectful, flexible and easy to work with.
              Previously, we'd had a number of contractors who did not complete work to our expectations. Harry was quick to identify problems and look at a variety of solutions. If you're looking for a reliable contractor for damp proofing work, I would highly recommend him.<br/>&#8203;</p>
            <NavLink to="https://www.mybuilder.com/profile/harry_james_goodwin" className={styles.Credits} target="_blank"> Review left on 17 Dec 2024, Marcus Darvill, Bradford On Avon
            </NavLink>
          </div>
        </Col>
        <Col className={styles.LandingContainer} lg={6}>
          <div className={styles.LandingBorder}>
                        <h3> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> </h3>
            <h4 className={`text-center`}>Repoint terraced Victorian side of house</h4>

            <p>
              Harry did an amazing and professional job. From the start I felt reassured he knew what he talking about, particularly around needing to use lime based mortar to allow the building to breath etc, and applying storm guard to provide a longer term protective finish. None of the other builders we got quotes from mentioned either of these. He is a dedicated worker, very friendly and was happy to discuss any minor issues/tweaks we requested along the way. Thanks again Harry.
            </p>
            <NavLink to="https://www.mybuilder.com/profile/harry_james_goodwin" className={styles.Credits} target="_blank"> Review left on 3 Jan 2025, Daniel & Sara, Bath
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage