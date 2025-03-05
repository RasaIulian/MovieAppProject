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
  // reduce img size to improve load time
  const getResizedImage = (imageUrl, height = 360) => {
    if (!imageUrl) return "";
    return imageUrl.replace(/\._V1_.*/, `._V1_UY${height}.jpg`);
  };

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
            <Error>Sorry, no movies available, please try again.</Error>
          ) : (
            <>
              {displayedItems.map((movie, index) => {
                const ismoviefavorite = favoriteMovies.some(
                  (favMovie) => favMovie.id === movie.id
                );

                return (
                  <MovieCard key={movie.id}>
                    <Min size="10rem">
                      {/* This Link component will navigate to the movie details page */}
                      <Link
                        to={`/${movie.id}?listType=${listType}&rank=${
                          index + 1
                        }&title=${movie.originalTitle}`}
                      >
                        {movie.primaryImage && (
                          <PosterWrapper>
                            <Poster src={getResizedImage(movie.primaryImage)} />
                          </PosterWrapper>
                        )}

                        {movie.originalTitle && (
                          <Min size="6rem">
                            <Info>
                              {index + 1}.{movie.originalTitle}
                            </Info>
                          </Min>
                        )}
                        {movie.averageRating && (
                          <Info>Rating: {movie.averageRating}</Info>
                        )}
                        {movie.releaseDate && (
                          <Info>
                            Release date:{" "}
                            {new Date(movie.releaseDate)
                              .toLocaleDateString("en-GB")
                              .replace(/\//g, ".")}
                          </Info>
                        )}
                        {movie.runtimeMinutes && (
                          <Info>Runtime: {movie.runtimeMinutes}min</Info>
                        )}
                        {movie.genres && movie.genres.length > 0 && (
                          <Min size="6rem">
                            <Info>
                              Genre:{" "}
                              {movie.genres
                                .map((genre, index) => (
                                  <span key={`${genre}-${index}`}>{genre}</span>
                                ))
                                .reduce((prev, curr) => [prev, ", ", curr])}
                            </Info>
                          </Min>
                        )}
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
