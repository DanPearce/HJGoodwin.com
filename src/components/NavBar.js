import React from 'react'
import header from '../assets/smallerhjg.png';
import { NavLink } from 'react-router-dom';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  const { expanded, setExpanded, ref} = useClickOutsideToggle();
  return (
    <Navbar expand="lg" fixed="top" className={styles.NavBar} expanded={expanded}>
      <Container>
        <NavLink to='/'>
          <Navbar.Brand><img src={header} className={styles.Logo} alt="logo" /></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle className={styles.Toggle} aria-controls="basic-navbar-nav" ref={ref} onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <NavLink to="/aboutus" className={styles.NavLink}><i class="fa-solid fa-trowel-bricks"></i> About Us</NavLink>
            <NavLink to="/projects" className={styles.NavLink}><i class="fa-solid fa-building-columns"></i> Projects</NavLink>
            <NavLink to="/contact" className={styles.NavLink}><i class="fa-solid fa-images"></i> Gallery</NavLink>
            <NavLink to="/contact" className={styles.NavLink}><i class="fa-solid fa-envelope"></i> Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar;