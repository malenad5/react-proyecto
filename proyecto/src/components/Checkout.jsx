import { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import '../css/Checkout.css';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";


const Checkout = () => {
  const { cart, cartTotal, clear } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    secondEmail: "",
    direccion: ""
  });
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const finalizarCompra = async (e) => {
  e.preventDefault();

    const { name, lastname, email, secondEmail, direccion } = formData;

    if (!name || !lastname || !email || !secondEmail || !direccion) {
      setEmailError("Por favor completá todos los campos.");
      return;
    }

    if (email !== secondEmail) {
      setEmailError("Los correos no coinciden.");
      return;
    }

    setEmailError("");

    const newOrder = {
    buyer: { name, lastname, email, direccion },
    items: cart,
    total: cartTotal(),
    date: serverTimestamp()
  };

  try {
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, newOrder);
    setOrderId(docRef.id);
    clear();
    setTimeout(() => navigate("/"), 7000);
  } catch (error) {
    console.error("Error al guardar la orden en Firebase:", error);
  }
};


  return (
    <div className="checkout-container">
      {!orderId ? (
        <>
          <h2 className="checkout-title">Finalizar compra</h2>

          <Form className="checkout-form" onSubmit={finalizarCompra}>
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
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
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
              <Form.Label>Repetir Email</Form.Label>
              <Form.Control
                type="email"
                name="secondEmail"
                onChange={handleChange}
                required
                className="checkout-input"
              />
              {emailError && (
                <Form.Text className="text-danger">{emailError}</Form.Text>
              )}
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

            <Button className="checkout-button" type="submit">
              Confirmar compra
            </Button>
          </Form>

          <hr />

          <h4 className="checkout-resumen">Resumen de productos</h4>
          {cart.map((item) => (
            <Card key={item.id} className="checkout-card">
              <Card.Body>
                <strong>{item.quantity}×</strong> {item.name} ={" "}
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
