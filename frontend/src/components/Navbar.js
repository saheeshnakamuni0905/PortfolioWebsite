import React from 'react';
import { useState } from 'react';
import { NavDropdown, Container, Navbar, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../design/NavbarDesign.css'
import Contact from './Contact';


const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="container-custom">
          <Navbar.Brand href="#home">Saheeshna Kamuni</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" className="me-auto">
              <Nav.Link href="#home" style={{marginRight: '20px'}}>Home</Nav.Link>
              <Nav.Link href="#about" style={{marginRight: '20px'}}>About Me</Nav.Link>
              <Nav.Link href="#projects" style={{marginRight: '20px'}}>Projects</Nav.Link>
              <Nav.Link href="#resume" style={{marginRight: '20px'}}>Resume</Nav.Link>
              <Nav.Link href="#contact" style={{marginRight: '20px'}} onClick={handleShow}>Contact Me</Nav.Link>
              <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/saheeshna-kamuni-30a09b62/" target="_blank" rel="noopener noreferrer" >LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/saheeshnakamuni0905" target="_blank" rel="noopener noreferrer" >GitHub</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Me</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Contact handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Layout;
