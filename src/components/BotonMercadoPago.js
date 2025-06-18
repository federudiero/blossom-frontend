export default function BotonMercadoPago({ cart, nombre, email }) {
  const handleClick = async () => {
    try {
      const res = await fetch('https://blossom-backend.vercel.app/api/crear-preferencia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, nombre, email })
      });

      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point; // Redirección al checkout
      } else {
        alert('Error al generar preferencia de pago');
      }
    } catch (err) {
      console.error(err);
      alert('Error al conectar con el backend');
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Pagar con Mercado Pago
    </button>
  );
}