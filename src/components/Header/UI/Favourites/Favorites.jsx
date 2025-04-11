import React from "react";
import {
  FavoriteIcon,
  Info,
} from "../../../sections/imdbList/Titles/TitlesList.style";
import { FavoritesStyle } from "./Favorites.style";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Container, Nav } from "../../Header.style";

export const Favorites = ({ favoriteItems, toggleShowFavorites }) => {
  // Ensure favoriteItems is an array before accessing length
  const items = favoriteItems || [];
  const hasFavorites = items.length > 0;

  return (
    <Container>
      <Nav>
        <FavoritesStyle
          onClick={toggleShowFavorites}
          data-favorites={hasFavorites ? items.length : ""}
          title={
            hasFavorites
              ? `${items.length} Favorite${items.length !== 1 ? "s" : ""}`
              : "No favorite titles selected."
          }
        >
          <Info>Fav&nbsp;</Info>
          <FavoriteIcon
            icon={hasFavorites ? faStarSolid : faStarRegular}
            isfavorite={hasFavorites.toString()}
          />
        </FavoritesStyle>
      </Nav>
    </Container>
  );
};
