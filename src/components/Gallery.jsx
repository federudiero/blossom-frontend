import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default function Gallery() {
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://res.cloudinary.com/tu_nombre_de_cloud/image/list/blossom_gallery.json')
      .then(res => {
        setImagenes(res.data.resources);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar imágenes:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4" style={{ fontWeight: '600' }}>Galería</h2>
        {loading ? (
          <div className="text-center"><Spinner animation="border" /></div>
        ) : (
          <Row>
            {imagenes.map((img, idx) => (
              <Col key={idx} md={4} sm={6} xs={12} className="mb-4">
                <Image
                  src={`https://res.cloudinary.com/tu_nombre_de_cloud/image/upload/v1/${img.public_id}.jpg`}
                  fluid
                  rounded
                  className="shadow-sm"
                  style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}
