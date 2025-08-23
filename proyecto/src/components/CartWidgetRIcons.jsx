import { GiAirplaneDeparture } from "react-icons/gi";
import Badge from 'react-bootstrap/Badge';

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

const CartWidgetRIcons = () => {
    const {cartQuantity}= useContext(CartContext)
return(
    <>
    <GiAirplaneDeparture className="logo-icon"/>
    <Badge bg="danger">{cartQuantity()}</Badge> 
    </>
)
}

export default CartWidgetRIcons