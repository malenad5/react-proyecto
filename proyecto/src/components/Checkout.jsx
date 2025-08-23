import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/checkout.css';

const Checkout = () => {
const { cart, cartTotal, clear } = useContext(CartContext);
const [orderId, setOrderId] = useState(null);
const [formData, setFormData] = useState({ name: '', email: '', direccion: '' });
const navigate = useNavigate();

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const confirmOrder = () => {
    const newOrder = {
    id: 'LATAM-' + Date.now(),
    buyer: formData,
    items: cart,
    total: cartTotal(),
    };

    localStorage.setItem('orden-latam', JSON.stringify(newOrder));
    setOrderId(newOrder.id);
    clear();

    setTimeout(() => navigate('/'), 7000);
};

return (
    <div className="checkout-container">
    {!orderId ? (
        <>
        <h2 className="checkout-title">Finalizar compra</h2>

        <Form className="checkout-form">
            <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                required
                className="checkout-input"
            />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="checkout-input"
                />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
                type="text"
                name="direccion"
                onChange={handleChange}
                required
                className="checkout-input"
                />
            </Form.Group>

            <Button className="checkout-button" onClick={confirmOrder}>
            Confirmar compra
            </Button>
            </Form>

            <hr />

            <h4 className="checkout-resumen">Resumen de productos</h4>
            {cart.map((item) => (
            <Card key={item.id} className="checkout-card">
            <Card.Body>
                <strong>{item.quantity}×</strong> {item.name} ={' '}
                <strong>${item.price * item.quantity}</strong>
                </Card.Body>
            </Card>
            ))}
            <h5 className="checkout-total">
            Total a pagar: ${cartTotal().toLocaleString()}
            </h5>
        </>
        ) : (
        <Alert variant="success" className="checkout-alert">
        ¡Gracias por tu compra, <strong>{formData.name}</strong>! <br />
        Tu número de orden es: <strong>{orderId}</strong>
        <br />
        Serás redirigido al inicio en unos segundos...
        </Alert>
        )}
    </div>
    );
};

export default Checkout;
