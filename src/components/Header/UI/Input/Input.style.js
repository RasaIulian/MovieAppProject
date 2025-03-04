import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: block;
  width: 100%;
  min-width: 30rem;

  ${({ noMargin }) =>
    noMargin
      ? ""
      : css`
          margin-bottom: 1rem;
        `}
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: block;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  transform: translateY(-45%);
  color: rgba(100, 100, 100, 0.5);
  z-index: 4;
`;

const baseStyle = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #1e212b;
  display: block;
  max-width: 20%;
  padding: 0.7rem 1rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  margin: 5px 0;
  transition: box-shadow 0.3s;

  &:focus {
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const InputElement = styled.input`
  ${baseStyle}
  &[type="search"] {
    height: 4rem;
    position: absolute;
    right: 0;
    transform: translateY(-60%);
    background-color: #f0f0f0;
    font-size: 1.7rem;
    z-index: 3;
  }
`;
