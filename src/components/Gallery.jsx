import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './Gallery.css';

const imagenes = [
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890948/blossom/IMG_5507_hmope9.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890926/blossom/IMG_5532_zhnrwt.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890898/blossom/IMG_5554_denrel.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890887/blossom/IMG_5572_sakgex.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890881/blossom/IMG_5581_msqkb3.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890867/blossom/IMG_5605_gjgwe7.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890862/blossom/IMG_5610_d1twjt.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890860/blossom/IMG_5624_t8fsh6.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890854/blossom/IMG_5631_scd9ej.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890842/blossom/IMG_5649_bsohwl.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890837/blossom/IMG_5658_svoqzj.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890830/blossom/IMG_5674_rjvrfe.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890827/blossom/IMG_5685_givfsz.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890822/blossom/IMG_5704_dq2qg9.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890822/blossom/IMG_5698_dffxnm.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890818/blossom/IMG_5716_nkaglw.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890818/blossom/IMG_5712_e5jgee.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890810/blossom/IMG_5755_bbaueo.jpg",
  "https://res.cloudinary.com/doxadkm4r/image/upload/v1748890829/blossom/IMG_5676_tkxdcu.jpg"
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
        {imagenes.map((url, idx) => (
          <div
            key={idx}
            className={`grid-item span-${(idx % 5) + 1}`}
            onClick={() => openModal(idx)}
          >
            <img src={url} alt={`Imagen ${idx}`} />
          </div>
        ))}
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
