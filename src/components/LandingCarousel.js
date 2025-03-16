import React from 'react'
import styles from '../styles/LandingPage.module.css'
import Carousel from 'react-bootstrap/Carousel'
import leveling from '../assets/images/stock/leveling.jpg'
import planning from '../assets/images/stock/planning.jpg'
import pavement from '../assets/images/stock/pavement-bricks.jpg'

const LandingCarousel = () => {
  return(
    <Carousel className={`carousel-dark ${styles.Carousel}`}>
        <Carousel.Item>
        <img src={leveling} className={styles.Image} alt="avatar" />
        <Carousel.Caption className={styles.CarouselCaption}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pavement} className={styles.Image} alt="avatar" />
        <Carousel.Caption className={styles.CarouselCaption}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={planning} className={styles.Image} alt="avatar" />
        <Carousel.Caption className={styles.CarouselCaption}>
          <h3>Comprehensive Planning</h3>
          <p>Comprehensive Planning for your project, from start to end, included in your quote.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default LandingCarousel;