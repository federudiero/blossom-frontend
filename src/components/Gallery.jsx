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
      <div className="parent">
        <div className="div1" onClick={() => openModal(0)}>
          <img src={imagenes[0].url} alt="Imagen 1" className="image-tile" />
        </div>
        <div className="div2" onClick={() => openModal(1)}>
          <img src={imagenes[1].url} alt="Imagen 2" className="image-tile" />
        </div>
        <div className="div3" onClick={() => openModal(2)}>
          <img src={imagenes[2].url} alt="Imagen 3" className="image-tile" />
        </div>

        <div className="blossom-top">BLOSS</div>
        <div className="blossom-bottom">OM</div>
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
