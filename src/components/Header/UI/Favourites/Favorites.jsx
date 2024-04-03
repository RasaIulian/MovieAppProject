import React from "react";
import {
  FavoriteButton,
  Info,
} from "../../../sections/imdbList/Titles/TitlesList.style";
import { FavoritesStyle } from "./Favorites.style";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav } from "../../Header.style";

export const Favorites = ({ favoriteMovies, toggleShowFavorites }) => {
  const isfavorite = favoriteMovies.length > 0;
  const handleClick = () => {
    toggleShowFavorites();
  };
  return (
    <Container>
      <Nav>
        <FavoritesStyle
          onClick={handleClick}
          data-favorites={
            favoriteMovies.length > 0 ? favoriteMovies.length : ""
          }
          title={
            isfavorite
              ? favoriteMovies.length + " Favorites"
              : "No favorite movies selected."
          }
        >
          <Info>Favorites</Info>
          <FavoriteButton
            icon={isfavorite ? fasStar : farStar}
            isfavorite={isfavorite}
          />
        </FavoritesStyle>
      </Nav>
    </Container>
  );
};
