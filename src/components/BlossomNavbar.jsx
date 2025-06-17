import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function BlossomNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-white shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#hero" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
          Blossom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ gap: '1rem' }}>
            <Nav.Link href="#about">Nosotros</Nav.Link>
            
            <Nav.Link href="#gallery">Galería</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#shop">Tienda</Nav.Link>
            <Nav.Link as={Link} to="/cart">🛒 Carrito</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
