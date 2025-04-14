import React, { useState, useEffect, useCallback } from "react"; // Added useCallback
import { Hero, TitlesList } from "../components/sections/imdbList";
import {
  Background,
  Container,
  MoviesWrapper,
  Loader,
  Error,
  ButtonContainer,
  MovieListButton,
} from "../components/sections/imdbList/Titles/TitlesList.style";
import { HomePageLayout } from "../components/Layout";
import { useGetTitles } from "../components/hooks/useGetTitles";
import GoToTopButton from "../components/GoTopButton/GoTopButton";

// Helper to construct listType string
const constructListType = (contentType, rankingType) => {
  const rankingPrefix = rankingType === "Popular" ? "mostPopular" : "top250";
  const contentSuffix = contentType === "Movies" ? "Movies" : "TV";
  return `${rankingPrefix}${contentSuffix}`;
};

// Helper to get title type ('movie' or 'tvSeries') from listType
const getTitleTypeFromList = (listType) => {
  if (listType.includes("Movies")) return "movie";
  if (listType.includes("TV")) return "tvSeries";
  return "unknown"; // Fallback
};

export function HomePage() {
  // --- Content/Ranking Type State ---
  const [contentType, setContentType] = useState(() => {
    return sessionStorage.getItem("currentContentType") || "Movies";
  });
  const [rankingType, setRankingType] = useState(() => {
    // Corrected default to 'top250' as per original code
    return sessionStorage.getItem("currentRankingType") || "top250";
  });

  // --- Derive listType ---
  const listType = constructListType(contentType, rankingType);

  // Fetch titles based on the derived listType
  const { fetching, titlesInfo, error } = useGetTitles(null, listType);

  // State for managing titles and filtering/searching
  const [allTitles, setAllTitles] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  // State for managing favorites
  const [favoriteItems, setFavoriteItems] = useState(
    JSON.parse(localStorage.getItem("favoriteItems")) || []
  );
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritesButtonClicked, setFavoritesButtonClicked] = useState(false);
  // --- New State for Favorite Filtering ---
  const [favoriteFilterType, setFavoriteFilterType] = useState("All"); // 'All', 'Movies', 'TV'

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
  ];

  // Reset view when clicking the "Home" or logo button
  const resetView = useCallback(() => {
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
    setFavoriteFilterType("All"); // Reset favorite filter
    // Optionally reset content/ranking types
    // setContentType('Movies');
    // setRankingType('top250');
    // sessionStorage.setItem("currentContentType", 'Movies');
    // sessionStorage.setItem("currentRankingType", 'top250');
  }, []); // No dependencies needed if setters are stable

  const handleHomeClick = () => {
    resetView();
    // If you want to force reset content/ranking types on Home click:
    // setContentType('Movies');
    // setRankingType('top250');
    // sessionStorage.setItem("currentContentType", 'Movies');
    // sessionStorage.setItem("currentRankingType", 'top250');
  };

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

  // --- Updated Handler for adding/removing favorites ---
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
      // Add the titleType when adding to favorites
      const itemToAdd = {
        ...item,
        // Infer type from the *current* listType when adding
        titleType: getTitleTypeFromList(listType),
      };
      updatedFavorites = [...favoriteItems, itemToAdd];
    }

    setFavoriteItems(updatedFavorites);

    // If showing favorites and the list becomes empty after removal, switch back
    if (showFavorites && isAlreadyFavorite && updatedFavorites.length === 0) {
      setShowFavorites(false);
      setFavoritesButtonClicked(false);
      setFavoriteFilterType("All"); // Reset filter
    }
  };

  // Handler for toggling the favorites view
  const toggleShowFavorites = () => {
    const nextShowFavorites = !showFavorites;
    setShowFavorites(nextShowFavorites);
    // Only set button clicked if showing favorites AND there are items
    setFavoritesButtonClicked(nextShowFavorites && favoriteItems.length > 0);

    // Reset other filters/state when toggling view
    setSearchValue("");
    setFilteredTitles([]);
    setSelectedGenre("");
    setCurrentPage(1);
    if (!nextShowFavorites) {
      // Reset favorite filter only when turning favorites OFF
      setFavoriteFilterType("All");
    }
  };

  // --- Toggle Handlers for Content/Ranking Type ---
  const handleContentTypeToggle = () => {
    const newContentType = contentType === "Movies" ? "TV" : "Movies";
    setContentType(newContentType);
    sessionStorage.setItem("currentContentType", newContentType);
    resetView(); // Reset filters, pagination, favorites view
    setAllTitles([]); // Clear titles to trigger fetch/loading state
  };

  const handleRankingTypeToggle = () => {
    // Corrected logic: If current is 'top250', switch to 'Popular', else switch to 'top250'
    const newRankingType = rankingType === "top250" ? "Popular" : "top250";
    setRankingType(newRankingType);
    sessionStorage.setItem("currentRankingType", newRankingType);
    resetView(); // Reset filters, pagination, favorites view
    setAllTitles([]); // Clear titles to trigger fetch/loading state
  };

  // --- New Handler for Favorite Filter Buttons ---
  const handleFavoriteFilterChange = (type) => {
    setFavoriteFilterType(type);
    setCurrentPage(1); // Reset pagination when filter changes
  };

  // --- Filtering and Pagination Logic ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Helper function to filter items by genre (keep as is)
  const filterItemsByGenre = (items, genre) => {
    if (!genre) return items || [];
    return (items || []).filter(
      (item) => item && item.genres && item.genres.includes(genre)
    );
  };

  // Determine the source list based on current view state
  let baseSourceList;
  if (favoritesButtonClicked && favoriteItems.length > 0) {
    // Filter favorites by type first
    baseSourceList = favoriteItems.filter((item) => {
      if (favoriteFilterType === "All") return true;
      // Use the titleType stored with the favorite item
      if (favoriteFilterType === "Movies") return item.titleType === "movie";
      if (favoriteFilterType === "TV") return item.titleType === "tvSeries";
      return true; // Fallback for 'unknown' or other cases
    });
  } else if (searchValue) {
    baseSourceList = filteredTitles;
  } else {
    baseSourceList = allTitles; // Use allTitles fetched by the hook
  }

  // Apply genre filtering to the (potentially favorite-filtered) base list
  const genreFilteredList = filterItemsByGenre(baseSourceList, selectedGenre);

  // Apply pagination
  const displayedItems = genreFilteredList.slice(0, currentPage * itemsPerPage);

  // Determine "Show More" button visibility
  const showMoreButtonVisible =
    displayedItems.length < genreFilteredList.length;

  // --- JSX Rendering ---
  return (
    <HomePageLayout
      searchValue={searchValue}
      handleSearch={setSearchValue}
      favoriteItems={favoriteItems}
      handleFavoriteClick={handleFavoriteClick}
      toggleShowFavorites={toggleShowFavorites}
      handleHomeClick={handleHomeClick}
      favoritesButtonClicked={favoritesButtonClicked}
      selectedGenre={selectedGenre}
      setSelectedGenre={(genre) => {
        // Reset page when genre changes
        setSelectedGenre(genre);
        setCurrentPage(1);
      }}
      genres={genres}
    >
      {/* Hero Section */}
      <Hero>
        {favoritesButtonClicked && favoriteItems.length > 0
          ? `FAVORITE ${
              // Update Hero text based on filter
              favoriteFilterType === "Movies"
                ? "MOVIES"
                : favoriteFilterType === "TV"
                ? "TV SERIES"
                : "MOVIES & TV SERIES" // Default for 'All'
            }`
          : "WELCOME TO THE MOVIE & TV DATABASE APP"}

        {/* Show main list type only when NOT viewing favorites */}
        {!favoritesButtonClicked && (
          <>
            <br></br>- {/* Corrected rankingType display logic */}
            {rankingType === "top250" ? "Top 250 Imdb" : "Most Popular"}{" "}
            {contentType === "Movies" ? "Movies" : "TV Series"} -
          </>
        )}

        {/* Button Container Logic */}
        <ButtonContainer>
          {/* Show Content/Ranking toggles only when NOT viewing favorites */}
          {!favoritesButtonClicked && (
            <>
              <MovieListButton
                onClick={handleContentTypeToggle}
                active={contentType === "Movies"} // Example active state, adjust if needed
                title={`Switch to ${
                  contentType === "Movies" ? "TV Series" : "Movies"
                }`}
              >
                {`Switch to ${
                  contentType === "Movies" ? "TV Series" : "Movies"
                }`}
              </MovieListButton>
              <MovieListButton
                onClick={handleRankingTypeToggle}
                // Corrected active state logic
                active={rankingType === "top250"}
                title={`Switch to ${
                  rankingType === "top250" ? "Popular" : "Top 250"
                }`}
              >
                {/* Corrected button text logic */}
                {`Switch to ${
                  rankingType === "top250" ? "Popular" : "Top 250"
                }`}
              </MovieListButton>
            </>
          )}

          {/* --- Show Favorite Filter Buttons --- */}
          {favoritesButtonClicked && favoriteItems.length > 0 && (
            <>
              <MovieListButton
                onClick={() => handleFavoriteFilterChange("All")}
                active={favoriteFilterType === "All"}
                title="Show All Favorites"
                favoritesButtonClicked={favoritesButtonClicked}
              >
                All
              </MovieListButton>
              <MovieListButton
                onClick={() => handleFavoriteFilterChange("Movies")}
                active={favoriteFilterType === "Movies"}
                title="Show Favorite Movies"
                favoritesButtonClicked={favoritesButtonClicked}
              >
                Movies
              </MovieListButton>
              <MovieListButton
                onClick={() => handleFavoriteFilterChange("TV")}
                active={favoriteFilterType === "TV"}
                title="Show Favorite TV Series"
                favoritesButtonClicked={favoritesButtonClicked}
              >
                TV Series
              </MovieListButton>
            </>
          )}
        </ButtonContainer>
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
        <TitlesList
          fetching={fetching && !favoritesButtonClicked && !searchValue}
          titlesInfo={genreFilteredList} // Pass the full list after all filtering for length check
          error={error}
          favoriteTitles={favoriteItems}
          handleFavoriteClick={handleFavoriteClick}
          // Pass the *original* listType for context in TitlesList if needed,
          // or adjust TitlesList if it doesn't need it when showing favorites.
          listType={listType}
          displayedItems={displayedItems} // Pass paginated items
          handleShowMore={handleShowMore}
          showMoreButtonVisible={showMoreButtonVisible}
          favoritesButtonClicked={favoritesButtonClicked}
          favoriteFilterType={favoriteFilterType}
        />
      )}
      <GoToTopButton />
    </HomePageLayout>
  );
}
