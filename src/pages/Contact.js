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
      <h4>Alternatively, you can call us on <a href="tel:01234567890">01234 567890</a></h4>
      <p>For all other enquiries, please email us at <a href="mailto:info@hjgoodwin.com">info@hjgoodwin.com</a></p>
      <strong>See our <a href="/privacy-policy">Privacy Policy</a> for information on how we handle your data.
      </strong>
    </Container>
  )
}

export default Contact