import React from 'react'
import ItemCount from "./ItemCount"
const ItemDetail = ({detalle}) => {
  const onAdd = (cantidad)=>{
    console.log(`Compraste ${cantidad} de productos`)
  }
  
  return (
    <div className='div'>
        <h1 className="product-title" > {detalle.name}</h1>
        <img alt={detalle.name} src={detalle.img} className="product-image"/>
        <p>{detalle.description}</p>
        <p>Stock: {detalle.stock}</p>
        <p className="price">Precio: ${detalle.price} ,00</p>
        
        <ItemCount stock={detalle.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail