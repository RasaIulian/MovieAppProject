import React from "react";
import {
  Background,
  Container,
  MoviesWrapper,
  Loader,
  Error,
  MovieCard,
  Poster,
  Info,
} from "./TitleDetails.style";

export function TitleDetails({ fetching, titleInfo, error }) {
  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching && <Loader>Loading movie details...</Loader>}
          {error && <Error>Error: {error}</Error>}
          {!fetching && !error && (
            <MovieCard>
              <Poster src={titleInfo.image} />
              <Info>Id: {titleInfo.id}</Info>
              <Info>Title: {titleInfo.title}</Info>
              {titleInfo.originalTitle !== "" && (
                <Info>Original Title: {titleInfo.originalTitle}</Info>
              )}
              <Info>FullTitle: {titleInfo.fullTitle}</Info>
              <Info>Year: {titleInfo.year}</Info>
              <Info>ReleaseDate: {titleInfo.releaseDate}</Info>
              <Info>RuntimeMins: {titleInfo.runtimeMins}</Info>
              <Info>RuntimeStr: {titleInfo.runtimeStr}</Info>
              <Info>Plot: {titleInfo.plot}</Info>
              <Info>ReleaseDate: {titleInfo.releaseDate}</Info>
              <Info>Awards: {titleInfo.awards}</Info>
              <Info>Directors: {titleInfo.directors}</Info>
              <Info>Writers: {titleInfo.writers}</Info>
              <Info>Stars: {titleInfo.stars}</Info>
              <Info>ACTORS:</Info>
              <Info>
                Name: {titleInfo.actorList[0].name}, AsCharacter:{" "}
                {titleInfo.actorList[0].asCharacter}
              </Info>
              <Info>
                Name: {titleInfo.actorList[1].name}, AsCharacter:{" "}
                {titleInfo.actorList[1].asCharacter}
              </Info>
              <Info>
                Name:{titleInfo.actorList[2].name}, AsCharacter:{" "}
                {titleInfo.actorList[2].asCharacter}
              </Info>
              <Info>
                Name: {titleInfo.actorList[3].name}, AsCharacter:{" "}
                {titleInfo.actorList[3].asCharacter}
              </Info>
              {titleInfo.fullCast !== null && (
                <Info>FullCast: {titleInfo.fullCast}</Info>
              )}
              <Info>Genres: {titleInfo.genres}</Info>
              <Info>Companies: {titleInfo.companies}</Info>
              <Info>Countries: {titleInfo.countries}</Info>
              <Info>Languages: {titleInfo.languages}</Info>
              <Info>Content Rating: {titleInfo.contentRating}</Info>
              <Info>ImDb Rating: {titleInfo.imDbRating}</Info>
              <Info>ImDb Rating Votes: {titleInfo.imDbRatingVotes}</Info>
              <Info>Metacritic Rating: {titleInfo.metacriticRating}</Info>
              <Info>BoxOffice Budget: {titleInfo.boxOffice.budget},</Info>
              <Info>
                BoxOffice Cumulative Worldwide Gross:{" "}
                {titleInfo.boxOffice.cumulativeWorldwideGross}
              </Info>
              {titleInfo.tagline !== null && (
                <Info>Tagline: {titleInfo.tagline}</Info>
              )}
              <Info>Keywords: {titleInfo.keywords}</Info>
              {titleInfo.similars !== [] &&
                ((<Info>SIMILAR TITLES:</Info>),
                (<Info>1: {titleInfo.similars[0]}</Info>),
                (<Info>2: {titleInfo.similars[1]}</Info>),
                (<Info>3: {titleInfo.similars[2]}</Info>),
                "")}
              {titleInfo.tvSeriesInfo !== null && (
                <Info>Tv Series Info: {titleInfo.tvSeriesInfo}</Info>
              )}
              {titleInfo.tvEpisodeInfo !== null && (
                <Info>Tv Episode Info: {titleInfo.tvEpisodeInfo}</Info>
              )}
            </MovieCard>
          )}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
