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
                (favMovie) => favMovie._id === movie._id
              );

              return (
                <MovieCard key={movie._id}>
                  <Min size="40rem">
                    <Link to={`/${movie._id}`}>
                      {/* This Link component will navigate to the movie details page */}

                      <Min size="25rem">
                        <Poster src={movie.poster_path} />
                      </Min>
                      <Min size="8rem">
                        <Info>{movie.title}</Info>
                      </Min>
                      <Info>Release date: {movie.release_date}</Info>
                      <Info>Id: {movie._id}</Info>
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
