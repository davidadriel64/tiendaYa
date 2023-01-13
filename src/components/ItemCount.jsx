import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock)
    const [vendido, setVendido] = useState(false)

    const bajarContador = () => {
        if(contador > 1) {
            setContador(contador - 1);
        }
    }

    const subirContador = () => {
        if(contador < itemStock) {
            setContador(contador + 1)
        }
    }

    const addToCart = (quantity) => {
        if(contador <= itemStock) {
            setContador(1)
        setItemStock(itemStock - quantity)
        setVendido(true)
        onAdd(quantity)
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <div className="container">
            <div className="btn-group mx-2" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-danger" onClick={bajarContador}>-</button>
                <button type="button" className="btn">{contador}</button>
                <button type="button" className="btn btn-outline-success" onClick={subirContador}>+</button>
            </div>
            {vendido ? <Link to={"/cart"} className= "btn btn-success">Finalizar Compra</Link> :
            <button type="button" className="btn btn-success" onClick={() => addToCart(contador)}>Agregar al carrito</button>}
        </div>
    )
};

export default ItemCount;