import React, { useState, useEffect, useCallback } from "react";
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
  const [favoriteFilterType, setFavoriteFilterType] = useState("All");

  // --- Filtering and Pagination Logic ---
  const itemsPerPage = 10;
  // 1. Initialize currentPage from sessionStorage
  const [currentPage, setCurrentPage] = useState(() => {
    // Use a unique key if needed, but 'currentPage' might suffice if resets handle context changes
    return parseInt(sessionStorage.getItem("currentPage"), 10) || 1;
  });

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
    "Film-Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Thriller",
    "War",
    "Western",
  ];

  // Reset view when clicking the "Home" or logo button
  const resetView = useCallback(() => {
    setShowFavorites(false);
    setFavoritesButtonClicked(false);
    setSearchValue("");
    setSelectedGenre("");
    // 3. Reset sessionStorage when resetting page
    setCurrentPage(1);
    sessionStorage.setItem("currentPage", "1"); // Reset persisted page
    setFavoriteFilterType("All");
    // Optionally reset content/ranking types if desired
  }, []); // Dependencies remain empty

  const handleHomeClick = () => {
    resetView();
    // Optionally force reset content/ranking types here too
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
        // Reset pagination when search term changes
        setCurrentPage(1);
        sessionStorage.setItem("currentPage", "1");
      } else {
        setFilteredTitles([]); // Clear filtered results if search is empty
        // Optionally reset pagination when search is cleared, or leave it
        // setCurrentPage(1);
        // sessionStorage.setItem("currentPage", "1");
      }
      setIsSearching(false);
    }, 300);

    debouncedSearch();

    return () => debouncedSearch.clear(); // Cleanup debounce on unmount or change
  }, [searchValue, allTitles]);

  // Effect for saving favorites to local storage (remains the same)
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
    setFavoritesButtonClicked(nextShowFavorites && favoriteItems.length > 0);

    // Reset other filters/state when toggling view
    setSearchValue("");
    setFilteredTitles([]);
    setSelectedGenre("");
    // 3. Reset sessionStorage when resetting page
    setCurrentPage(1);
    sessionStorage.setItem("currentPage", "1"); // Reset persisted page
    if (!nextShowFavorites) {
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
    const newRankingType = rankingType === "top250" ? "Popular" : "top250";
    setRankingType(newRankingType);
    sessionStorage.setItem("currentRankingType", newRankingType);
    resetView(); // Reset filters, pagination, favorites view
    setAllTitles([]); // Clear titles to trigger fetch/loading state
  };

  // --- New Handler for Favorite Filter Buttons ---
  const handleFavoriteFilterChange = (type) => {
    setFavoriteFilterType(type);
    // 3. Reset sessionStorage when resetting page
    setCurrentPage(1); // Reset pagination when filter changes
    sessionStorage.setItem("currentPage", "1"); // Reset persisted page
  };

  // --- Show More Handler ---
  const handleShowMore = () => {
    // 2. Update sessionStorage when page increases
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      sessionStorage.setItem("currentPage", nextPage.toString()); // Update persisted page
      return nextPage;
    });
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
  /* ... logic to set baseSourceList ... */
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

  // Apply genre filtering
  const genreFilteredList = filterItemsByGenre(baseSourceList, selectedGenre);

  // Apply pagination
  const displayedItems = genreFilteredList.slice(0, currentPage * itemsPerPage);

  // Determine "Show More" button visibility
  const showMoreButtonVisible =
    displayedItems.length < genreFilteredList.length;

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
        setSelectedGenre(genre);
        // 3. Reset sessionStorage when resetting page due to genre change
        setCurrentPage(1); // Reset page when genre changes
        sessionStorage.setItem("currentPage", "1"); // Reset persisted page
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
            <br></br>- {/* rankingType display logic */}
            {rankingType === "top250" ? "Top 250" : "Most Popular"}{" "}
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
          // Pass the full list *after* genre/favorite/search filtering for length check
          titlesInfo={genreFilteredList}
          error={error}
          favoriteTitles={favoriteItems}
          handleFavoriteClick={handleFavoriteClick}
          listType={listType}
          // Pass paginated items for rendering
          displayedItems={displayedItems}
          handleShowMore={handleShowMore}
          // Use the correct visibility flag based on the full filtered list
          showMoreButtonVisible={showMoreButtonVisible}
          favoritesButtonClicked={favoritesButtonClicked}
          favoriteFilterType={favoriteFilterType}
        />
      )}
      <GoToTopButton />
    </HomePageLayout>
  );
}
