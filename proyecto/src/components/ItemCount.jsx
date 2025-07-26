import {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)
    const sumar = () => {
        if(count < stock){

        setCount(count + 1)
    }
    }
const restar = () => {
    if(count> 0){

    setCount(count - 1)
    }
    }
    const comprar = ()=>{
onAdd(count)
}
return (
    <div className="counter-container">
    <div className="counter-buttons">
        <button className="counter-button btn-danger" onClick={restar}>-</button>
        <span className="count-display">{count}</span>
        <button className="counter-button btn-success" onClick={sumar}>+</button>
    </div>

    <button
        className="buy-button"
        disabled={count === 0}
        onClick={comprar}
    >
    Comprar
    </button>
    </div>
);
}
export default ItemCount;
