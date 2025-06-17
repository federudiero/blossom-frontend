import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="fw-bold">Blossom</h5>
            <p className="mb-0">© {new Date().getFullYear()} Todos los derechos reservados</p>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              {/* Reemplazá estos <img> por íconos reales o FontAwesome */}
              <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <img src="/icons/whatsapp.svg" alt="WhatsApp" width={24} />
              </a>
              <a href="https://facebook.com/tuPagina" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.svg" alt="Facebook" width={24} />
              </a>
              <a href="https://instagram.com/tuPerfil" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" width={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
