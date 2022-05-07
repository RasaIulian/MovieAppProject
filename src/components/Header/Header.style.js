import styled from "styled-components";
import { Link as DefaultLink } from "react-router-dom";

export const Header = styled.div`
  padding: 5px 1.5rem;
  background-color: #2b2922;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  display: block;
  height: 6rem;
  border: 1px solid #2b2922;
  border-radius: 1rem;
  transition: opacity 0.3s ease-out;
  transition: border 0.4s;

  border: 1px solid black;
  &:hover {
    opacity: 0.9;
    border: 1px solid #eaeaea;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Link = styled(DefaultLink)`
  color: #ffffff;
  display: block;
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: 600;
  padding: 8px 1.6rem;
  position: relative;
  transition: color 0.3s;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
