import styled from "styled-components";

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
  font-size: 1.6rem;
  color: red;
  border-radius: 5px;
`;

export const MovieCard = styled.div`
  max-width: calc(95% - 3rem);
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
  max-width: 90rem;
  max-height: 90rem;
  border-radius: 2rem;
  display: block;
  margin: 0 auto 1rem;
`;

export const Info = styled.h2`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2b2922;
  border-bottom: 1px solid #2b2922;
  border-radius: 5px;
`;
