import React from "react";
import { MovieHeader } from "../Header";

export function MovieLayout({ children }) {
  return (
    <>
      <MovieHeader />
      {children}
    </>
  );
}
