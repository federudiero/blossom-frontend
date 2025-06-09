import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './Gallery.css';

const imagenes = [
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890948/blossom/IMG_5507_hmope9.jpg", titulo: "VINTAGE SPIRIT" },
  { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890926/blossom/IMG_5532_zhnrwt.jpg", titulo: "SHADOWS OF STYLE" },
   { url: "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890836/blossom/IMG_5662_rz7zew.jpg", titulo: "HALO GRIT" }
];

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (idx) => {
    setCurrentIndex(idx);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));

  return (
    <section className="gallery-section">
      <div className="abstract-grid">
        {imagenes.map((img, idx) => {
          let sizeClass = '';
          if (idx % 7 === 0) sizeClass = 'span-2x2';
          else if (idx % 5 === 0) sizeClass = 'span-2x1';
          else if (idx % 3 === 0) sizeClass = 'span-1x2';

          return (
            <div
              key={idx}
              className={`grid-item ${sizeClass}`}
              onClick={() => openModal(idx)}
            >
              <img src={img.url} alt={`Imagen ${idx}`} />
              <div className="overlay-title">
                <h3>{img.titulo}</h3>
              </div>
            </div>
          );
        })}
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
