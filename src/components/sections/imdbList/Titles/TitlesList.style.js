import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Background = styled.div`
  background-image: linear-gradient(#1e212b, darkgrey);
  padding: 2rem 1.5rem;
  min-height: 62vh;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 130rem;
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
  justify-content: center;
  cursor: pointer;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100%;

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
  background-color: rgba(250, 250, 250, 0.15);
  color: red;
  font-size: 1.6rem;
  border-radius: 5px;
`;

export const MovieCard = styled.div`
  max-width: 25rem;
  width: 100%;
  margin: 0 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 1.5rem 1.5rem;
  background-color: #fafafa;
  text-align: center;
  border-radius: 3rem;
  transition: background-color 0.2s;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    background-color: #eaeaea;
    transform: scale(1.05);
  }
`;

export const Poster = styled.img`
  min-width: 22rem;
  width: 100%;
  border-radius: 1.8rem;
  display: block;
  margin: 0 auto 1rem;
`;

export const Info = styled.h2`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2b2922;
  padding: 5px;
`;

export const Min = styled.div`
  min-height: ${({ size }) => size};
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const FavoriteButton = styled(FontAwesomeIcon).attrs(
  ({ icon, ismoviefavorite }) => ({
    icon,
    style: {
      color: ismoviefavorite === "true" ? "gold" : "rgba(100, 100, 100, 0.5)",
    },
  })
)`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  z-index: 4;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
