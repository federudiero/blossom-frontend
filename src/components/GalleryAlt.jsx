import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GalleryAlt.css';

const destacadas = [
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890854/blossom/IMG_5631_scd9ej.jpg",
    titulo: "SYNTH DREAMS",
    descripcion: "Exploración del futuro con textura suave y vibrante."
  },
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890842/blossom/IMG_5650_vq6fui.jpg",
    titulo: "DREAMSHIFT",
    descripcion: "Siluetas modernas con alma urbana."
  },
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890830/blossom/IMG_5674_rjvrfe.jpg",
    titulo: "ELECTRIC STILLNESS",
    descripcion: "Minimalismo con intensidad y calma."
  },
  {
    url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890822/blossom/IMG_5698_dffxnm.jpg",
    titulo: "RAW BALANCE",
    descripcion: "La armonía en su forma más pura."
  }
];

export default function GalleryAlt() {
  return (
    <section className="gallery-alt-section py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5" style={{ fontFamily: 'DM Serif Display, serif' }}>
          Colección Destacada
        </h2>
        <Row xs={1} sm={2} md={2} lg={2} className="g-4">
          {destacadas.map((item, idx) => (
            <Col key={idx}>
              <div className="gallery-item position-relative">
                <img src={item.url} alt={item.titulo} className="img-fluid rounded shadow" />
                <div className="overlay">
                  <div className="overlay-text text-white text-center">
                    <h4>{item.titulo}</h4>
                    <p>{item.descripcion}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
