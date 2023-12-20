import React from "react";
import {
  Background,
  Container,
  MoviesWrapper,
  Title,
  Loader,
  Error,
  MovieCard,
  Poster,
  Info,
  Min,
} from "./TitlesList.style";

export function TitlesList({ fetching, titleInfo, error }) {
  return (
    <Background>
      <Container>
        <Title>Top 250 Movies based on IMDB Rating</Title>
        <MoviesWrapper>
          {fetching && <Loader>Loading movies...</Loader>}
          {error && <Error>Error: {error}</Error>}
          {!fetching &&
            !error &&
            titleInfo.length > 0 &&
            titleInfo.map((movie) => (
              <MovieCard to={`/${movie.rank}`} key={movie.title}>
                <Min size="25rem">
                  <Poster src={movie.image} />
                </Min>
                <Info>Rank: {movie.rank}</Info>
                <Min size="8rem">
                  <Info>{movie.title}</Info>
                </Min>
                <Info>IMDB rating: {movie.rating}</Info>
              </MovieCard>
            ))}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
