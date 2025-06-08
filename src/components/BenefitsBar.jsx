import React from 'react';
import './BenefitsBar.css';
import { Truck, CreditCard, ShieldCheck, Undo2 } from 'lucide-react';

export default function BenefitsBar() {
  return (
    <div className="benefits-bar">
      <div className="benefit-item">
        <Truck size={32} />
        <h4>ENVIOS EN 24HS</h4>
        <p>A CABA y GBA</p>
      </div>
      <div className="benefit-item">
        <CreditCard size={32} />
        <h4>COMPRA CON TARJETA</h4>
        <p>Compra hoy, pagá en 30 días</p>
      </div>
      <div className="benefit-item">
        <ShieldCheck size={32} />
        <h4>PICK UP GRATIS</h4>
        <p>Retirá por nuestro showroom sin cargos extra</p>
      </div>
      <div className="benefit-item">
        <Undo2 size={32} />
        <h4>DEVOLUCIONES</h4>
        <p>Comunicate vía WhatsApp al <a href="https://wa.me/5493514597991" target="_blank" rel="noopener noreferrer">+54 9 351 459-7991</a></p>
      </div>
    </div>
  );
}
