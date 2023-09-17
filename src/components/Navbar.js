import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-color">
        <div className="container-fluid">
          <a className="navbar-brand nav-c-underline" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page">
                  <Link to="/" className="nav-c-underline">
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/about" className="nav-c-underline">
                    About Us
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/service" className="nav-c-underline">
                    Service
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/gallery" className="nav-c-underline">
                    Gallery
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/contact" className="nav-c-underline">
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
