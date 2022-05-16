import styled from "styled-components";
import { Link as DefaultLink } from "react-router-dom";

export const Header = styled.div`
  padding: 5px 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(#1e212b, #eaeaea);
`;

export const Logo = styled.img`
  display: block;
  max-height: 6rem;
  border-radius: 1rem;
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
  display: block;
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: 400;
  padding: 8px 1.6rem;
  position: relative;
  border-bottom: 1px solid #fafafa;
  border-radius: 5px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
