import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-color: #1e212b;
  padding: 4rem 1.5rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  color: #fafafa;
`;

export const MoviesWrapper = styled.div`
  min-height: 20rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  justify-content: center;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.15);
  color: #ff8427;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.15);
  color: red;
  font-size: 1.6rem;
  border-radius: 5px;
`;

export const MovieCard = styled(Link)`
  max-width: calc(40vh - 3rem);
  width: 100%;
  margin: 0 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  padding: 1.5rem 1.5rem;
  background-color: #fafafa;
  text-align: center;
  border-radius: 3rem;
  transition: background-color 0.3s;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    background-color: #eaeaea;
    transform: scale(1.1);
  }
`;

export const Poster = styled.img`
  max-width: 24rem;
  max-height: 24rem;
  width: 100%;
  border-radius: 2rem;
  display: block;
  margin: 0 auto 1rem;
`;

export const Info = styled.h2`
  font-size: 1.8rem;
  line-height: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2b2922;
`;

export const Min = styled.div`
  min-height: ${({ size }) => size};
`;
