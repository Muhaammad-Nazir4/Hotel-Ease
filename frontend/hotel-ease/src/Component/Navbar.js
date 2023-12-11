import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigateInstance = useNavigate(); // Change the name of the constant

  const signIn = () => {
    navigateInstance("/sign-in"); // Use the constant here
  };

  const signUp = () => {
    navigateInstance("/sign-up"); // Use the constant here
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Hotel Ease</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="/Employees">Manage Employees</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Button variant="outline-success  me-2" onClick={signUp}>
              Sign Up
            </Button>
            <Button variant="outline-success" onClick={signIn}>
              Sign In
            </Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
