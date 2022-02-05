import React from "react";
import Sur_logo from "./Images/Sur_logo.jpg";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-light  "
      
    >
      <div class="container-fluid">

        <a class="navbar-brand" style={{ color: "black" }}>
          <img
            src={Sur_logo}
            width="50"
            height="50"
            class="d-inline-block align-middle"
            alt=""
            style={{ padding: "5px" }}
          ></img>
          <span>SUR INSTITUTE OF CAREER DEVELOPMENT</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse align-bottom "
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item align-bottom">
              <a class="nav-link active" aria-current="page">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <span class="align-bottom">Home</span>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
              <Link to="/events" style={{ textDecoration: 'none' }}>
                Activities
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
              <Link to="/subscribe" style={{ textDecoration: 'none' }}>
                Subscribe
                </Link>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
