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
  const getResizedImage = (imageUrl, height = 550) => {
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
                            <Poster
                              src={getResizedImage(movie.primaryImage)}
                              onError={(e) => {
                                e.target.src = movie.primaryImage; // Fallback to the original
                                e.target.onerror = null; // Prevent infinite loop if the fallback also fails
                              }}
                            />
                          </PosterWrapper>
                        )}
                        {movie.originalTitle && (
                          <Min size="6rem">
                            <Info>
                              {index + 1}.{"\u2002"}
                              {movie.originalTitle}
                            </Info>
                          </Min>
                        )}
                        {movie.averageRating && (
                          <Info>
                            Rating:{"\u2002"}
                            {movie.averageRating}
                          </Info>
                        )}
                        {movie.releaseDate && (
                          <Info>
                            Release date:{"\u2002"}
                            {new Date(movie.releaseDate)
                              .toLocaleDateString("en-GB")
                              .replace(/\//g, ".")}
                          </Info>
                        )}
                        {movie.runtimeMinutes && (
                          <Info>
                            Runtime:{"\u2002"}
                            {movie.runtimeMinutes}min
                          </Info>
                        )}
                        {movie.genres && movie.genres.length > 0 && (
                          <Min size="6rem">
                            <Info>
                              Genre:{"\u2002"}
                              {movie.genres
                                .map((genre, index) => (
                                  <span key={`${genre}-${index}`}>{genre}</span>
                                ))
                                .reduce((prev, curr) => [
                                  prev,
                                  ",\u2002",
                                  curr,
                                ])}
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
                      title={
                        ismoviefavorite
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
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
              Show More{"\u2002"}▼
            </ShowMoreButton>
          </ButtonContainer>
        )}
      </Container>
    </Background>
  );
}
