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
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

// Helper function to get a user-friendly description for the list type
const getListDescription = (listType) => {
  switch (listType) {
    case "top250Movies":
      return "top 250 IMDB movies";
    case "mostPopularMovies":
      return "most popular movies";
    case "top250TV":
      return "top 250 IMDB TV series";
    case "mostPopularTV":
      return "most popular TV series";
    default:
      return "titles"; // Fallback description
  }
};

export function TitlesList({
  fetching,
  titlesInfo,
  error,
  handleFavoriteClick,
  favoriteTitles,
  listType,
  displayedItems = [],
  handleShowMore,
}) {
  const getResizedImage = (imageUrl, height = 550) => {
    return imageUrl
      ? imageUrl.replace(/\._V1_.*/, `._V1_UY${height}.jpg`)
      : `https://placehold.co/350x${height}.png?text=No+Poster&font=open-sans`;
  };
  const listDescription = getListDescription(listType); // Get description based on listType
  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching ? (
            <Loader>
              <span>Loading {listDescription}...</span>
            </Loader>
          ) : error ? (
            <Error>Error: {error}</Error>
          ) : displayedItems.length > 0 ? (
            <>
              {displayedItems.map((item, index) => {
                const isItemFavorite = favoriteTitles.some(
                  (favItem) => favItem.id === item.id
                );
                const resizedImageUrl = getResizedImage(item.primaryImage);

                return (
                  <MovieCard key={item.id}>
                    <Min size="10rem">
                      <Link
                        // Pass item details in the link state if needed, or keep query params
                        to={`/${item.id}?listType=${listType}&rank=${
                          index + 1
                        }&title=${encodeURIComponent(
                          item.originalTitle || ""
                        )}`} // Ensure title is encoded
                      >
                        <PosterWrapper>
                          <Poster
                            src={resizedImageUrl}
                            alt={`${item.originalTitle || "Title"} Poster`}
                            onError={(e) => {
                              e.target.src = item.primaryImage;
                              e.target.onerror = null;
                            }}
                          />
                        </PosterWrapper>
                        <Min size="6rem">
                          <Info>
                            {index + 1}.{"\u2002"}
                            {item.originalTitle || "N/A"}
                          </Info>
                        </Min>
                        <Info>
                          Rating:{"\u2002"}
                          {item.averageRating || "N/A"}
                        </Info>
                      </Link>
                    </Min>
                    <Min size="5rem">
                      <FavoriteIcon
                        icon={isItemFavorite ? faStarSolid : faStarRegular}
                        // Use boolean directly for styled-component prop if possible, otherwise string 'true'/'false'
                        isfavorite={isItemFavorite.toString()} // Pass as string 'true' or 'false'
                        onClick={(e) => {
                          e.stopPropagation(); // Keep stopPropagation
                          handleFavoriteClick(item); // Pass the current item
                        }}
                        title={
                          isItemFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                      />
                    </Min>
                  </MovieCard>
                );
              })}
            </>
          ) : (
            // Updated No Results Message
            <Error>
              Sorry, no {listDescription.includes("TV") ? "series" : "movies"}{" "}
              available, please try again.
            </Error>
          )}
        </MoviesWrapper>
        {displayedItems.length < titlesInfo.length && (
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
