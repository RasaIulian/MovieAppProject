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
import logo from "./UI/Logo/logo.jpg";

export function HomePageHeader({
  searchValue,
  handleSearch,
  favoriteItems,
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
          <Logo src={logo} alt="Homepage Logo" title="Home Page" />
        </DefaultLink>

        <Favorites
          favoriteItems={favoriteItems}
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
