import React, { useEffect, useState } from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-expand top">
        <div className="container header">
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link pl-0">
                <i className="fas fa-clock mr-2"></i>Open Hours: Mon - Sat -
                9:00 - 18:00
              </a>
            </li>
          </ul> */}

          <div className="ml-auto"></div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-phone-alt mr-2"></i>+91 78452 92989
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-envelope mr-2"></i>hello@digisubash.com
              </a>
            </li>
          </ul>

          <ul className="navbar-nav icons">
            <li className="nav-item social">
              <a href="#" className="nav-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item social">
              <a href="#" className="nav-link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item social">
              <a href="#" className="nav-link pr-0">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand navbar-fixed sub visible">
        <div className="container header">
          <a
            className="navbar-brand"
            href="https://nexgen-html.codings.dev/html"
          >
            <span className="brand">
              <span className="featured">
                <span className="first">Digi</span>
              </span>
              <span className="last">Subash</span>
            </span>
          </a>

          <div className="ml-auto"></div>

          <Menu />

          {/* <ul className="navbar-nav icons">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#search"
              >
                <i className="icon-magnifier"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#sign"
              >
                <i className="icon-user"></i>
              </a>
            </li>
          </ul> */}

          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#menu"
              >
                <i className="icon-menu m-0"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
