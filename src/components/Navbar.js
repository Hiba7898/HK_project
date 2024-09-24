import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo-remove.png";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai"; // Icône de l'email
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import {  Dropdown } from "react-bootstrap";
import usFlag from "../Assets/us_flag.jpg"; // Importez vos images de drapeaux
import frFlag from "../Assets/fr_flag.jpg"; 
import arFlag from "../Assets/ar_flag.jpg"; 


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {/* Ajout du bouton d'email */}
              <Nav.Link href="mailto:hibakandaoui083@gmail.com" style={{ marginRight: "10px" }}>
                <AiOutlineMail style={{ color: "white", fontSize: "1.5em" }} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {/* Language Selection Dropdown */}
              <Dropdown className="ml-2">
                <Dropdown.Toggle variant="primary" id="dropdown-basic"> 
                  <img
                    src={usFlag}
                    alt="English"
                    style={{ width: "20px", marginRight: "5px" }}
                  />{" "}
                  EN
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-en">
                    <img
                      src={usFlag}
                      alt="English"
                      style={{ width: "20px", marginRight: "5px" }}
                    />{" "}
                    EN
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-fr">
                    <img
                      src={frFlag}
                      alt="French"
                      style={{ width: "20px", marginRight: "5px" }}
                    />{" "}
                    FR
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-ar">
                    <img
                      src={arFlag}
                      alt="Arabic"
                      style={{ width: "20px", marginRight: "5px" }}
                    />{" "}
                    AR
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
