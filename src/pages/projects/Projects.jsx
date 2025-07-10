import React from 'react'
import styles from '../../styles/Projects.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img1 from '../../assets/images/before/a-before.jpg'
import img2 from '../../assets/images/after/a-after.jpg'
import img3 from '../../assets/images/before/b-before.jpg'
import img4 from '../../assets/images/after/b-after.jpg'
import img5 from '../../assets/images/before/c-before.jpg'
import img6 from '../../assets/images/after/c-after.jpeg'
import img7 from '../../assets/images/before/d-before.jpeg'
import img8 from '../../assets/images/after/d-after.jpeg'
import img9 from '../../assets/images/after/e-after.jpeg'



const Projects = () => {
  return (
    <Container className={styles.Container}>
      <Container className={styles.Content}>
        <Row className={styles.ProjectRow}>
        <Col lg={6} sm={12}>
          <Col>
            <h6>Before / After</h6>
            <a href='/src/assets/images/before/a-before.jpg' target='_blank'><img src={img1} alt="Repointing & Masonry Protection Before" className={styles.Before}/></a>
            <a href='/src/assets/images/after/a-after.jpg' target='_blank'><img src={img2} alt="Repointing & Masonry Protection After" className={styles.After}/></a>
          </Col>
        </Col>
        <Col lg={6} sm={12}>
          <h3>Repointing & Masonry Protection</h3>
          <p>This project involved carefully raking out the deteriorated mortar joints and repointing them using a traditional lime mortar mix. Lime mortar was chosen for its breathability and compatibility with older masonry. </p>
          <p>Once the repointing was completed and fully cured, we applied a Stormdry masonry protection cream to provide long-lasting resistance against penetrating damp and adverse weather conditions, helping to preserve the integrity and appearance of the brickwork.</p>
          </Col>
        </Row>
        <Row className={styles.ProjectRow}>
        <Col lg={6} sm={6}>
          <h3>Shed Base Construction</h3>
          <p>This gallery showcases the construction of two robust shed bases. Each area was machine-excavated to the required depth, followed by the installation of a compacted Type 1 sub-base to ensure stability and proper drainage.</p>
          <p>Timber shuttering was then installed to form clean, defined edges before the concrete was poured and levelled to create a strong, durable foundation ready for shed installation.</p>
          </Col>
        <Col lg={6} sm={6}>
          <h6>Before</h6>
          <a href='/src/ssets/images/before/b-before.jpg' target='_blank'><img src={img3} alt="Shed Base Before" className={styles.BeforeLand}/></a>
          <h6>After</h6>
          <a href='/src/assets/images/after/b-after.jpg' target='_blank'><img src={img4} alt="Shed Base After" className={styles.AfterLand}/></a>
        </Col>
        </Row>
        <Row className={styles.ProjectRow}>
          <Col lg={6} sm={6}>
            <h6>Before</h6>
            <a href='/src/assets/images/before/c-before.jpeg' target='_blank'><img src={img5} alt="Brick Work Before" className={styles.BeforeLand}/></a>
            <h6>After</h6>
            <a href='/src/assets/images/after/c-after.jpg' target='_blank'><img src={img6} alt="Brick Work After" className={styles.AfterLand}/></a>
          </Col>
          <Col lg={6} sm={6}>
            <h3>Blockwork Retaining Walls</h3>
            <p>These images feature two gravity retaining walls constructed using solid blockwork to provide long-term structural support. Each wall incorporates essential drainage solutions to manage water runoff and reduce hydrostatic pressure. </p>
            <p>A damp-proof membrane (DPM) paint was applied to the rear face of the walls to prevent water penetration and protect the integrity of the structure over time.</p>
          </Col>
        </Row>
        <Row className={styles.ProjectRow}>
        <Col lg={6} sm={6}>
          <h3>Footings</h3>
          <p>This series shows the complete preparation of a concrete footing for a retaining wall. The trench was excavated to specification using a digger, ensuring a solid and level base.</p>
          <p>Reinforcement was then added using a steel rebar mesh to strengthen the foundation and improve load-bearing capacity. The final stage shows the footing fully poured with concrete, ready to support the retaining wall structure above.</p>
          </Col>
        <Col lg={6} sm={6}>
          <h6>Before</h6>
          <a href='/src/ssets/images/before/d-before.jpeg' target='_blank'><img src={img7} alt="Footing Before" className={styles.BeforeLand}/></a>
          <h6>After</h6>
          <a href='/src/assets/images/after/d-after.jpeg' target='_blank'><img src={img8} alt="Footings After" className={styles.AfterLand}/></a>
        </Col>
        </Row>
        <Row className={styles.ProjectRow}>
          <Col lg={6} sm={6}>
            <a href='/src/assets/images/before/e-after.jpeg' target='_blank'><img src={img9} alt="Loft Boarding" className={styles.BeforeLand}/></a>
          </Col>
          <Col lg={6} sm={6}>
            <h3>Loft Boarding Installation</h3>
            <p>This project involved the installation of raised loft boarding using Loft Legs to elevate the boards above the existing insulation. This method maintains proper airflow and prevents compression of the insulation, ensuring continued energy efficiency. </p>
            <p>Moisture-resistant tongue and groove boards were used to provide a durable, secure, and seamless storage platform within the loft space.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects