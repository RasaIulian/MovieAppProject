import React from "react";
import { HomePageHeader } from "../Header";
import { Footer } from "../Footer";

export function HomePageLayout({
  children,
  searchValue,
  handleSearch,
  handleHomeClick,
  favoriteMovies,
  toggleShowFavorites,
  favoritesButtonClicked,
}) {
  return (
    <>
      <HomePageHeader
        searchValue={searchValue}
        handleSearch={handleSearch}
        favoriteMovies={favoriteMovies}
        toggleShowFavorites={toggleShowFavorites}
        handleHomeClick={handleHomeClick}
        favoritesButtonClicked={favoritesButtonClicked}
      />
      {children}
      <Footer />
    </>
  );
}
