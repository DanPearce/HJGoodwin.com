import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Gallery.module.css'
import img1 from '../assets/images/gallery/IMG_7587.jpg'
import img2 from '../assets/images/gallery/IMG_8231.jpg'
import img3 from '../assets/images/gallery/a-after.jpg'
import img4 from '../assets/images/gallery/b-after.jpg'
import img5 from '../assets/images/gallery/base-after.jpg'
import img6 from '../assets/images/gallery/coping-after.jpg'
import img7 from '../assets/images/gallery/k-after.jpg'
import img8 from '../assets/images/gallery/j-after.jpg'
import img9 from '../assets/images/gallery/t-after.jpg'
import img10 from '../assets/images/gallery/w-after.jpg'

const Gallery = () => {
  return (
    <Container className={styles.Container}>
      <Row>
        <Col lg={4}>
          <a href='/src/assets/images/gallery/IMG_7587.jpg' target='_blank'><img src={img1}className={styles.Image}/></a>
          <a href='/src/assets/images/gallery/b-after.jpg' target='_blank'><img src={img4}className={styles.Image}/></a>
        </Col>
        <Col lg={4}>
          <a href='/src/assets/images/gallery/IMG_8231.jpg' target='_blank'><img src={img2} className={styles.Image}/></a>
          <a href='/src/assets/images/gallery/base-after.jpg' target='_blank'><img src={img5} className={styles.Image}/></a>
        </Col>
        <Col lg={4}>
          <a href='/src/assets/images/gallery/a-after.jpg' target='_blank'><img src={img3} className={styles.Image}/></a>
        </Col>
    </Row>
    <Row>
       <Col lg={4}>
         <a href='/src/assets/images/gallery/coping-after.jpg' target='_blank'><img src={img6}className={styles.Image}/></a>
       </Col>
        <Col lg={4}>
          <a href='/assets/images/gallery/k-after.jpg' target='_blank'><img src={img7} className={styles.Image}/></a>
          <a href='/src/assets/images/gallery/j-after.jpg' target='_blank'><img src={img8} className={styles.Image}/></a>
        </Col>
        <Col lg={4}>
          <a href='/src/assets/images/gallery/t-after.jpg' target='_blank'><img src={img9} className={styles.Image}/></a>
          <a href='/src/assets/images/gallery/w-after.jpg' target='_blank'><img src={img10} className={styles.Image}/></a>
        </Col>
    </Row>
    </Container>
  )
}

export default Gallery