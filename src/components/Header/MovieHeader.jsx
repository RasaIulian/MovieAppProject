import React from "react";
import { Header, Nav, Container, Logo } from "./Header.style";
import { Link as DefaultLink } from "react-router-dom";
import logo from "../Header/UI/Logo/logo.jpg";
export function MovieHeader() {
  return (
    <Header>
      <Container>
        <Nav>
          <DefaultLink to="/">
            <Logo src={logo} alt="Reload Logo" title="Home" />
          </DefaultLink>
        </Nav>
      </Container>
    </Header>
  );
}
