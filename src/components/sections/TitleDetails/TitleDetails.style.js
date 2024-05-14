import styled from "styled-components";

export const Background = styled.div`
  background-image: linear-gradient(#1e212b, darkgrey);
  padding: 1rem 1.5rem;
  min-height: 60vh;
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
  min-height: 80rem;
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
  background-color: rgba(250, 250, 250, 0.15);
  color: #ff8427;
  font-size: 1.6rem;
  line-height: 2.4rem;
  border-radius: 5px;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(250, 250, 250, 0.15);
  font-size: 1.6rem;
  color: red;
  border-radius: 5px;
`;

export const MovieCard = styled.div`
  max-width: calc(100% - 3rem);
  margin: 0 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  padding: 1.5rem 1.5rem;
  background-color: #fafafa;
  text-align: center;
  border-radius: 3rem;
  transition: background-color 0.3s;
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 40rem;
  border-radius: 2rem;
  display: block;
  margin: 2rem auto 2rem;
  box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const Info = styled.h2`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2b2922;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px;
`;

export const TrailerContainer = styled.div`
  width: 100%;
  min-height: 40rem;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const Trailer = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
