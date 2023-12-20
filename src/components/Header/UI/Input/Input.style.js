import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: block;
  width: 100%;
  min-width: 60rem;
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
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  left: 86rem;
  transform: translateY(-40%);
  color: #1e212b;
  z-index: 2;
`;

const baseStyle = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #1e212b;
  display: block;
  width: 100%;
  max-width: 30rem;
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
    padding-left: 4rem;
    position: absolute;
    right: 5rem;
    transform: translateY(-50%);
  }
`;
