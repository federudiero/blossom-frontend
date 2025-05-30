import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-3 bg-dark text-light">
      <small>&copy; {new Date().getFullYear()} Blossom - Todos los derechos reservados</small>
    </footer>
  );
}
