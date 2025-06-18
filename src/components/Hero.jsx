import React, { useEffect, useState } from 'react';
import { Container, Button, Carousel, Spinner } from 'react-bootstrap';
import './Hero.css';

const slides = [
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890887/blossom/IMG_5572_sakgex.jpg", titulo: "MIDNIGHT GAZE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890881/blossom/IMG_5581_msqkb3.jpg", titulo: "REBEL MOTION" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890867/blossom/IMG_5605_gjgwe7.jpg", titulo: "CONCRETE FLOW" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890862/blossom/IMG_5610_d1twjt.jpg", titulo: "NOIR YOUTH" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890860/blossom/IMG_5624_t8fsh6.jpg", titulo: "STATIC ELEGANCE" }
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === slides.length) {
          setLoaded(true);
        }
      };
    });
  }, []);

  if (!loaded) {
    return (
      <div className="hero-carousel-wrapper d-flex justify-content-center align-items-center bg-dark text-white" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

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
                  <h1 className="display-4 fw-bold">BLOSSOM</h1>
                  <p className="lead">Ropa de diseño y a tu medida</p>
                 <Button
  variant="light"
  href="#shop"
  className="btn-lg px-4 py-2"
  style={{
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '1.1rem',
    borderRadius: '50px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
  }}
>
  ✨ Ver Catálogo
</Button>

                </Container>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
