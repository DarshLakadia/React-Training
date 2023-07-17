import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  NavItem,
  NavLink,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="navbar">
      <Container className="d-flex">
        <Navbar.Brand>
          <Link to="/">Navbar</Link>
        </Navbar.Brand>
        <Nav className="d-flex justify-content-between align-items-center gap-3">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/contact">Contact</Link>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
