import React from "react";
import { MovieHeader } from "../Header";
import { Footer } from "../Footer";

export function MovieLayout({ children }) {
  return (
    <>
      <MovieHeader />
      {children}
      <Footer />
    </>
  );
}
