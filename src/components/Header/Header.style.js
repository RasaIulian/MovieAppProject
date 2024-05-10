import styled from "styled-components";
import { Link as DefaultLink } from "react-router-dom";

export const Header = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(#1e212b, #eaeaea);
  min-height: 10rem;
`;

export const Logo = styled.img`
  display: block;
  position: fixed;
  top: 2.5rem;

  z-index: 9999;
  max-height: 4.5rem;
  border-radius: 1rem;
  margin: 8px 1.6rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
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
  color: #fafafa;
  background-color: #1e212b;
  display: block;
  font-size: 1.8rem;
  line-height: 3rem;
  font-weight: 600;
  padding: 8px 1.6rem;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
