import React, { useState, useEffect } from "react";
import { Hero, TitlesList } from "../components/sections/imdbList";
import { HomePageLayout } from "../components/Layout";
import { useGetTitles } from "../components/hooks/useGetTitles";
import GoToTopButton from "../components/GoTopButton/GoTopButton";

export function HomePage() {
  const { fetching, titleInfo, error } = useGetTitles();
  const [allTitles, setAllTitles] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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

  useEffect(() => {
    if (searchValue) {
      const lowerCaseSearch = searchValue.toLowerCase();
      const filteredTitles = allTitles.filter((movie) =>
        movie.title.toLowerCase().includes(lowerCaseSearch)
      );
      setFilteredTitles(filteredTitles);
    } else {
      setFilteredTitles([]);
    }
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
  };

  return (
    <HomePageLayout
      searchValue={searchValue}
      handleSearch={setSearchValue}
      favoriteMovies={favoriteMovies}
      handleFavoriteClick={handleFavoriteClick}
      showFavorites={showFavorites} // Pass the showFavorites state
      setShowFavorites={setShowFavorites} // Pass the setShowFavorites function
      toggleShowFavorites={toggleShowFavorites}
      handleHomeClick={handleHomeClick}
    >
      {favoritesButtonClicked && favoriteMovies.length > 0 ? (
        <Hero>FAVORITE MOVIES</Hero>
      ) : (
        <Hero>MOVIE DATABASE APP</Hero>
      )}
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
      <GoToTopButton />
    </HomePageLayout>
  );
}
