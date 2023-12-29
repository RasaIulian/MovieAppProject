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
  function removeSpaces(str) {
    return str.replace(/\s/g, ""); // Using a regular expression to replace all spaces globally
  }

  return (
    <Background>
      <Container>
        {/* <Title>Top 250 Movies based on IMDB Rating</Title> */}
        <MoviesWrapper>
          {fetching && <Loader>Loading movies...</Loader>}
          {error && <Error>Error: {error}</Error>}
          {!fetching &&
            !error &&
            titleInfo.length > 0 &&
            titleInfo.map((movie) => (
              <MovieCard to={`/${movie._id}`} key={movie._id}>
                <Min size="25rem">
                  <Poster src={movie.poster_path} />
                </Min>
                <Min size="8rem">
                  <Info>{movie.title}</Info>
                </Min>
                <Info>Release date: {movie.release_date}</Info>
                <Info>Id: {movie._id}</Info>
              </MovieCard>
            ))}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
