import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../logo/cookbook.svg";
function AppNavbar() {
    return (
        <Navbar variant="dark" expand="lg" className="navbar-top">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} className="logo" alt="logo"></img>
                </Navbar.Brand>
                <Nav.Link href="/recipes" className="nav-link">
                    Recepty
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export { AppNavbar };
