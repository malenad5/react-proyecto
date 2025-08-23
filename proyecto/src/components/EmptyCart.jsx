import React from 'react';
import { Link } from 'react-router-dom';
import '../css/EmptyCart.css'; 

const EmptyCart = () => {
return (
    <div className="empty-cart">
    <h2 className="empty-title">Tu carrito está vacío 😭</h2>
    <h4 className="empty-subtitle">
        Te invitamos a descubrir nuestros productos
    </h4>
    <Link className="btn btn-shop" to="/">
        Ir a comprar
    </Link>
    </div>
);
};

export default EmptyCart;

