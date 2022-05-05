import React from "react";
import { Hero, TitlesList } from "../components/sections/imdbList";
import { HomePageLayout } from "../components/Layout";
import { useGetAllTitles } from "../components/hooks";

export function HomePage() {
  const { fetching, titles, error } = useGetAllTitles();

  console.log({ fetching, titles, error });
  return (
    <HomePageLayout>
      <Hero>Movie Database</Hero>
      <TitlesList fetching={fetching} titles={titles} error={error} />
    </HomePageLayout>
  );
}
