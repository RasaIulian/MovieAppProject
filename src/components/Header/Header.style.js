import styled from "styled-components";
import { Link as DefaultLink } from "react-router-dom";

export const Header = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(#1e212bbd, #eaeaea);
  min-height: 5rem;
`;

export const Logo = styled.img`
  display: block;
  z-index: 9999;
  max-height: 4rem;
  border-radius: 1rem;
  margin: 8px 1.6rem 8px 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 150rem;
  position: relative;
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
  &:focus,
  &:active {
    box-shadow: none;
    border: none;
  }
`;

export const GenreContainer = styled.div`
  position: absolute;
  left: 19rem;
  &:focus,
  &:active {
    box-shadow: none;
    border: none;
  }
`;

export const GenreSelect = styled.select`
  padding: 0.5rem;
  cursor: pointer;
  height: 4rem;
  color: #2b2922;
  font-weight: bold;
  background-color: rgba(200, 200, 200, 0.9);
  border-radius: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s;
  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;
export const Option = styled.option`
  &:focus,
  &:active {
    box-shadow: none;
    border: none;
  }
`;
