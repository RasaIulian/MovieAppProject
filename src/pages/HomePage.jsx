import React, { useState, useEffect } from "react";
import { Hero, TitlesList } from "../components/sections/imdbList";
import { HomePageLayout } from "../components/Layout";
import { useGetTitles } from "../components/hooks/useGetTitles";

export function HomePage() {
  const { fetching, titleInfo, error } = useGetTitles();
  const [allTitles, setAllTitles] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);
  console.log("allTitles: ", allTitles);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setAllTitles([...titleInfo]);
  }, [titleInfo]);

  function handleSearch(searchTerm) {
    setSearchValue(searchTerm);
    const lowerCaseSearch = searchTerm.toString().toLowerCase();
    console.log("lowerCaseSearch: ", lowerCaseSearch);
    console.log("searchValue: ", searchValue);

    const filteredTitles = allTitles.filter((movie) =>
      lowerCaseSearch !== ""
        ? movie.title.toLowerCase().includes(lowerCaseSearch)
        : allTitles
    );
    setFilteredTitles(filteredTitles);
    console.log("filteredTitles: ", filteredTitles);
  }

  return (
    <HomePageLayout searchValue={searchValue} handleSearch={handleSearch}>
      <Hero>MOVIE DATABASE APP</Hero>
      <TitlesList
        fetching={fetching}
        titleInfo={searchValue ? filteredTitles : titleInfo}
        error={error}
      />
    </HomePageLayout>
  );
}
