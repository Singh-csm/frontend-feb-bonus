import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../index.css"
function Header() {
  return (
<div className='nav'>
<Navbar bg="light" expand="md">
      <Navbar.Brand href="/">Student</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">Home</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/createStudent" className="nav-link">Create Student Data</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/User" className="nav-link">Sign Up</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">Sign In</Link>
          </Nav.Item>
    
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</div>
  );
}

export default Header;