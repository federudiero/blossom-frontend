import React, { useEffect, useState } from 'react';
import { Container, Button, Carousel, Spinner } from 'react-bootstrap';
import './Hero.css';

const slides = [
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890887/blossom/IMG_5572_sakgex.jpg",
    frase: "Ropa de diseño y a tu medida."
  },
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890881/blossom/IMG_5581_msqkb3.jpg",
    frase: "Sutil. Cruda. Verdadera. Como vos."
  },
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890867/blossom/IMG_5605_gjgwe7.jpg",
    frase: "Diseño que respira lo que sos."
  },
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890862/blossom/IMG_5610_d1twjt.jpg",
    frase: "No seguimos tendencias. Creamos instintos."
  },
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/f_auto,q_auto/v1748890860/blossom/IMG_5624_t8fsh6.jpg",
    frase: "Vestí tu silencio con intención."
  }
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
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.url})` }}>
              <div className="overlay-content">
                <Container>
                  <h1 className="display-3 fw-bold">BLOSSOM</h1>
                  <p className="lead fst-italic">{slide.frase}</p>
                  <Button
                    variant="light"
                    href="#shop"
                    className="btn-lg px-4 py-2"
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
