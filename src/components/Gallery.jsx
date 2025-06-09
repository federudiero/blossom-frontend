import React, { useState, useEffect } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './Gallery.css';

const rawImages = [
  // ... tus imágenes (sin cambios)
];

// Optimizar URLs
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
    let timer;

    const preloadNextSet = async () => {
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
      }, 100); // levemente retrasado para permitir el fade-out si lo aplicás también
    };

    timer = setInterval(preloadNextSet, 10000);

    return () => clearInterval(timer);
  }, [indexBase, imagenes]);

  const getImg = (offset) => imagenes[(indexBase + offset) % imagenes.length];

  return (
    <section className="gallery-section">
      <div className="parent">
        <div className="div1" onClick={() => openModal((indexBase + 0) % imagenes.length)}>
          <img
            src={getImg(0).url}
            alt={getImg(0).titulo}
            className={`image-tile ${fadeClass ? 'fade-in' : ''}`}
            loading="lazy"
          />
        </div>
        <div className="div2" onClick={() => openModal((indexBase + 1) % imagenes.length)}>
          <img
            src={getImg(1).url}
            alt={getImg(1).titulo}
            className={`image-tile ${fadeClass ? 'fade-in' : ''}`}
            loading="lazy"
          />
        </div>
        <div className="div3" onClick={() => openModal((indexBase + 2) % imagenes.length)}>
          <img
            src={getImg(2).url}
            alt={getImg(2).titulo}
            className={`image-tile ${fadeClass ? 'fade-in' : ''}`}
            loading="lazy"
          />
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
