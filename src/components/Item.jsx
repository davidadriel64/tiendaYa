import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="col-md-2 col-sm-2 mb-2">
        <div className="card" >
        <Link to={"/item/" + producto.id} className="text-decoration-none">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
        </Link>
        <div className="card-body">
        <Link to={"/item/" + producto.id} className="text-decoration-none">
            <h5 className="card-title">{producto.nombre}</h5>
                </Link>
                <h6 className="card-subtitle mb-2 text-muted">${producto.precio}</h6>
                <p className="card-text">{producto.info}</p>
            </div>
        </div>
        
        </div>
        
    )
}

export default Item;