import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Sobre Nosotros</h2>
        <Row>
          <Col md={6}>
            <p>
              En Blossom nos dedicamos al diseño integral de marcas. Combinamos creatividad y estrategia para potenciar la identidad de nuestros clientes.
            </p>
          </Col>
          <Col md={6}>
            <img src="/src/assets/about.jpg" alt="Nosotros" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
