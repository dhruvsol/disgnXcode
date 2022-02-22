import React from "react";
import "./Navbar.scss";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { Menu } from "../menu/Menu";
export const Navbar1 = () => {
  return (
    <>
      <Navbar className="bg-[#171717]" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://ik.imagekit.io/grfidbs4suq/icons/logo_k20mAzVFy.svg"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            className="h-[max-content] menu-size"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="top"
          >
            <Offcanvas.Header
              closeButton
              className="bg-[#292929] justify-end hidden "
            >
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
