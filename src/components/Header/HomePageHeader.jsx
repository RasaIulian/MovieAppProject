import React from "react";
import {
  Header,
  Logo,
  Container,
  GenreContainer,
  GenreSelect,
  Option,
} from "./Header.style";
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
  selectedGenre,
  setSelectedGenre,
  genres,
}) {
  return (
    <Header>
      <Container>
        <DefaultLink to="/" onClick={handleHomeClick}>
          <Logo
            src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
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

        <GenreContainer>
          <GenreSelect
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <Option value="" title="Genres filter">
              All Genres
            </Option>
            {genres &&
              genres.map((genre) => (
                <Option key={genre} value={genre}>
                  {genre}
                </Option>
              ))}
          </GenreSelect>
        </GenreContainer>

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
