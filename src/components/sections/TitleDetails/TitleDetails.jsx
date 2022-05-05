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
} from "./TitleDetails.style";

export function TitleDetails({ fetching, titles, error }) {
  return (
    <Background>
      <Container>
        <Title></Title>
        <TitlesWrapper>
          {fetching && <Loader>Loading movie details...</Loader>}
          {error && <Error>{error}</Error>}
          {!fetching && !error && (
            <TitleCard to="#">
              <Poster src={titles[0].image} />
              <Info>Rank: {titles[0].rank}</Info>
              <Info>{titles[0].fullTitle}</Info>
              <Info>IMDB rating: {titles[0].imDbRating}</Info>
            </TitleCard>
          )}
        </TitlesWrapper>
      </Container>
    </Background>
  );
}
