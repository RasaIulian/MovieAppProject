import React from "react";
import {
  Background,
  Container,
  MoviesWrapper,
  Error,
  MovieCard,
  PosterWrapper,
  Poster,
  Info,
  Min,
  FavoriteIcon,
  Loader,
  ButtonContainer,
  ShowMoreButton,
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
  listType,
  displayedItems = [], // Ensure displayedItems is received as a prop
  handleShowMore,
}) {
  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching ? (
            <Loader>
              <span>
                Loading{" "}
                {listType === "top250"
                  ? "top 250 IMDB movies"
                  : "most popular movies"}
                ...
              </span>{" "}
            </Loader>
          ) : error ? (
            <Error>Error: {error}</Error>
          ) : !titleInfo || titleInfo.length === 0 ? (
            <Error>Please try again, no movies available.</Error>
          ) : (
            <>
              {displayedItems.map((movie) => {
                const ismoviefavorite = favoriteMovies.some(
                  (favMovie) => favMovie.id === movie.id
                );

                return (
                  <MovieCard key={movie.id}>
                    <Min size="40rem">
                      <Link
                        to={`/${movie.id}?listType=${listType}&title=${movie.originalTitle}`}
                      >
                        {/* This Link component will navigate to the movie details page */}
                        <PosterWrapper>
                          <Poster src={movie.primaryImage} />
                        </PosterWrapper>
                        <Info>Rating: {movie.averageRating}</Info>
                        <Min size="8rem">
                          <Info>{movie.originalTitle}</Info>
                        </Min>
                        <Info>
                          Release date:{" "}
                          {new Date(movie.releaseDate)
                            .toLocaleDateString("en-GB")
                            .replace(/\//g, ".")}
                        </Info>{" "}
                        <Info>Runtime: {movie.runtimeMinutes}min</Info>
                        <Min size="8rem">
                          <Info>
                            Genre:{" "}
                            {movie.genres
                              .map((genre, index) => (
                                <span key={`${genre}-${index}`}>{genre}</span>
                              ))
                              .reduce((prev, curr) => [prev, ", ", curr])}
                          </Info>
                        </Min>
                      </Link>
                    </Min>
                    <FavoriteIcon
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
            </>
          )}
        </MoviesWrapper>
        {displayedItems.length < titleInfo.length && (
          <ButtonContainer>
            <ShowMoreButton onClick={handleShowMore}>
              Show More <br />▼
            </ShowMoreButton>
          </ButtonContainer>
        )}
      </Container>
    </Background>
  );
}
