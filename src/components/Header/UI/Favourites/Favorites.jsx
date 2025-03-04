import React from "react";
import {
  FavoriteIcon,
  Info,
} from "../../../sections/imdbList/Titles/TitlesList.style";
import { FavoritesStyle } from "./Favorites.style";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav } from "../../Header.style";

export const Favorites = ({ favoriteMovies, toggleShowFavorites }) => {
  const ismoviefavorite = favoriteMovies.length > 0;
  return (
    <Container>
      <Nav>
        <FavoritesStyle
          onClick={toggleShowFavorites}
          data-favorites={ismoviefavorite ? favoriteMovies.length : ""}
          title={
            ismoviefavorite === true
              ? favoriteMovies.length + " Favorites"
              : "No favorite movies selected."
          }
        >
          <Info>Fav&nbsp;</Info>
          <FavoriteIcon
            icon={ismoviefavorite === true ? fasStar : farStar}
            ismoviefavorite={ismoviefavorite ? "true" : "false"}
          />
        </FavoritesStyle>
      </Nav>
    </Container>
  );
};
