import React from "react";
import { Navbar } from "react-bootstrap";
import "./Nav.css";

export const Nav = () => (
  <Navbar className="navigation">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">HODLR</a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);
