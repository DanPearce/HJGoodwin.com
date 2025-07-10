import React from 'react'
import logo from '../assets/HJGoodwin-logogreen.png';
import { NavLink } from 'react-router-dom';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'

const navText = (
  <>
    <Navbar.Text className={styles.NavBarText}>
      <h1>HJ Goodwin</h1>
    </Navbar.Text>
  </>
)

const NavBar = () => {
  const { expanded, setExpanded, ref} = useClickOutsideToggle();
  return (
    <Navbar expand="lg" fixed="top" className={styles.NavBar} expanded={expanded}>
      <Container>
        <NavLink to='/' className={styles.LogoA}>
          <Navbar.Brand><img src={logo} className={styles.Logo} alt="logo" /></Navbar.Brand>
        </NavLink>
        <NavLink to='/'>{navText}</NavLink>
        <Navbar.Toggle className={styles.Toggle} aria-controls="basic-navbar-nav" ref={ref} onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <NavLink to="/aboutus" className={styles.NavLink}><i className="fa-solid fa-trowel-bricks"></i> About Us</NavLink>
            <NavLink to="/projects" className={styles.NavLink}><i className="fa-solid fa-building-columns"></i> Projects</NavLink>
            <NavLink to="/Gallery" className={styles.NavLink}><i className="fa-solid fa-images"></i> Gallery</NavLink>
            <NavLink to="/contact" className={styles.NavLink}>
              <Container className={styles.ContactButton}>
                <i className="fa-solid fa-envelope"></i> Contact Us
              </Container>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar;