import React from "react";
import { Container, FooterText, Contact } from "./Footer.style";

export function Footer() {
  return (
    <Container>
      <FooterText>
        Designed by:{" "}
        <Contact href="mailto:ilie.rasa@gmail.com">Rasa I.</Contact> / Updated
        07.06.2022
      </FooterText>
    </Container>
  );
}
