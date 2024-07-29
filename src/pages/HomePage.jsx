import React, { useState, useEffect } from "react";
import { Hero, TitlesList } from "../components/sections/imdbList";
import {
  Background,
  Container,
  MoviesWrapper,
  Loader,
  Error,
} from "../components/sections/imdbList/Titles/TitlesList.style";
import { HomePageLayout } from "../components/Layout";
import { useGetTitles } from "../components/hooks/useGetTitles";
import GoToTopButton from "../components/GoTopButton/GoTopButton";

export function HomePage() {
  const { fetching, titleInfo, error } = useGetTitles();
  const [allTitles, setAllTitles] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favoriteMovies")) || []
  ); // Load favorite movies from local storage
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritesButtonClicked, setFavoritesButtonClicked] = useState(false);

  const handleHomeClick = () => {
    setShowFavorites(false); // Reset showFavorites state
    setFavoritesButtonClicked(false); // Reset favoritesButtonClicked state
  };
  useEffect(() => {
    setAllTitles(titleInfo);
  }, [titleInfo]);

  function debounce(func, wait) {
    let timeout;

    const debounced = (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };

    debounced.clear = function () {
      clearTimeout(timeout);
    };

    return debounced;
  }

  useEffect(() => {
    setIsSearching(true);
    const debouncedSearch = debounce(() => {
      if (searchValue) {
        const lowerCaseSearch = searchValue.toLowerCase();
        const filteredTitles = allTitles.filter((movie) =>
          movie.title.toLowerCase().includes(lowerCaseSearch)
        );
        setFilteredTitles(filteredTitles);
        setIsSearching(false);
      } else {
        setFilteredTitles([]);
        setIsSearching(false);
      }
    }, 300);
    debouncedSearch();

    return () => {
      debouncedSearch.clear();
    };
  }, [searchValue, allTitles]);

  useEffect(() => {
    // Save favorite movies to local storage whenever they are updated
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const handleFavoriteClick = (movie) => {
    const isAlreadyFavorite = favoriteMovies.some(
      (favMovie) => favMovie._id === movie._id
    );

    if (isAlreadyFavorite) {
      setFavoriteMovies(
        favoriteMovies.filter((favMovie) => favMovie._id !== movie._id)
      );

      // Check if there are any favorite movies left after removing the current movie
      if (favoriteMovies.length === 0) {
        setShowFavorites(false); // No favorite movies left, hide favorites
      }
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);

      // Set showFavorites to true when adding the first favorite movie
      if (!showFavorites) {
        setShowFavorites(true);
      }
    }
  };

  const toggleShowFavorites = () => {
    setShowFavorites((prevShowFavorites) => !prevShowFavorites);
    favoriteMovies.length > 0
      ? setFavoritesButtonClicked(
          (prevFavoritesButtonClicked) => !prevFavoritesButtonClicked
        )
      : setFavoritesButtonClicked(false);
    if (!favoritesButtonClicked) {
      // If we're switching to show favorites, clear the search
      setSearchValue("");
      setFilteredTitles([]);
    }
  };

  return (
    <HomePageLayout
      searchValue={searchValue}
      handleSearch={setSearchValue}
      favoriteMovies={favoriteMovies}
      handleFavoriteClick={handleFavoriteClick}
      showFavorites={showFavorites}
      setShowFavorites={setShowFavorites}
      toggleShowFavorites={toggleShowFavorites}
      handleHomeClick={handleHomeClick}
      favoritesButtonClicked={favoritesButtonClicked}
    >
      {favoritesButtonClicked && favoriteMovies.length > 0 ? (
        <Hero>FAVORITE MOVIES</Hero>
      ) : (
        <Hero>MOVIE DATABASE APP</Hero>
      )}
      {searchValue && isSearching ? (
        <Background>
          <Container>
            <MoviesWrapper>
              <Loader>Searching...</Loader>
            </MoviesWrapper>
          </Container>
        </Background>
      ) : searchValue && !isSearching && filteredTitles.length === 0 ? (
        <Background>
          <Container>
            <MoviesWrapper>
              <Error>No movies found for "{searchValue}"</Error>
            </MoviesWrapper>
          </Container>
        </Background>
      ) : (
        <TitlesList
          fetching={fetching}
          titleInfo={
            favoritesButtonClicked && favoriteMovies.length > 0
              ? favoriteMovies
              : searchValue
              ? filteredTitles
              : titleInfo
          }
          error={error}
          favoriteMovies={favoriteMovies}
          handleFavoriteClick={handleFavoriteClick}
          searchValue={searchValue}
        />
      )}
      <GoToTopButton />
    </HomePageLayout>
  );
}
