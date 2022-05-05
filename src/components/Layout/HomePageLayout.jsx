import React from "react";
import { HomePageHeader } from "../Header";

export function HomePageLayout({ children }) {
  return (
    <>
      <HomePageHeader />
      {children}
    </>
  );
}
