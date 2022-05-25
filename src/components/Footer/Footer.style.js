import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e212b;
  align-items: center;
  justify-content: center;
  padding: 5px 1.5rem;
  width: 100%;
  max-width: 100vw;
`;

export const FooterText = styled.h3`
  color: #fafafa;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  padding: 8px 1.6rem;
  text-align: right;
`;

export const Contact = styled.a`
  color: #fafafa;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  transition: color 0.3s;
  &:hover {
    color: lightskyblue;
  }
`;
