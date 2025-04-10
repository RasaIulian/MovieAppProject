import React from "react";
import { MovieLayout } from "../components/Layout";
import { Hero } from "../components/sections/imdbList";
import { TitleDetails } from "../components/sections/TitleDetails";
import { useParams, useLocation } from "react-router-dom";
import { useGetTitles } from "../components/hooks/useGetTitles";

export function MoviePage() {
  const { id } = useParams();
  const listType =
    new URLSearchParams(useLocation().search).get("listType") || "";
  const rank = new URLSearchParams(useLocation().search).get("rank");
  const title = new URLSearchParams(useLocation().search).get("title");
  const { fetching, titlesInfo, error } = useGetTitles(id, listType);

  // Debugging logs
  // console.log("MoviePage - Fetching:", fetching);
  // console.log("MoviePage - Title Info:", titlesInfo);
  // console.log("MoviePage - Error:", error);

  return (
    <MovieLayout>
      <Hero>
        {titlesInfo.primaryTitle && rank
          ? `${rank}. ${title}`
          : titlesInfo.primaryTitle && titlesInfo.primaryTitle}
      </Hero>
      <TitleDetails fetching={fetching} titlesInfo={titlesInfo} error={error} />
    </MovieLayout>
  );
}
