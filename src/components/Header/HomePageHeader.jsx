import React from "react";
import { Header, Logo, Container } from "./Header.style";
import { Link as DefaultLink } from "react-router-dom";
import { Input } from "./";
import { Favorites } from "./UI/Favourites/Favorites";

export function HomePageHeader({
  searchValue,
  handleSearch,
  favoriteMovies,
  toggleShowFavorites,
  handleHomeClick,
  favoritesButtonClicked,
}) {
  return (
    <Header>
      <Container>
        <DefaultLink to="/" onClick={handleHomeClick}>
          <Logo
            src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Reload Logo"
            title="Home"
          />
        </DefaultLink>

        <Favorites
          favoriteMovies={favoriteMovies}
          toggleShowFavorites={toggleShowFavorites}
        >
          Fav
        </Favorites>
        {!favoritesButtonClicked && (
          <Input
            type="search"
            placeholder=""
            id="Search"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        )}
      </Container>
    </Header>
  );
}
