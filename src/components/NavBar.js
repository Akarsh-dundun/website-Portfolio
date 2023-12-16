
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo-color.png';
import Linkedin from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import Instagram from '../assets/img/nav-icon3.svg';
import Github from '../assets/img/nav-icon4.svg';
import git from '../assets/img/github.svg'
import gmail from '../assets/img/gmail-svgrepo-com.svg';

export const NavBar = () => {
    const {activeLink, setActiveLink} = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt='LOGO' className="rounded-full w-50 h-50" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}>About</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' }>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Works</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/akarsh-gupta-889425213/"><img src={Linkedin} alt="" /></a>
                    <a href="https://github.com/Akarsh-dundun"><img src={git} alt="" /></a>
                    <a href="#"><img src={Instagram} alt="" /></a>
                </div>
                <button href='contact' className="vvd" onClick={() => console.log('connect')}>
                    <span>
                        Let's Connect
                    </span>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}