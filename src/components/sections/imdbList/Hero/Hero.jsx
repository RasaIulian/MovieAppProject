import React from "react";

import { Container, Title } from "./Hero.style";

export function Hero({ children }) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}
