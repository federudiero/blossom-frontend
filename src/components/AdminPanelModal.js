import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Container, Table } from 'react-bootstrap';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function AdminPanelModal({ show, onHide }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState({ title: '', price: '', image: '' });
  const [productos, setProductos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  const fetchProductos = async () => {
    const snapshot = await getDocs(collection(db, 'productos'));
    setProductos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    if (loggedIn) fetchProductos();
  }, [loggedIn]);

  const handleLogin = e => {
    e.preventDefault();
    const { user, pass } = e.target.elements;
    if (user.value === 'juli' && pass.value === '123456') {
      setLoggedIn(true);
      onHide();
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title || !form.price || !form.image) return;

    if (editId) {
      const ref = doc(db, 'productos', editId);
      await updateDoc(ref, form);
    } else {
      await addDoc(collection(db, 'productos'), form);
    }

    setForm({ title: '', price: '', image: '' });
    setEditId(null);
    setShowFormModal(false);
    fetchProductos();
  };

  const handleEdit = producto => {
    setForm({ title: producto.title, price: producto.price, image: producto.image });
    setEditId(producto.id);
    setShowFormModal(true);
  };

  const handleDelete = async id => {
    if (window.confirm('¿Eliminar este producto?')) {
      await deleteDoc(doc(db, 'productos', id));
      fetchProductos();
    }
  };

  return (
    <>
      {/* Modal de login */}
      {!loggedIn && (
        <Modal show={show} onHide={onHide} centered>
          <Modal.Header closeButton>
            <Modal.Title>Acceso administrador</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleLogin}>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control name="user" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="pass" type="password" required />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>Cancelar</Button>
              <Button variant="dark" type="submit">Ingresar</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}

      {/* Panel de administración */}
      {loggedIn && (
        <Container className="py-5">
          <h2 className="mb-4">Panel de Administración</h2>
          <Button className="mb-3" onClick={() => setShowFormModal(true)}>+ Nuevo producto</Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Título</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(p => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>${p.price}</td>
                  <td><img src={p.image} alt="" style={{ width: 50 }} /></td>
                  <td>
                    <Button size="sm" variant="warning" onClick={() => handleEdit(p)}>Editar</Button>{' '}
                    <Button size="sm" variant="danger" onClick={() => handleDelete(p.id)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}

      {/* Modal para agregar/editar producto */}
      <Modal show={showFormModal} onHide={() => setShowFormModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Editar producto' : 'Nuevo producto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
            </Form.Group>
            <Button type="submit">{editId ? 'Guardar cambios' : 'Agregar producto'}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
