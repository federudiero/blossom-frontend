import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const ProtectedAdminPanel = () => {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setAuth(true);
    } else {
      setError('❌ Contraseña incorrecta');
    }
  };

  if (auth) return <AdminPanel />;

  return (
    <Container className="py-5" style={{ maxWidth: '400px' }}>
      <h3 className="mb-3">Acceso Administrativo</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="dark">Entrar</Button>
      </Form>
    </Container>
  );
};

export default ProtectedAdminPanel;
