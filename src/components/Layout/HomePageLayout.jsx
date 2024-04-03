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
}) {
  return (
    <>
      <HomePageHeader
        searchValue={searchValue}
        handleSearch={handleSearch}
        favoriteMovies={favoriteMovies}
        toggleShowFavorites={toggleShowFavorites}
        handleHomeClick={handleHomeClick}
      />
      {children}
      <Footer />
    </>
  );
}
