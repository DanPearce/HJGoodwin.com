import React from 'react'
import styles from '../styles/LandingPage.module.css'
import Carousel from 'react-bootstrap/Carousel'
import base from '../assets/images/carousel/base.jpeg'
import loft from '../assets/images/carousel/loft.jpeg'
import wall from '../assets/images/carousel/wall.jpeg'

const LandingCarousel = () => {
  return(
    <Carousel className={`carousel-dark ${styles.Carousel}`}>
        <Carousel.Item>
        <img src={base} className={styles.Image} alt="avatar" />
        <Carousel.Caption className={styles.CarouselCaption}>
          <h3>Shed Bases</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={loft} className={styles.Image} alt="avatar" />
        <Carousel.Caption className={styles.CarouselCaption}>
          <h3>Loft Boarding</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={wall} className={styles.Image} alt="avatar" />
        <Carousel.Caption className={styles.CarouselCaption}>
          <h3>Retaining Walls</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default LandingCarousel;