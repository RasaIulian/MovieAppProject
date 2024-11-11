import React from "react";
import {
  Background,
  Container,
  MoviesWrapper,
  Loader,
  Error,
  MovieCard,
  PosterWrapper,
  Poster,
  Info,
  Min,
  FavoriteButton,
} from "./TitlesList.style";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export function TitlesList({
  fetching,
  titleInfo,
  error,
  handleFavoriteClick,
  favoriteMovies,
}) {
  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching && <Loader>Loading movies...</Loader>}
          {error && <Error>Error: {error}</Error>}
          {!fetching &&
            !error &&
            titleInfo.length > 0 &&
            titleInfo.map((movie) => {
              const ismoviefavorite = favoriteMovies.some(
                (favMovie) => favMovie.imdbid === movie.imdbid
              );

              return (
                <MovieCard key={movie.rank}>
                  <Min size="40rem">
                    <Link to={`/${movie.rank}`}>
                      {/* This Link component will navigate to the movie details page */}

                      <PosterWrapper>
                        <Poster src={movie.image} />
                      </PosterWrapper>
                      <Info>Rank: {movie.rank}</Info>
                      <Min size="8rem">
                        <Info>{movie.title}</Info>
                      </Min>
                      <Info>Release year: {movie.year}</Info>
                      <Info>Rating: {movie.rating}</Info>
                      <Info>
                        Genres:{" "}
                        {movie.genre
                          .map((g, index) => <span key={index}>{g}</span>)
                          .reduce((prev, curr) => [prev, ", ", curr])}
                      </Info>
                    </Link>
                  </Min>
                  <FavoriteButton
                    icon={ismoviefavorite === true ? fasStar : farStar}
                    ismoviefavorite={ismoviefavorite ? "true" : "false"}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent propagation to the parent link
                      handleFavoriteClick(movie);
                    }}
                    title="Add/Remove Favourite"
                  />
                </MovieCard>
              );
            })}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
