import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/about.jpg"
              alt="Sobre Blossom"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4" style={{ fontWeight: '600', fontSize: '2.2rem' }}>
              Sobre Nosotros
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              En <strong>Blossom</strong> nos dedicamos al diseño integral de marcas. Combinamos creatividad y estrategia para potenciar la identidad de nuestros clientes, ofreciendo soluciones visuales de alto impacto que conectan con sus audiencias.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
