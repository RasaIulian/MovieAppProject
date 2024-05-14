import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: block;
  width: 100%;
  min-width: 30rem;
  position: relative;

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
  right: 2rem;
  transform: translateY(-67%);
  color: rgba(100, 100, 100, 0.5);
  z-index: 4;
`;

const baseStyle = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #1e212b;
  display: block;
  max-width: 25%;
  padding: 0.7rem 1rem;
  border-radius: 2rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  margin: 5px 0;
  transition: box-shadow 0.3s;

  &:focus {
    box-shadow: none;
  }
`;

export const InputElement = styled.input`
  ${baseStyle}
  &[type="search"] {
    position: absolute;
    right: 1rem;
    transform: translateY(-69%);
    background-color: rgba(200, 200, 200, 0.9);
    font-size: 1.7rem;
    z-index: 3;
  }
`;
