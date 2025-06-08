import React, { useState } from 'react';
import { Container, Modal, Image } from 'react-bootstrap';
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
  const [selectedImg, setSelectedImg] = useState('');

  const openModal = (img) => {
    setSelectedImg(img);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
      
        <div className="masonry-gallery">
          {imagenes.map((url, idx) => (
            <div key={idx} className="masonry-item" onClick={() => openModal(url)}>
              <img src={url} alt={`Imagen ${idx}`} />
            </div>
          ))}
        </div>

        <Modal show={showModal} onHide={closeModal} centered size="xl">
          <Modal.Body className="text-center bg-dark">
            <Image src={selectedImg} fluid />
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}
