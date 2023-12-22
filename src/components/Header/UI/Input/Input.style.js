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
  right: 3.5rem;
  transform: translateY(-45%);
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
  border: 1px solid #fafafa;
  margin: 5px 0;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #1e212b;
  }
`;

export const InputElement = styled.input`
  ${baseStyle}
  &[type="search"] {
    padding-left: 2rem;
    position: absolute;
    right: 1rem;
    transform: translateY(-60%);
    background-color: rgba(200, 200, 200, 0.9);
    font-size: 1.7rem;
    z-index: 3;
  }
`;
