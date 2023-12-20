import React from "react";
import { Hero, TitlesList } from "../components/sections/imdbList";
import { HomePageLayout } from "../components/Layout";
import { useGetTitles } from "../components/hooks/useGetTitles";

export function HomePage() {
  const { fetching, titleInfo, error } = useGetTitles();

  // const allTitles = [...titleInfo];
  // // const filteredTitles = allTitles.filter(({ fullTitle }) =>
  // //   searchValue === "" ? fullTitle.includes(searchValue) : fullTitle
  // );

  return (
    <HomePageLayout>
      <Hero>MOVIE DATABASE APP</Hero>
      <TitlesList
        fetching={fetching}
        // titleInfo={filteredTitles}
        titleInfo={titleInfo}
        error={error}
      />
    </HomePageLayout>
  );
}
