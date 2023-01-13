import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand fs-4" to={"/"}>Tienda YA</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarsExample07XL">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" activeclassname="page" aria-current="page" to={"/categoria/componentes"}>Componentes</NavLink>
             </li>  
                <li className="nav-item">
                <NavLink className="nav-link" activeclassname="page" to={"/categoria/monitores"}>Monitores</NavLink>
                             </li>
                <li className="nav-item">
                <NavLink className="nav-link" activeclassname="page" to={"/categoria/perifericos"}>Perifericos</NavLink>
                             </li>
              </ul>
      
             <CartWidget />
      
             </div>
          </div>
        </nav>
          </div>
    )
}

export default NavBar;