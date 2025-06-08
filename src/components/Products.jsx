import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Form } from 'react-bootstrap';
import axios from 'axios';
import { useCart } from '../context/CartContext';

export default function Products() {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://blossom-backend-one.vercel.app/api/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error al cargar productos:', err))
      .finally(() => setLoading(false));
  }, []);

  const categoriasUnicas = [
    'todos',
    ...new Set(productos.map(p => p.categoria?.toLowerCase() || 'sin categoría')),
  ];

  const productosFiltrados = productos.filter(prod =>
    (prod.nombre.toLowerCase().includes(filtroTexto.toLowerCase()) ||
     prod.descripcion.toLowerCase().includes(filtroTexto.toLowerCase())) &&
    (filtroCategoria === 'todos' || prod.categoria?.toLowerCase() === filtroCategoria)
  );

  return (
    <section id="shop" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Tienda</h2>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Buscar productos..."
              value={filtroTexto}
              onChange={e => setFiltroTexto(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Select value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)}>
              {categoriasUnicas.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {loading ? (
          <div className="text-center"><Spinner animation="border" /></div>
        ) : (
          <Row>
            {productosFiltrados.map(prod => (
              <Col md={4} sm={6} xs={12} key={prod.id} className="mb-4">
                <Card className="shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={prod.imagenUrl}
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{prod.nombre}</Card.Title>
                    <Card.Text className="text-muted">{prod.descripcion}</Card.Text>
                    <Card.Text className="fw-bold">${prod.precio}</Card.Text>
                    {prod.promo && <span className="badge bg-danger mb-2">Promo</span>}
                    <Button variant="dark" onClick={() => addToCart(prod)}>
                      Agregar al carrito
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}
