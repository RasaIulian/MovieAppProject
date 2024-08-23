import styled from "styled-components";

export const FavoritesStyle = styled.div`
  display: flex;
  border-radius: 1rem;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: #2b2922;
  background-color: rgba(200, 200, 200, 0.9);
  z-index: 5;
  height: 3rem;
  padding: 0.5rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:active,
  :focus {
    box-shadow: none;
  }

  &::after {
    content: attr(data-favorites);
    margin-left: 0.5rem;
    font-weight: bold;
    position: absolute;
    top: 1rem;
    left: 5.1rem;
    color: #2b2922;
    z-index: 6;
    font-size: 1.6rem;
    line-height: 2.4rem;
    width: 2rem;
    text-align: center;
  }
`;
