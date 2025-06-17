import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Blossom</h5>
            <p className="mb-0">Moda con identidad. Diseñado en Córdoba.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0 text-center">
            <ul className="list-unstyled mb-0">
              <li><a href="#about" className="text-light text-decoration-none">Nosotros</a></li>
              <li><a href="#gallery" className="text-light text-decoration-none">Galería</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contacto</a></li>
              <li><a href="#shop" className="text-light text-decoration-none">Tienda</a></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Carrito</Link></li>
            </ul>
          </Col>

          <Col md={4} className="text-md-end text-center">
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://facebook.com/tuPagina" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com/tuPerfil" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaInstagram size={24} />
              </a>
            </div>
            <p className="mt-2 mb-0">&copy; {new Date().getFullYear()} Blossom</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

