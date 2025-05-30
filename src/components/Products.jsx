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

  const cargarProductos = async () => {
    try {
      const res = await axios.get('/api/productos');
      setProductos(res.data);
    } catch (err) {
      console.error('Error al cargar productos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const categoriasUnicas = [
    'todos',
    ...new Set(productos.map((p) => p.categoria?.toLowerCase() || 'sin categoría')),
  ];

  const productosFiltrados = productos.filter((prod) => {
    const coincideTexto =
      prod.nombre.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      prod.descripcion.toLowerCase().includes(filtroTexto.toLowerCase());

    const coincideCategoria =
      filtroCategoria === 'todos' ||
      (prod.categoria && prod.categoria.toLowerCase() === filtroCategoria);

    return coincideTexto && coincideCategoria;
  });

  return (
    <section id="shop" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Tienda</h2>

        {/* Filtros */}
        <Row className="mb-4">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Buscar por nombre o descripción..."
              value={filtroTexto}
              onChange={(e) => setFiltroTexto(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
            >
              {categoriasUnicas.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row>
            {productosFiltrados.map((prod) => (
              <Col md={4} sm={6} xs={12} key={prod.id} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={prod.imagenUrl}
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{prod.nombre}</Card.Title>
                    <Card.Text>{prod.descripcion}</Card.Text>
                    <Card.Text>
                      <strong>${prod.precio}</strong>
                    </Card.Text>
                    {prod.promo && (
                      <span className="badge bg-danger mb-2">Promoción</span>
                    )}
                    <Button variant="primary" onClick={() => addToCart(prod)}>
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
