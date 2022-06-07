import React from "react";
import { MovieLayout } from "../components/Layout";
import { Hero } from "../components/sections/imdbList";
import { TitleDetails } from "../components/sections/TitleDetails";
import { useParams } from "react-router-dom";
import { useGetTitles } from "../components/hooks/useGetTitles";

export function MoviePage() {
  const { id } = useParams();
  const { fetching, titleInfo, error } = useGetTitles(id);

  return (
    <MovieLayout>
      <Hero>{titleInfo.fullTitle} - Movie details</Hero>
      <TitleDetails fetching={fetching} titleInfo={titleInfo} error={error} />
    </MovieLayout>
  );
}
