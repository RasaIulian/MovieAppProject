import React from "react";
import { MovieLayout } from "../components/Layout";
import { Hero } from "../components/sections/imdbList";
import { TitleDetails } from "../components/sections/TitleDetails";
import { useParams, useLocation } from "react-router-dom";
import { useGetTitles } from "../components/hooks/useGetTitles";

export function MoviePage() {
  const { id } = useParams();
  const location = useLocation();
  const listType =
    new URLSearchParams(location.search).get("listType") || "top250";
  const { fetching, titleInfo, error } = useGetTitles(id, listType);

  // Debugging logs
  // console.log("MoviePage - Fetching:", fetching);
  // console.log("MoviePage - Title Info:", titleInfo);
  // console.log("MoviePage - Error:", error);

  return (
    <MovieLayout>
      <Hero>{titleInfo.primaryTitle}</Hero>
      <TitleDetails fetching={fetching} titleInfo={titleInfo} error={error} />
    </MovieLayout>
  );
}
