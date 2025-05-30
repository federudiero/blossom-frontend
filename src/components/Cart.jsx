import React from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="info">Tu carrito está vacío.</Alert>
        <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Carrito de Compras</h2>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                  disabled={item.cantidad === 1}
                >−</Button>{' '}
                {item.cantidad}{' '}
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                >+</Button>
              </td>
              <td>${(item.precio * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className="text-end">Total: ${total.toFixed(2)}</h4>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="outline-dark" onClick={clearCart}>Vaciar carrito</Button>
        <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
      </div>
    </Container>
  );
}
