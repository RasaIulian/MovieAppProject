import React from "react";
import { HomePageHeader } from "../Header";
import { Footer } from "../Footer";

export function HomePageLayout({
  children,
  searchValue,
  handleSearch,
  handleHomeClick,
  favoriteItems,
  toggleShowFavorites,
  favoritesButtonClicked,
  selectedGenre, // Add selectedGenre prop
  setSelectedGenre, // Add setSelectedGenre prop
  genres, // Add genres prop
}) {
  return (
    <>
      <HomePageHeader
        searchValue={searchValue}
        handleSearch={handleSearch}
        favoriteItems={favoriteItems}
        toggleShowFavorites={toggleShowFavorites}
        handleHomeClick={handleHomeClick}
        favoritesButtonClicked={favoritesButtonClicked}
        selectedGenre={selectedGenre} // Pass selectedGenre prop
        setSelectedGenre={setSelectedGenre} // Pass setSelected
        genres={genres} // Pass genres prop
      />
      {children}
      <Footer />
    </>
  );
}
