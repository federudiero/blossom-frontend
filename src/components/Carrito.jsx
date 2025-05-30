import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import BotonMercadoPago from './BotonMercadoPago';

export default function Carrito() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <section id="carrito" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Carrito de compras</h2>

        {cart.length === 0 ? (
          <p className="text-center">Tu carrito está vacío.</p>
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.nombre}</td>
                    <td>{item.categoria}</td>
                    <td>${item.precio}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Quitar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h4 className="text-end me-3">Total: ${total}</h4>

            {/* Simulación de email y nombre del cliente */}
            <div className="text-end">
              <BotonMercadoPago nombre="Compra Blossom" email="cliente@test.com" />
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
