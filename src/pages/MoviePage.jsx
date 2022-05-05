import React from "react";
import { MovieLayout } from "../components/Layout";
import { Hero } from "../components/sections/imdbList";
import { TitleDetails } from "../components/sections/TitleDetails";
import { useParams } from "react-router-dom";
import { useGetAllTitles } from "../components/hooks";

export function MoviePage() {
  const { fetching, titles, error } = useGetAllTitles();
  const { fullTitle } = useParams();

  return (
    <MovieLayout>
      <Hero>{fullTitle} - Movie details</Hero>
      <TitleDetails fetching={fetching} titles={titles} error={error} />
    </MovieLayout>
  );
}
