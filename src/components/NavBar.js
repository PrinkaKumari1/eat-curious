import React from "react";
import "./NavBar.scss";
import Nav from "react-bootstrap/Nav";
import { ReactComponent as Logo } from "./../logo.svg";
import TheButton from "./TheButton";

function NavBar() {
  return (
    <section>
      <Nav className="Container"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <a className="App-logo" href="_blank">
              <Logo alt="logo" />
            </a>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Recipes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <TheButton title="Contact US" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </section>
  );
}

export default NavBar;

