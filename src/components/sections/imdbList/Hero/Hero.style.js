import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 25vh;
  background-image: linear-gradient(#fafafa, lightgrey);
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.05em;
  color: #2b2922;
  width: 100%;
  max-width: 60rem;
  text-align: center;
  margin: 0 1rem;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;
