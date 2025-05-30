import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function BotonMercadoPago({ nombre, email }) {
  const pagar = async () => {
    try {
      const response = await axios.post('/api/crear-preferencia', { nombre, email });
      const preferenceId = response.data.id;

      // Redirigir al checkout
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference_id=${preferenceId}`;
    } catch (error) {
      console.error('❌ Error al generar preferencia:', error);
      alert('No se pudo iniciar el pago.');
    }
  };

  return (
    <Button variant="success" onClick={pagar}>
      Pagar con Mercado Pago
    </Button>
  );
}
