import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-sticky top-0 padding position-relative z-3 mb-2">
        <div className="container">
          <Link className="navbar-brand text-white fw-bold" to="/">
            <img src={logo} className={`${style.logo}`} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link text-white rounded-2 fw-bold ${style.active}`
                      : "nav-link text-white rounded-2 fw-bold"
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link text-white rounded-2 fw-bold ${style.active}`
                      : "nav-link text-white rounded-2 fw-bold"
                  }
                >
                  Product
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
