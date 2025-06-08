import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import './Hero.css';

const slides = [
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890887/blossom/IMG_5572_sakgex.jpg", titulo: "MIDNIGHT GAZE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890881/blossom/IMG_5581_msqkb3.jpg", titulo: "REBEL MOTION" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890867/blossom/IMG_5605_gjgwe7.jpg", titulo: "CONCRETE FLOW" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890862/blossom/IMG_5610_d1twjt.jpg", titulo: "NOIR YOUTH" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890860/blossom/IMG_5624_t8fsh6.jpg", titulo: "STATIC ELEGANCE" }
];

export default function Hero() {
  return (
    <div className="hero-carousel-wrapper" id="hero">
      <Carousel fade controls={false} indicators={false} interval={4000} pause={false}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="overlay d-flex justify-content-center align-items-center text-white text-center">
                <Container>
                  <h1 className="display-4 fw-bold">Diseñá tu identidad con Blossom</h1>
                  <p className="lead">Branding, diseño gráfico y mucho más.</p>
                  <Button variant="light" href="#shop">Tienda</Button>
                </Container>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
