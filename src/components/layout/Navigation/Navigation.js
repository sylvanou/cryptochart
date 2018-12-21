import React from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => (
  <Navbar inverse collapseOnSelect className="navigation">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">HODLR</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    {/* <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
          </MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem href="#">Link Right</NavItem>
        <NavItem href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
    */}
  </Navbar>
);
