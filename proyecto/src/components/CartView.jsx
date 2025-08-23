import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartView = () => {
    const { cart, cartTotal, removeItem } = useContext(CartContext);

    return (
    <div className="container mt-4">
        <h2> Detalle de tu carrito</h2>
        {cart.map((item) => (
        <Card key={item.id} className="mb-3 tarjeta-producto" style={{ display: 'flex', flexDirection: 'row' }}>
    <Card.Img 
    src={item.img} 
    alt={item.name} 
    style={{ width: '300px', objectFit: 'cover' }}
    />
    <Card.Body style={{ flex: 1 }}>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
    Precio unitario: ${item.price.toLocaleString()} <br />
    Cantidad: {item.quantity} <br />
      Subtotal: ${(item.price * item.quantity).toLocaleString()}
    </Card.Text>
    <Button variant="danger" onClick={() => removeItem(item.id)}>
    Eliminar producto
    </Button>
</Card.Body>
</Card>

    ))}

    <ListGroup className="mt-3">
<ListGroup.Item>
    <strong>Total a pagar:</strong> ${cartTotal().toLocaleString()}
</ListGroup.Item>
</ListGroup>

<div className="mt-4 text-end">
<Link to="/checkout" className="btn btn-primary">
    Finalizar compra
</Link>
</div>

    </div>
);
};

export default CartView;
