import React from "react";
import "./Navbar.scss";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { Menu } from "../menu/Menu";
export const Navbar1 = () => {
  return (
    <>
      <Navbar className="bg-[#171717]" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="/img/logo.svg" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            className="h-[30rem] "
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="top"
          >
            <Offcanvas.Header closeButton className="bg-[#292929] ">
              {/* <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 ">
                <Menu />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
