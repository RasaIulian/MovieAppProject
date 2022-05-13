import React from "react";
import { Header, Logo, Link, Nav, Container } from "./Header.style";
import { Link as DefaultLink } from "react-router-dom";

export function MovieHeader() {
  return (
    <Header>
      <Container>
        <DefaultLink to="/">
          <Logo
            src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="logo"
          />
        </DefaultLink>
        <Nav>
          <Link to="/">HomePage</Link>
        </Nav>
      </Container>
    </Header>
  );
}
