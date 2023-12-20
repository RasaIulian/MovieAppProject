import React, { useState } from "react";
import { HomePageHeader } from "../Header";
import { Footer } from "../Footer";

export function HomePageLayout({ children }) {
  const [searchValue, setSearchValue] = useState("");
  function handleSearch(searchTerm) {
    setSearchValue(searchTerm);
    const lowerCaseSearch = searchTerm.toString().toLowerCase();
    console.log(lowerCaseSearch);
  }
  return (
    <>
      <HomePageHeader searchValue={searchValue} handleSearch={handleSearch} />
      {children}
      <Footer />
    </>
  );
}
