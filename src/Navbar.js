import React from "react";
import { Link } from "react-router-dom";
import "../src/Components/Home/Home.css";
function Navbar() {
  return (
    <header id="header" class="fixed-top navbar-dark bg-dark">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <Link to="/">
            datatyp<span>.</span>
          </Link>
        </h1>
        <nav class=" nav-menu d-none d-block ">
          <ul>
            <li class="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Compiler">Compiler</Link>
            </li>
            <li>
              <Link to="/Editor">Editor</Link>
            </li>
            <li>
              <Link to="/Terminal">Linux Shell</Link>
            </li>
          </ul>
        </nav>
        <Link to="/Chatbot">ChatBot</Link>
      </div>
    </header>
  );
}
export default Navbar;
