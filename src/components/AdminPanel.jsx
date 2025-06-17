import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert, Table, Modal } from 'react-bootstrap';
import { db } from '../firebase/config.js';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import axios from 'axios';

export default function AdminPanel() {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: '',
    categoria: '',
    promo: false
  });
  const [mensaje, setMensaje] = useState('');
  const [productos, setProductos] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const cargarProductos = async () => {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'blossom_store');

    const res = await axios.post('https://api.cloudinary.com/v1_1/doxadkm4r/image/upload', formData);
    setForm({ ...form, imagen: res.data.secure_url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'productos'), {
        ...form,
        precio: parseFloat(form.precio),
        imagenUrl: form.imagen
      });
      setMensaje('✅ Producto agregado');
      setForm({ nombre: '', descripcion: '', precio: '', imagen: '', categoria: '', promo: false });
      cargarProductos();
    } catch (err) {
      console.error(err);
      setMensaje('❌ Error al guardar producto');
    }
  };

  const eliminarProducto = async (id) => {
    if (window.confirm('¿Eliminar este producto?')) {
      await deleteDoc(doc(db, 'productos', id));
      cargarProductos();
    }
  };

  const abrirEditor = (producto) => {
    setEditData({ ...producto });
    setShowEdit(true);
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData({ ...editData, [name]: type === 'checkbox' ? checked : value });
  };

  const guardarEdicion = async () => {
    try {
      const docRef = doc(db, 'productos', editData.id);
      await updateDoc(docRef, {
        nombre: editData.nombre,
        descripcion: editData.descripcion,
        precio: parseFloat(editData.precio),
        categoria: editData.categoria,
        promo: editData.promo
      });
      setShowEdit(false);
      cargarProductos();
    } catch (err) {
      alert('Error al guardar los cambios');
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Panel de Administrador</h2>

      {mensaje && <Alert variant="info">{mensaje}</Alert>}

      {/* Formulario para agregar productos */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" name="descripcion" value={form.descripcion} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" name="precio" value={form.precio} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Control type="text" name="categoria" value={form.categoria} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" onChange={handleImageUpload} />
          {form.imagen && <img src={form.imagen} alt="Preview" className="img-fluid mt-2" style={{ maxHeight: 200 }} />}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Promoción" name="promo" checked={form.promo} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="dark">Agregar Producto</Button>
      </Form>

      {/* Lista de productos cargados */}
      <h4 className="mt-5">Productos actuales</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Promo</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.nombre}</td>
              <td>{prod.categoria}</td>
              <td>${prod.precio}</td>
              <td>{prod.promo ? '✅' : '—'}</td>
              <td>
                <img src={prod.imagenUrl} alt="" style={{ width: 50, height: 50, objectFit: 'cover' }} />
              </td>
              <td>
                <Button variant="warning" size="sm" onClick={() => abrirEditor(prod)} className="me-2">
                  Editar
                </Button>
                <Button variant="danger" size="sm" onClick={() => eliminarProducto(prod.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de edición */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editData && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" value={editData.nombre} onChange={handleEditChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="descripcion" value={editData.descripcion} onChange={handleEditChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" name="precio" value={editData.precio} onChange={handleEditChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Categoría</Form.Label>
                <Form.Control type="text" name="categoria" value={editData.categoria} onChange={handleEditChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Promoción" name="promo" checked={editData.promo} onChange={handleEditChange} />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEdit(false)}>Cancelar</Button>
          <Button variant="primary" onClick={guardarEdicion}>Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
