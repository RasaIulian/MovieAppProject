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

export function TitlesList({ fetching, titles, error }) {
  return (
    <Background>
      <Container>
        <Title>Top 250 Movies based on IMDB Rating</Title>
        <MoviesWrapper>
          {fetching && <Loader>Loading movies...</Loader>}
          {error && <Error>Error: {error}</Error>}
          {!fetching &&
            !error &&
            titles.length > 0 &&
            titles.map((movie) => (
              <MovieCard to={`/${movie.id}`} key={movie.title}>
                <Poster src={movie.image} />
                <Info>Rank: {movie.rank}</Info>
                <Min size="10rem">
                  <Info>{movie.fullTitle}</Info>
                </Min>
                <Info>IMDB rating: {movie.imDbRating}</Info>
              </MovieCard>
            ))}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
