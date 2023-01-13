import React, { useState} from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const ItemDetail = ({producto}) => {
    const [itemStock, setItemStock] = useState(0)

    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity)
        addItem(producto, quantity)
        }

    useEffect(() => {
        setItemStock(producto.stock)
    }, [producto])
    
    return (
        <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{producto.nombre}</h1>
            <h5 className="display-6   mb-3">${producto.precio}</h5>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <ItemCount stock={producto.stock} onAdd={onAdd}/>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
          </div>
        </div>
      </div>
        
    );
};

export default ItemDetail;