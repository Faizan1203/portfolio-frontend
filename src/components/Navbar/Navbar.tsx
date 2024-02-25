import { useState, useEffect } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Header() {
  const [expand, updateExpanded] = useState<boolean>(false);
  const [navColour, updateNavbar] = useState<boolean>(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Brand className="logotext" as={Link} to="/">
        <div className="logo"></div>
      </Navbar.Brand>

      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(!expand);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => updateExpanded(false)}
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              About
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              Projects
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              Contact
            </NavLink>
          </Nav.Item>

          <Button
            onClick={() => {
              window.open("https://flowcv.com/resume/mp4eisdvjs");
            }}
            className="resumebtn"
          >
            <span>Resume</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
