import React from "react";
import { HomePageHeader } from "../Header";
import { Footer } from "../Footer";

export function HomePageLayout({ children }) {
  return (
    <>
      <HomePageHeader />
      {children}
      <Footer />
    </>
  );
}
