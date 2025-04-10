import styled from "styled-components";

export const FavoritesStyle = styled.div`
  display: flex;
  border-radius: 0.5rem;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: #2b2922;
  background-color: #f0f0f0;
  z-index: 5;
  height: 3rem;
  padding: 0.5rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:active,
  &:focus {
    box-shadow: none;
    transform: translateY(0);
  }

  &::after {
    content: attr(data-favorites);
    font-weight: bold;
    position: absolute;
    right: 1rem;
    color: #2b2922;
    z-index: 6;
    font-size: 1.6rem;
    line-height: 2.4rem;
    width: 2rem;
    text-align: center;
  }
`;
