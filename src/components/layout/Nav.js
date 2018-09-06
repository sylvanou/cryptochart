import React from "react";
import { Navbar } from "react-bootstrap";
export const Nav = () => {
  const style = {
    backgroundColor: "white"
  };
  return (
    <Navbar style={style}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">HODLR</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
};
