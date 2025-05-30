import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Services() {
  const items = [
    { title: 'Branding', text: 'Construcción de identidad visual para tu negocio.' },
    { title: 'Diseño Gráfico', text: 'Diseñamos piezas que comunican con impacto.' },
    { title: 'Packaging', text: 'Presentación atractiva para tus productos.' }
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Servicios</h2>
        <Row>
          {items.map((item, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
