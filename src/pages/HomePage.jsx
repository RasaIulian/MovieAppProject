import React from "react";
import { Hero, TitlesList } from "../components/sections/imdbList";
import { HomePageLayout } from "../components/Layout";
import { useGetAllTitles } from "../components/hooks";

export function HomePage() {
  const { fetching, titles, error } = useGetAllTitles();

  return (
    <HomePageLayout>
      <Hero>MOVIE DATABASE</Hero>
      <TitlesList fetching={fetching} titles={titles} error={error} />
    </HomePageLayout>
  );
}
