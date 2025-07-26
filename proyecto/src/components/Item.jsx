import React from 'react'
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'


const Item = ({prod}) => {
    console.log(prod)
    return (
    <Card className="tarjeta-producto" style={{ width: '18rem' }}>
        <Card.Img className= "img-producto" variant="top" src= {prod.img} />
        <Card.Body>
        <Card.Title className="titulo-producto">{prod.name}</Card.Title>
        <Card.Text>
        {prod.description}
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item className="item-precio"> ${prod.price.toLocaleString('es-AR')},00</ListGroup.Item>
        <ListGroup.Item className="categoria">{prod.category}</ListGroup.Item>
        
        </ListGroup>
        <Card.Body>
            <Link className='boton-card' to={`/item/${prod.id}`}>Ver más</Link>
        
        </Card.Body>
    </Card>
    );
}

export default Item






