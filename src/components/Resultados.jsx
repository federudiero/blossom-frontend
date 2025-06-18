// 2. Resultados.jsx (nueva ruta)
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Resultados() {
  const { state } = useLocation();
  const productos = state?.resultados || [];

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Resultados de Búsqueda</h2>
      {productos.length === 0 ? (
        <p className="text-center">No se encontraron productos.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {productos.map((item) => (
            <Col key={item.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body>
                  <Card.Title>{item.nombre}</Card.Title>
                  <Card.Text>{item.descripcion}</Card.Text>
                  <Card.Text><strong>${item.precio}</strong></Card.Text>
                  <Button variant="outline-dark" as={Link} to="/#shop">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}