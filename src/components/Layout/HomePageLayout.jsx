import React /*, { useState }*/ from "react";
import { HomePageHeader } from "../Header";
import { Footer } from "../Footer";

export function HomePageLayout({ children, searchValue, handleSearch }) {
  return (
    <>
      <HomePageHeader searchValue={searchValue} handleSearch={handleSearch} />
      {children}
      <Footer />
    </>
  );
}
