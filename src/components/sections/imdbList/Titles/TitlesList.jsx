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
  displayedItems = [],
  handleShowMore,
}) {
  const getResizedImage = (imageUrl, height = 550) => {
    return imageUrl
      ? imageUrl.replace(/\._V1_.*/, `._V1_UY${height}.jpg`)
      : `https://placehold.co/350x${height}.png?text=No+Poster&font=open-sans`;
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
              </span>
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
                      <Link
                        to={`/${movie.id}?listType=${listType}&rank=${
                          index + 1
                        }&title=${movie.originalTitle}`}
                      >
                        <PosterWrapper>
                          <Poster
                            src={getResizedImage(movie.primaryImage)}
                            onError={(e) => {
                              e.target.src = movie.primaryImage;
                              e.target.onerror = null;
                            }}
                          />
                        </PosterWrapper>
                        <Min size="6rem">
                          <Info>
                            {index + 1}.{"\u2002"}
                            {movie.originalTitle || "N/A"}
                          </Info>
                        </Min>
                        <Info>
                          Rating:{"\u2002"}
                          {movie.averageRating || "N/A"}
                        </Info>
                        <Info>
                          Release date:{"\u2002"}
                          {movie.releaseDate
                            ? new Date(movie.releaseDate)
                                .toLocaleDateString("en-GB")
                                .replace(/\//g, ".")
                            : "N/A"}
                        </Info>
                        <Info>
                          Runtime:{"\u2002"}
                          {movie.runtimeMinutes
                            ? `${movie.runtimeMinutes}min`
                            : "N/A"}
                        </Info>
                        <Min size="6rem">
                          <Info>
                            Genre:{"\u2002"}
                            {movie.genres && movie.genres.length > 0
                              ? movie.genres
                                  .map((genre, index) => (
                                    <span key={`${genre}-${index}`}>
                                      {genre}
                                    </span>
                                  ))
                                  .reduce((prev, curr) => [
                                    prev,
                                    ",\u2002",
                                    curr,
                                  ])
                              : "N/A"}
                          </Info>
                        </Min>
                      </Link>
                    </Min>
                    <FavoriteIcon
                      icon={ismoviefavorite === true ? fasStar : farStar}
                      ismoviefavorite={ismoviefavorite ? "true" : "false"}
                      onClick={(e) => {
                        e.stopPropagation();
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
