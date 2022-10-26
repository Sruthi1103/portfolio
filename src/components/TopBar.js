import React from "react";
import "./TopBar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const TopBar = () => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="sm"
      variant="dark"
      className="bg-dark"
      style={{
        //backgroundColor: "#1c2841",
        fontSize: "0.9rem",
        fontFamily: "Varela Round, sans-serif",
        minHeight: "80px",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: "#1e90ff",
            fontSize: "1.4rem",
            fontFamily: "Varela Round, sans-serif",
          }}
        >
          <b>SRUTHI SUNIL</b>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav>
            <Nav.Link eventKey="1" style={{ marginLeft: "30px" }} href="#About">
              ABOUT
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              style={{ marginLeft: "30px" }}
              href="#Experience"
            >
              EXPERIENCE
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              style={{ marginLeft: "30px" }}
              href="#Education"
            >
              EDUCATION
            </Nav.Link>
            <Nav.Link
              eventKey="4"
              style={{ marginLeft: "30px" }}
              href="#Skills"
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              eventKey="5"
              style={{ marginLeft: "30px" }}
              href="#Projects"
            >
              PROJECTS
            </Nav.Link>

            <Nav.Link
              eventKey="7"
              style={{ marginLeft: "30px" }}
              href="#contact"
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
