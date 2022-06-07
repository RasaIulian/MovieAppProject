import React from "react";
import { Hero, TitlesList } from "../components/sections/imdbList";
import { HomePageLayout } from "../components/Layout";
import { useGetTitles } from "../components/hooks/useGetTitles";

export function HomePage() {
  const { fetching, titleInfo, error } = useGetTitles();

  return (
    <HomePageLayout>
      <Hero>MOVIE DATABASE APP</Hero>
      <TitlesList fetching={fetching} titleInfo={titleInfo} error={error} />
    </HomePageLayout>
  );
}
