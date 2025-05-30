import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

export default function Checkout() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handlePagar = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        'https://blossom-three.vercel.app/api/crear-preferencia'
, // 👈 poné tu dominio real
        { nombre, email }
      );
      const { id } = response.data;
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference_id=${id}`;
    } catch (err) {
      console.error(err);
      setError('Hubo un error al iniciar el pago.');
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Finalizar compra</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handlePagar}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Pagar con Mercado Pago
        </Button>
      </Form>
    </Container>
  );
}
