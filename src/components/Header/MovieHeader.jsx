import React from "react";
import { Header, Link, Nav, Container } from "./Header.style";

export function MovieHeader() {
  return (
    <Header>
      <Container>
        <Nav>
          <Link to="/">HomePage</Link>
        </Nav>
      </Container>
    </Header>
  );
}
