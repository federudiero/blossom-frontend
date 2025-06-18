import React, { useState } from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function BlossomNavbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await fetch(`https://blossom-backend.vercel.app/api/productos?busqueda=${query}`);
      const data = await res.json();
      navigate('/resultados', { state: { resultados: data } });
    } catch (error) {
      console.error('Error en búsqueda:', error);
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="bg-white shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
          Blossom
        </Navbar.Brand>

        {/* Buscador visible siempre en desktop */}
        <Form className="d-none d-lg-flex ms-auto me-3" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Buscar productos"
            className="me-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="dark" type="submit">Buscar</Button>
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto ms-lg-0" style={{ gap: '1rem' }}>
            <Nav.Link as={Link} to="/#about">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/#gallery">Galería</Nav.Link>
            <Nav.Link as={Link} to="/#contact">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/#shop">Tienda</Nav.Link>
            <Nav.Link as={Link} to="/cart">🛒 Carrito</Nav.Link>
            <Nav.Link as={Link} to="/admin">🔐 Admin</Nav.Link>

            {/* Buscador para mobile dentro del Collapse */}
            <Form className="d-lg-none mt-3 d-flex" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Buscar productos"
                className="me-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="dark" type="submit">Buscar</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
