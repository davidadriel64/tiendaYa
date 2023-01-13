import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext)
    
    return (
        <Link to={"/cart"} className=" position-relative">
        <button type="button" className="btn btn-outline-light position-relative"><i className="bi bi-bag-heart"></i><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span></button>
        </Link>
    )
}

export default CartWidget;