import React from "react";

const Footer = () => {
    return (
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">© 2022 Tienda Ya</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><p className="text-muted" >App demo</p></li>
           </ul>
        </footer>
      </div>
    )
}

export default Footer