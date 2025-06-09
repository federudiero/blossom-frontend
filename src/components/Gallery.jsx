import React, { useState, useEffect } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './Gallery.css';

const rawImages = [
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
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890842/blossom/IMG_5650_vq6fui.jpg", titulo: "DREAMSHIFT" }
];

const imagenesData = rawImages.map(img => ({
  ...img,
  url: img.url.replace('/upload/', '/upload/f_auto,q_auto/')
}));

export default function Gallery() {
  const [imagenes] = useState(imagenesData);
  const [indexBase, setIndexBase] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(false);

  const openModal = (idx) => {
    setCurrentIndex(idx);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));

  const preloadImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
    });
  };

  useEffect(() => {
    const timer = setInterval(async () => {
      const nextIndexes = [
        (indexBase + 3) % imagenes.length,
        (indexBase + 4) % imagenes.length,
        (indexBase + 5) % imagenes.length
      ];

      await Promise.all(nextIndexes.map(i => preloadImage(imagenes[i].url)));

      setFadeClass(false);
      setTimeout(() => {
        setFadeClass(true);
        setIndexBase((prev) => (prev + 3) % imagenes.length);
      }, 50);
    }, 10000);

    return () => clearInterval(timer);
  }, [indexBase, imagenes]);

  const getImg = (offset) => imagenes[(indexBase + offset) % imagenes.length];

  return (
    <section className="gallery-section">
      <div className="parent">
        <div className="div1" onClick={() => openModal((indexBase + 0) % imagenes.length)}>
          <img src={getImg(0).url} alt={getImg(0).titulo} className={`image-tile ${fadeClass ? 'fade-in' : ''}`} loading="lazy" />
        </div>
        <div className="div2" onClick={() => openModal((indexBase + 1) % imagenes.length)}>
          <img src={getImg(1).url} alt={getImg(1).titulo} className={`image-tile ${fadeClass ? 'fade-in' : ''}`} loading="lazy" />
        </div>
        <div className="div3" onClick={() => openModal((indexBase + 2) % imagenes.length)}>
          <img src={getImg(2).url} alt={getImg(2).titulo} className={`image-tile ${fadeClass ? 'fade-in' : ''}`} loading="lazy" />
        </div>

        <div className="blossom-top">BLOSSOM</div>
        <div className="blossom-bottom">BLOSSOM</div>
      </div>

      <Modal show={showModal} onHide={closeModal} centered size="xl" className="custom-modal">
        <Modal.Body className="text-center bg-dark position-relative">
          <Button variant="light" className="prev-btn" onClick={prevImage}>←</Button>
          <Image src={imagenes[currentIndex].url} fluid />
          <Button variant="light" className="next-btn" onClick={nextImage}>→</Button>
        </Modal.Body>
      </Modal>
    </section>
  );
}
