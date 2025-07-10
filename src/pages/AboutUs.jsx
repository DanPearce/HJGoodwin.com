import React from 'react'
import styles from '../styles/AboutUs.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/HJGoodwin-main-green.jpg'

const AboutUs = () => {
  return (
    <Container className={styles.Container}>
      <Container className={styles.Content}>
        <Row>
        <Col lg={4} sm={12} className={styles.SkillsContainer}>
          <h2>About Us</h2>
            <img src={logo} className={styles.Logo} alt="Logo" />
            <Row className={styles.Skills}>
              <Col lg={12} sm={12} className={styles.Skills}>
                <h3>Servies Provided</h3>
                  <ul>
                    <li>✔ Bricklaying </li>
                    <li>✔ Carpentry </li>
                    <li>✔ Groundworks </li>
                    <li>✔ Damp Proofing </li>
                    <li>✔ Landscaping </li>
                    <li>✔ Fencing </li>
                    <li>✔ General Building </li>
                  </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={8} sm={12} className={styles.AboutUs}>
            <Container>
              <h3>With over 10 years of experience in the construction industry</h3>
              <p>I have built a solid reputation for delivering high-quality workmanship across a range of building services. My expertise spans multiple trades, allowing me to provide a comprehensive approach to construction projects, whether small repairs or large-scale builds.</p>
              <p>I believe that great construction work goes beyond just bricks and mortar—it’s about creating safe, lasting, and aesthetically pleasing spaces for my clients. My approach is built on clear communication, transparency, and a commitment to exceeding expectations. By working closely with customers, I ensure every project is tailored to their needs, completed on time, and within budget. With a growing client base and an expanding range of services, I am dedicated to continuing my professional development and staying up to date with industry best practices.</p>
            </Container>
            <Container className='mt-4'>
            <h3 className="text-3xl font-bold mb-4">My Expertise</h3>
              <p>
                With years of experience in the industry, I have developed strong skills in bricklaying, carpentry, groundworks, and damp proofing. My expertise in bricklaying ranges from structural construction to decorative finishes, ensuring both durability and precision. In carpentry, I handle everything from framing to intricate finishing details, delivering high-quality woodwork for every project.
              </p>
              <p>
                My knowledge of groundworks allows me to establish strong foundations, including excavation and drainage solutions that ensure long-term stability. Additionally, I specialize in damp proofing, offering effective solutions to protect properties from moisture-related damage.
              </p>
              <p>
                Through hands-on experience and attention to detail, I ensure every project meets the highest standards. Whether it's a new build, renovation, or property maintenance, I take pride in delivering work that is functional, reliable, and built to last.
              </p>
            </Container>
            <Container className='mt-4'>
              <h3 className="text-2xl font-bold mb-4">Other Professional Experience</h3>
                <p>
                  In addition to my expertise in bricklaying, carpentry, groundworks, and damp proofing, I have extensive experience in landscaping, fencing, and general building work. My landscaping skills allow me to create functional and aesthetically pleasing outdoor spaces, from garden transformations to structural groundwork. With fencing, I ensure durable and secure installations that enhance both privacy and property value.
                </p>
                <p>
                  My background in general building covers a wide range of construction tasks, including structural modifications, renovations, and property maintenance. Whether it's enhancing outdoor spaces, reinforcing security, or completing large-scale building projects, I bring the same level of dedication, reliability, and craftsmanship to every job.
                </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default AboutUs