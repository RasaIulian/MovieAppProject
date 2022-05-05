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
        <Title>Top 250 Movies</Title>
        <TitlesWrapper>
          {fetching && <Loader>Loading movies...</Loader>}
          {error && <Error>{error}</Error>}
          {!fetching &&
            !error &&
            titles.length > 0 &&
            titles.map((title) => (
              <TitleCard to={`/${title.title}`} key={title.title}>
                <Poster src={title.image} />
                <Info>Rank: {title.rank}</Info>
                <Info>{title.fullTitle}</Info>
                <Info>IMDB rating: {title.imDbRating}</Info>
              </TitleCard>
            ))}
        </TitlesWrapper>
      </Container>
    </Background>
  );
}
