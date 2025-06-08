import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './Gallery.css';

const imagenes = [
  // (tu array de imágenes intacto)
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
        {imagenes.map((url, idx) => {
          const isLastRow = idx >= imagenes.length - 4;
          return (
            <div
              key={idx}
              className={`grid-item span-${(idx % 5) + 1} ${isLastRow ? 'rounded-bottom' : ''}`}
              onClick={() => openModal(idx)}
            >
              <img src={url} alt={`Imagen ${idx}`} />
            </div>
          );
        })}
      </div>

      <Modal show={showModal} onHide={closeModal} centered size="xl" className="custom-modal">
        <Modal.Body className="text-center bg-dark position-relative">
          <Button variant="light" className="prev-btn" onClick={prevImage}>←</Button>
          <Image src={imagenes[currentIndex]} fluid />
          <Button variant="light" className="next-btn" onClick={nextImage}>→</Button>
        </Modal.Body>
      </Modal>
    </section>
  );
}
