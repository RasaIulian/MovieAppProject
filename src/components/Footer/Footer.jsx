import React from "react";
import { Container, FooterText, Contact } from "./Footer.style";

export function Footer() {
  return (
    <Container>
      <FooterText>
        Designed by:{" "}
        <Contact href="mailto:ilie.rasa@gmail.com">Rasa I.</Contact> /
        25.May.2022
      </FooterText>
    </Container>
  );
}
