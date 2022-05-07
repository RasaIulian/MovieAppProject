import React from "react";
import {
  Background,
  Container,
  TitlesWrapper,
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
        <TitlesWrapper>
          {fetching && <Loader>Loading movie details...</Loader>}
          {error && <Error>{error}</Error>}
          {!fetching && !error && (
            <TitleCard>
              <Poster src={titles[0].image} />
              <Info>{titles[0].fullTitle}</Info>
              <Info>Rank: {titles[0].rank}</Info>
              <Info>IMDB rating: {titles[0].imDbRating}</Info>
            </TitleCard>
          )}
        </TitlesWrapper>
      </Container>
    </Background>
  );
}
