import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer({ onAdminClick }) {
  return (
    <footer className="bg-dark text-light py-4 mt-5 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <h5 className="fw-bold">Blossom</h5>
            <p className="mb-0">Moda con identidad. Diseñado en Córdoba.</p>
          </Col>

          <Col md={4} className="text-center">
            <ul className="list-unstyled mb-0">
              <li><a href="#about" className="text-light text-decoration-none">Nosotros</a></li>
              <li><a href="#gallery" className="text-light text-decoration-none">Galería</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contacto</a></li>
              <li><a href="#shop" className="text-light text-decoration-none">Tienda</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Carrito</a></li>
            </ul>
          </Col>

          <Col md={4} className="text-md-end text-center">
            <p className="mt-2 mb-0">&copy; {new Date().getFullYear()} Blossom</p>
          </Col>
        </Row>

        {/* Ícono secreto solo si se pasa onAdminClick */}
        {typeof onAdminClick === 'function' && (
          <div
            onClick={onAdminClick}
            title="Acceso administrador"
            style={{
              position: 'absolute',
              bottom: 10,
              right: 20,
              cursor: 'pointer',
              zIndex: 9999,
              fontSize: 20,
              opacity: 0.6
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = 1)}
            onMouseOut={e => (e.currentTarget.style.opacity = 0.6)}
          >
            🔒
          </div>
        )}
      </Container>
    </footer>
  );
}
