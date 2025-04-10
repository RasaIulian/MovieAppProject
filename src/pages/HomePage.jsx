import React, { useState, useEffect } from "react";
import { Hero, TitlesList } from "../components/sections/imdbList";
import {
  Background,
  Container,
  MoviesWrapper, // Keep this name for styled-component consistency
  Loader,
  Error,
  ButtonContainer,
  MovieListButton, // We can reuse this styled component
} from "../components/sections/imdbList/Titles/TitlesList.style";
import { HomePageLayout } from "../components/Layout";
import { useGetTitles } from "../components/hooks/useGetTitles";
import GoToTopButton from "../components/GoTopButton/GoTopButton";

// Helper to construct listType string
const constructListType = (contentType, rankingType) => {
  const rankingPrefix = rankingType === "Popular" ? "mostPopular" : "top250";
  const contentSuffix = contentType === "Movies" ? "Movies" : "TV";
  return `${rankingPrefix}${contentSuffix}`; // e.g., "mostPopularMovies", "top250TV"
};

export function HomePage() {
  // --- New State Variables ---
  const [contentType, setContentType] = useState(() => {
    return sessionStorage.getItem("currentContentType") || "Movies"; // Default to Movies
  });
  const [rankingType, setRankingType] = useState(() => {
    return sessionStorage.getItem("currentRankingType") || "Popular"; // Default to Popular
  });

  // --- Derive listType ---
  const listType = constructListType(contentType, rankingType);

  // Fetch titles based on the derived listType
  const { fetching, titlesInfo, error } = useGetTitles(null, listType);

  // State for managing titles and filtering/searching
  const [allTitles, setAllTitles] = useState([]); // Holds the raw data from the hook
  const [filteredTitles, setFilteredTitles] = useState([]); // Holds search results
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(""); // State for selected genre

  // State for managing favorites
  const [favoriteItems, setFavoriteItems] = useState(
    // Renamed for clarity
    JSON.parse(localStorage.getItem("favoriteItems")) || [] // Load favorites from local storage
  );
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritesButtonClicked, setFavoritesButtonClicked] = useState(false);

  // Available genres for filtering dropdown
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
    "War",
    "Western",
  ]; // Expanded genre list

  // Reset view when clicking the "Home" or logo button
  const handleHomeClick = () => {
    setShowFavorites(false);
    setFavoritesButtonClicked(false);
    // Optionally reset content/ranking types to default or keep current
    // setContentType('Movies');
    // setRankingType('Popular');
    // sessionStorage.setItem("currentContentType", 'Movies');
    // sessionStorage.setItem("currentRankingType", 'Popular');
    setSearchValue("");
    setSelectedGenre("");
    setCurrentPage(1);
  };

  // Update allTitles when data from the hook changes
  useEffect(() => {
    setAllTitles(titlesInfo || []); // Ensure it's an array even if titlesInfo is null/undefined initially
  }, [titlesInfo]);

  // Debounce function utility
  function debounce(func, wait) {
    let timeout;
    const debounced = (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
    debounced.clear = () => clearTimeout(timeout);
    return debounced;
  }

  // Effect for handling search input with debounce
  useEffect(() => {
    setIsSearching(true);
    const debouncedSearch = debounce(() => {
      if (searchValue) {
        const lowerCaseSearch = searchValue.toLowerCase();
        // Filter based on originalTitle, ensure item and originalTitle exist
        const results = (allTitles || []).filter(
          (item) =>
            item &&
            item.originalTitle &&
            item.originalTitle.toLowerCase().includes(lowerCaseSearch)
        );
        setFilteredTitles(results);
      } else {
        setFilteredTitles([]); // Clear filtered results if search is empty
      }
      setIsSearching(false);
    }, 300); // 300ms delay

    debouncedSearch();

    return () => debouncedSearch.clear(); // Cleanup debounce on unmount or change
  }, [searchValue, allTitles]);

  // Effect for saving favorites to local storage
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  // Handler for adding/removing favorites
  const handleFavoriteClick = (item) => {
    const isAlreadyFavorite = favoriteItems.some(
      (favItem) => favItem.id === item.id
    );
    let updatedFavorites;

    if (isAlreadyFavorite) {
      updatedFavorites = favoriteItems.filter(
        (favItem) => favItem.id !== item.id
      );
    } else {
      updatedFavorites = [...favoriteItems, item];
    }

    setFavoriteItems(updatedFavorites);

    // If showing favorites and the list becomes empty, switch back to the main list view
    if (showFavorites && updatedFavorites.length === 0) {
      setShowFavorites(false);
      setFavoritesButtonClicked(false);
    }
  };

  // Handler for toggling the favorites view
  const toggleShowFavorites = () => {
    const nextShowFavorites = !showFavorites;
    setShowFavorites(nextShowFavorites);
    setFavoritesButtonClicked(nextShowFavorites && favoriteItems.length > 0);

    // If switching view, clear search, genre, and reset pagination
    setSearchValue("");
    setFilteredTitles([]);
    setSelectedGenre("");
    setCurrentPage(1);
  };

  // --- New Toggle Handlers ---
  const handleContentTypeToggle = () => {
    const newContentType = contentType === "Movies" ? "TV" : "Movies";
    setContentType(newContentType);
    sessionStorage.setItem("currentContentType", newContentType);
    // Reset filters and pagination when content type changes
    setAllTitles([]);
    setFilteredTitles([]);
    setSearchValue("");
    setSelectedGenre("");
    setCurrentPage(1);
    setShowFavorites(false);
    setFavoritesButtonClicked(false);
  };

  const handleRankingTypeToggle = () => {
    const newRankingType = rankingType === "Popular" ? "Top250" : "Popular";
    setRankingType(newRankingType);
    sessionStorage.setItem("currentRankingType", newRankingType);
    // Reset filters and pagination when ranking type changes
    setAllTitles([]);
    setFilteredTitles([]);
    setSearchValue("");
    setSelectedGenre("");
    setCurrentPage(1);
    setShowFavorites(false);
    setFavoritesButtonClicked(false);
  };

  // --- Filtering and Pagination Logic ---

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Helper function to filter items by genre
  const filterItemsByGenre = (items, genre) => {
    if (!genre) return items || []; // Return empty array if items is null/undefined
    // Ensure item and item.genres exist before filtering
    return (items || []).filter(
      (item) => item && item.genres && item.genres.includes(genre)
    );
  };

  // Determine the source list based on current view state
  const sourceList =
    favoritesButtonClicked && favoriteItems.length > 0
      ? favoriteItems
      : searchValue
      ? filteredTitles
      : allTitles; // Use allTitles fetched by the hook

  // Apply genre filtering to the source list
  const genreFilteredList = filterItemsByGenre(sourceList, selectedGenre);

  // Apply pagination to the genre-filtered list
  const displayedItems = genreFilteredList.slice(0, currentPage * itemsPerPage);

  // Determine if the "Show More" button should be visible
  const showMoreButtonVisible =
    displayedItems.length < genreFilteredList.length;

  // --- JSX Rendering ---

  return (
    <HomePageLayout
      searchValue={searchValue}
      handleSearch={setSearchValue}
      favoriteItems={favoriteItems} // Pass renamed prop
      handleFavoriteClick={handleFavoriteClick}
      showFavorites={showFavorites}
      setShowFavorites={setShowFavorites} // This might not be needed if toggle is used
      toggleShowFavorites={toggleShowFavorites}
      handleHomeClick={handleHomeClick}
      favoritesButtonClicked={favoritesButtonClicked}
      selectedGenre={selectedGenre}
      setSelectedGenre={setSelectedGenre}
      genres={genres}
    >
      {/* Hero Section */}
      <Hero>
        {favoritesButtonClicked && favoriteItems.length > 0
          ? "FAVORITE TITLES" // More generic title
          : "WELCOME TO THE MOVIE & TV DATABASE APP"}
        {!favoritesButtonClicked && (
          <>
            <br></br>-{" "}
            {rankingType === "Popular" ? "Most Popular" : "Top 250 Imdb"}{" "}
            {contentType === "Movies" ? "Movies" : "TV Series"} -
          </>
        )}
        {/* Updated Title */}
        {/* Show list type buttons only when not viewing favorites */}
        {!favoritesButtonClicked && (
          <ButtonContainer>
            {/* --- New Toggle Buttons --- */}
            <MovieListButton
              onClick={handleContentTypeToggle}
              // Highlight based on current contentType
              active={contentType === "Movies"}
              title={`Switch to ${
                contentType === "Movies" ? "TV Series" : "Movies"
              }`}
            >
              {`Switch to ${contentType === "Movies" ? "TV Series" : "Movies"}`}
            </MovieListButton>
            <MovieListButton
              onClick={handleRankingTypeToggle}
              // Highlight based on current rankingType
              active={rankingType === "Popular"}
              title={`Switch to ${
                rankingType === "Popular" ? "Top 250" : "Popular"
              }`}
            >
              {`Switch to ${rankingType === "Popular" ? "Top 250" : "Popular"}`}
            </MovieListButton>
            {/* --- End New Toggle Buttons --- */}
          </ButtonContainer>
        )}
      </Hero>

      {/* Content Area */}
      {searchValue && isSearching ? (
        // Loading state specific to search
        <Background>
          <Container>
            <MoviesWrapper>
              <Loader>Searching...</Loader>
            </MoviesWrapper>
          </Container>
        </Background>
      ) : searchValue && !isSearching && filteredTitles.length === 0 ? (
        // No search results state
        <Background>
          <Container>
            <MoviesWrapper>
              <Error>
                Sorry, no {contentType === "Movies" ? "movies" : "TV series"}{" "}
                found for "{searchValue}", please try again.
              </Error>
            </MoviesWrapper>
          </Container>
        </Background>
      ) : (
        // Display TitlesList (handles main loading/error/content)
        <TitlesList
          fetching={fetching} // Pass main fetching state
          titlesInfo={genreFilteredList} // Pass the full genre-filtered list for length check inside TitlesList
          error={error} // Pass main error state
          favoriteTitles={favoriteItems} // Pass renamed prop
          handleFavoriteClick={handleFavoriteClick}
          listType={listType} // Pass the derived listType
          displayedItems={displayedItems} // Pass only the items to display
          handleShowMore={handleShowMore}
          showMoreButtonVisible={showMoreButtonVisible} // Pass visibility flag
        />
      )}
      <GoToTopButton />
    </HomePageLayout>
  );
}
