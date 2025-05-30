import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-section text-white d-flex align-items-center" id="hero">
      <Container className="text-center">
        <h1 className="display-4 fw-bold">Diseñá tu identidad con Blossom</h1>
        <p className="lead">Branding, diseño gráfico y mucho más.</p>
        <Button variant="dark" href="#contact">Contáctanos</Button>
      </Container>
    </div>
  );
}
