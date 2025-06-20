import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const imagenes = [
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890948/blossom/IMG_5507_hmope9.jpg", titulo: "VINTAGE SPIRIT" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890926/blossom/IMG_5532_zhnrwt.jpg", titulo: "SHADOWS OF STYLE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890836/blossom/IMG_5662_rz7zew.jpg", titulo: "HALO GRIT" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890887/blossom/IMG_5572_sakgex.jpg", titulo: "MIDNIGHT GAZE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890881/blossom/IMG_5581_msqkb3.jpg", titulo: "REBEL MOTION" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890867/blossom/IMG_5605_gjgwe7.jpg", titulo: "CONCRETE FLOW" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890862/blossom/IMG_5610_d1twjt.jpg", titulo: "NOIR YOUTH" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890860/blossom/IMG_5624_t8fsh6.jpg", titulo: "STATIC ELEGANCE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890854/blossom/IMG_5631_scd9ej.jpg", titulo: "SYNTH DREAMS" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890842/blossom/IMG_5649_bsohwl.jpg", titulo: "MONOCHROME HAZE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890837/blossom/IMG_5658_svoqzj.jpg", titulo: "INNER MUSE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890830/blossom/IMG_5674_rjvrfe.jpg", titulo: "ELECTRIC STILLNESS" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890827/blossom/IMG_5685_givfsz.jpg", titulo: "LUCID CHAOS" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890822/blossom/IMG_5704_dq2qg9.jpg", titulo: "WILD GROUND" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890822/blossom/IMG_5698_dffxnm.jpg", titulo: "RAW BALANCE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890818/blossom/IMG_5716_nkaglw.jpg", titulo: "PAUSED NIGHT" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890818/blossom/IMG_5712_e5jgee.jpg", titulo: "AFTERGLOW EDGE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890810/blossom/IMG_5755_bbaueo.jpg", titulo: "RITUAL SILENCE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890829/blossom/IMG_5676_tkxdcu.jpg", titulo: "NEON DUST" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890988/blossom/IMG_5482_wtdvgy.jpg", titulo: "STONE WHISPER" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890896/blossom/IMG_5558_cvrzpy.jpg", titulo: "REVERSE GLARE" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890889/blossom/IMG_5564_iz2xqa.jpg", titulo: "MOTION STAND" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890873/blossom/IMG_5596_ggkmqi.jpg", titulo: "SUBWAY AURA" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890848/blossom/IMG_5639_mgynsm.jpg", titulo: "URBAN WHIM" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890842/blossom/IMG_5650_vq6fui.jpg", titulo: "DREAMSHIFT" },
];

export default function CarruselMarca() {
  return (
    <section id="carrusel-marca" className="py-5 bg-dark text-white">
      <Container>
        <Carousel fade controls={false} indicators interval={3000}>
          {imagenes.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.url}
                alt={item.titulo}
                style={{ maxHeight: '85vh', objectFit: 'cover', borderRadius: '10px' }}
              />
              <Carousel.Caption>
                <h3 className="display-6 fw-bold" style={{ textShadow: '2px 2px 8px black' }}>
                  {item.titulo}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
