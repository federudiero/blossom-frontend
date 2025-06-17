import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState({ title: '', price: '', image: '' });
  const [productos, setProductos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const { user, pass } = e.target.elements;
    if (user.value === 'juli' && pass.value === '123456') {
      setLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const fetchProductos = async () => {
    const snapshot = await getDocs(collection(db, 'productos'));
    setProductos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    if (loggedIn) fetchProductos();
  }, [loggedIn]);

  const handleSubmit = async (e) => {
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
    fetchProductos();
  };

  const handleEdit = (producto) => {
    setForm({ title: producto.title, price: producto.price, image: producto.image });
    setEditId(producto.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar este producto?')) {
      await deleteDoc(doc(db, 'productos', id));
      fetchProductos();
    }
  };

  if (!loggedIn) {
    return (
      <Container className="py-5">
        <h2>Login de administrador</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control name="user" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control name="pass" type="password" required />
          </Form.Group>
          <Button type="submit">Ingresar</Button>
        </Form>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Panel de Administración</h2>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-2">
          <Form.Label>Título</Form.Label>
          <Form.Control value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Precio</Form.Label>
          <Form.Control value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Imagen (URL)</Form.Label>
          <Form.Control value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
        </Form.Group>
        <Button type="submit">{editId ? 'Guardar cambios' : 'Agregar producto'}</Button>
      </Form>

      <Table striped bordered>
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
  );
}
