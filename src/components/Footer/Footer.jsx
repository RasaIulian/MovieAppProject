import React from "react";
import { Container, FooterText, Contact } from "./Footer.style";

export function Footer() {
  return (
    <Container>
      <FooterText>
        Designed and developed by: <br></br>
        <Contact href="mailto:ilie.rasa@gmail.com">
          Rasa I. Front-end Developer
        </Contact>{" "}
      </FooterText>
    </Container>
  );
}
