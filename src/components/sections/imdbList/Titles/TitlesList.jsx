import React from "react";
import {
  Background,
  Container,
  TitlesWrapper,
  Title,
  Loader,
  Error,
  TitleCard,
  Poster,
  Info,
} from "./TitlesList.style";

export function TitlesList({ fetching, titles, error }) {
  return (
    <Background>
      <Container>
        <Title>Top 250 Movies based on IMDB Rating</Title>
        <TitlesWrapper>
          {fetching && <Loader>Loading movies...</Loader>}
          {error && <Error>{error}</Error>}
          {!fetching &&
            !error &&
            titles.length > 0 &&
            titles.map((movie) => (
              <TitleCard to={`/${movie.title}`} key={movie.title}>
                <Poster src={movie.image} />
                <Info>Rank: {movie.rank}</Info>
                <Info>{movie.fullTitle}</Info>
                <Info>IMDB rating: {movie.imDbRating}</Info>
              </TitleCard>
            ))}
        </TitlesWrapper>
      </Container>
    </Background>
  );
}
