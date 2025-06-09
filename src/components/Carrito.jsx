import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import BotonMercadoPago from './BotonMercadoPago';

export default function Carrito() {
  const { cart, removeFromCart } = useCart();

  // Asegura que el precio sea numérico (por si viene como string)
  const total = cart.reduce((acc, item) => acc + (parseFloat(item.precio) || 0), 0);

  return (
    <section id="carrito" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">Carrito de Compras</h2>

        {cart.length === 0 ? (
          <p className="text-center text-muted">Tu carrito está vacío.</p>
        ) : (
          <>
            <Table bordered hover className="align-middle shadow-sm">
              <thead className="table-light">
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Quitar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.nombre}</td>
                    <td>{item.categoria}</td>
                    <td>${parseFloat(item.precio) || 0}</td>
                    <td>
                      <Button
                        variant="outline-danger"
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

            <h4 className="text-end me-3">Total: ${total.toFixed(2)}</h4>

            <div className="text-end mt-3">
              <BotonMercadoPago nombre="Compra Blossom" email="cliente@test.com" />
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
