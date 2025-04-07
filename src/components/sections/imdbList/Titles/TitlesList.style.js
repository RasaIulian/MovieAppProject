import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Background = styled.div`
  background-image: linear-gradient(#1e212b, darkgrey);
  padding: 2rem 1.5rem;
  min-height: 76dvh;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 155rem;
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
`;

// Define the opacity animation
const textOpacityAnimation = keyframes`
  0% {
    opacity: 0.5; // 50% opacity
  }
  100% {
    opacity: 1; // 100% opacity
  }
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
  span{animation: ${textOpacityAnimation} 1s infinite alternate};
`;

export const Error = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(250, 250, 250, 0.15);
  color: rgb(255, 77, 1);
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
  background-color: #f0f0f0;
  text-align: center;
  border-radius: 3rem;
  transition:all 0.3s ease-in-out;
  position: relative;
 @media (max-width: 768px) {
 max-width: 100%;
 margin: 0 0 2rem;
}
  &:hover {
    background-color: #e0e0e0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    }

`;

export const PosterWrapper = styled.div`
  width: 25rem;
  overflow: hidden;
  border-top-left-radius: 1.8rem;
  border-top-right-radius: 1.8rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  @media (max-width: 768px) {
  width: 100%;}
`;

export const Poster = styled.img`
  width: 100%;
  height: 36rem;
  border-radius: 1.8rem 1.8rem 0.5rem 0.5rem;
  display: block;
  transition: transform 0.3s ease-in-out;

  ${MovieCard}:hover & {
    transform: scale(1.05);
  }
    @media (max-width: 768px) {
  height: unset;}
`;

export const Info = styled.h2`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
  color: #2b2922;
  padding: 5px;
`;

export const Min = styled.div`
  min-height: ${({ size }) => size};
  align-items: top;
  justify-content: center;
  display: flex;
   align-items: center;
`;

export const FavoriteIcon = styled(FontAwesomeIcon).attrs(
  ({ icon, ismoviefavorite }) => ({
    icon,
    style: {
      color: ismoviefavorite === "true" ? "rgba(255, 170, 0, 1)" : "rgba(100, 100, 100, 0.5)",
    },
  })
)`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  z-index: 4;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const SearchError = styled.div`
  text-align: center;
  justify-content: center;
  margin: 2rem 0;
  font-size: 1.5rem;
  background-image: linear-gradient(#1e212b, darkgrey);
  padding: 2rem 1.5rem;
  min-height: 62vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top:1rem;
`;

export const MovieListButton = styled.button`
  background-color: #f0f0f0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  color: #2b2922;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
      background-color: #e0e0e0; 
    `}

  &:hover {
    background-color: #e0e0e0;   
  }

`;
export const ShowMoreButton = styled.button`
  background-color: #f0f0f0;
  color: #2b2922;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  
  &:hover {
    background-color: #e0e0e0;
    box-shadow: none;
  }
`;