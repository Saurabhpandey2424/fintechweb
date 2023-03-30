import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";
import './bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return(
  <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
  <div className="container-fluid ">
    <a className="navbar-brand fw-bolder ms-3" href="#">
      UPDOWN!! 
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-primary fw-bold" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" href="#">
            Link
          </a>
        </li>
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul> 
       </li> */}
      </ul>
    </div>
  </div>
</nav>

</>
  );
}

export default NavBar;