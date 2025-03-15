import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Footer.module.css'
import Container from 'react-bootstrap/Container';

const footText = (
  <>
    <Navbar.Text className={styles.FooterText}>
      <h6>Copyright © 2025 HJ Goodwin - All Rights Reserved</h6>
    </Navbar.Text>
  </>
)

const Footer = () => {
  return (
    <Navbar fixed="bottom" className={styles.Footer}>
      <Container>
        {footText}
        <NavLink to="https://danielpearce.co.uk/" className={styles.Credits} target="_blank">Website Developed by Dan Pearce
        </NavLink>
      </Container>
    </Navbar>
  )
}

export default Footer;