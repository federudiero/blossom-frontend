import React from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import BotonMercadoPago from './BotonMercadoPago';

export default function Carrito() {
  const { cart, removeFromCart } = useCart();

  // Total acumulado considerando precio x cantidad
  const total = cart.reduce((acc, item) => {
    const precio = parseFloat(item.precio?.toString().replace(/[^0-9.]/g, '')) || 0;
    const cantidad = Number(item.cantidad) || 1;
    return acc + precio * cantidad;
  }, 0);

  return (
    <section id="carrito" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4" style={{ fontFamily: 'DM Serif Display, serif' }}>
          🛒 Tu Carrito
        </h2>

        {cart.length === 0 ? (
          <Alert variant="info" className="text-center">
            Tu carrito está vacío. Explorá la tienda y llenalo de estilo ✨
          </Alert>
        ) : (
          <>
            <Table bordered hover responsive className="align-middle shadow-sm rounded">
              <thead className="table-light">
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => {
                  const precio = parseFloat(item.precio?.toString().replace(/[^0-9.]/g, '')) || 0;
                  const cantidad = Number(item.cantidad) || 1;
                  const subtotal = precio * cantidad;

                  return (
                    <tr key={idx}>
                      <td style={{ fontWeight: '500' }}>{item.nombre}</td>
                      <td>{item.categoria}</td>
                      <td>${precio.toFixed(2)}</td>
                      <td>{cantidad}</td>
                      <td>${subtotal.toFixed(2)}</td>
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
                  );
                })}
              </tbody>
            </Table>

            <h4 className="text-end mt-4 me-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Total: <strong>${total.toFixed(2)}</strong>
            </h4>

            <div className="text-end mt-3">
              <BotonMercadoPago nombre="Compra Blossom" email="cliente@test.com" />
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
