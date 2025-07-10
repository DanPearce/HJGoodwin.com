import React from 'react'
import ContactForm from '../components/ContactForm'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <Container className={styles.Container}>
      <h2>Contact Us</h2>
      <ContactForm />
      <br></br>
      <strong>See our <a href="/privacy-policy">Privacy Policy</a> for information on how we handle your data.
      </strong>
    </Container>
  )
}

export default Contact