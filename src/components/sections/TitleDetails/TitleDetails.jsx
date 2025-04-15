import React from "react";
import { useLocation } from "react-router-dom";
import {
  Background,
  Container,
  MoviesWrapper,
  Loader,
  Error,
  MovieCard,
  Poster,
  InfoCard,
  Info,
  ImdbLink as Link,
  TrailerContainer,
  Trailer,
} from "./TitleDetails.style";

// Helper function to extract YouTube Video ID and create embed URL
const getYouTubeEmbedUrl = (watchUrl) => {
  // ... (keep existing helper function)
  if (!watchUrl) return null;
  try {
    const url = new URL(watchUrl);
    let videoId = null;

    if (url.hostname.includes("youtube.com")) {
      videoId = url.searchParams.get("v");
    } else if (url.hostname === "youtu.be") {
      videoId = url.pathname.substring(1); // Remove leading '/'
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch (e) {
    console.error("Error parsing trailer URL:", watchUrl, e);
  }
  return null; // Return null if URL is invalid or not a recognized YouTube link
};

export function TitleDetails({ fetching, titlesInfo, error, listType }) {
  // Debugging logs
  // console.log("TitleDetails - Fetching:", fetching);
  // console.log("TitleDetails - Title Info:", titlesInfo);
  // console.log("TitleDetails - Error:", error);

  // reduce img size to improve load time
  const getResizedImage = (imageUrl, width = 485) => {
    return imageUrl
      ? imageUrl.replace(/\._V1_.*/, `._V1_UX${width}.jpg`)
      : `https://placehold.co/${width}x705.png?text=No+Poster&font=open-sans`;
  };

  const titleParam = new URLSearchParams(useLocation().search).get("title");
  const displayTitle =
    titleParam || (titlesInfo && titlesInfo.originalTitle) || "Details"; // Use fetched title if available

  // Get the embed URL for the trailer
  const trailerEmbedUrl = titlesInfo
    ? getYouTubeEmbedUrl(titlesInfo.trailer)
    : null;

  // Determine if the title is a series based on titleType
  const isSeries = listType.includes("TV");

  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching && (
            <Loader>
              <span>Loading {displayTitle} details...</span>
            </Loader>
          )}
          {error && <Error>Error: {error}</Error>}
          {!fetching && !error && titlesInfo && (
            <MovieCard>
              <Poster
                src={getResizedImage(titlesInfo.primaryImage)}
                alt={`${displayTitle} Poster`} // Use dynamic title for alt text
                // Fallback to the original image if the resized image fails to load
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = titlesInfo.primaryImage; // Fallback to the original
                }}
              />
              <InfoCard>
                <Info>
                  Rating:{"\u2002"}
                  {titlesInfo.averageRating || "N/A"}
                  {titlesInfo.numVotes
                    ? ` (${titlesInfo.numVotes.toLocaleString()} votes)`
                    : ""}
                </Info>
                <Info>
                  Plot:{"\u2002"}
                  {titlesInfo.description || "N/A"}
                </Info>
                <Info>
                  Genre:{"\u2002"}
                  {titlesInfo.genres && titlesInfo.genres.length > 0
                    ? titlesInfo.genres.join(", ")
                    : "N/A"}
                </Info>
                <Info>
                  Runtime:{"\u2002"}
                  {titlesInfo.runtimeMinutes
                    ? `${titlesInfo.runtimeMinutes} min`
                    : "N/A"}
                </Info>
                <Info>
                  Release Date:{"\u2002"}
                  {titlesInfo.releaseDate
                    ? new Date(titlesInfo.releaseDate).toLocaleDateString(
                        "eu",
                        { year: "numeric", month: "numeric", day: "numeric" } // Optional formatting
                      )
                    : "N/A"}
                </Info>

                {/* Render this block only if it's a series */}
                {isSeries && (
                  <Info>
                    Years Active:{"\u2002"}
                    {/* Check if startYear exists */}
                    {
                      titlesInfo.startYear
                        ? // If startYear exists, construct the string
                          `${titlesInfo.startYear}${
                            // Always start with the startYear
                            titlesInfo.endYear // Check if endYear exists
                              ? titlesInfo.startYear !== titlesInfo.endYear // If endYear exists, is it different?
                                ? ` - ${titlesInfo.endYear}` // Yes, append " - endYear"
                                : "" // No (they are the same), append nothing
                              : " - Present" // endYear doesn't exist, append " - Present"
                          }`
                        : // If startYear doesn't exist...
                          "N/A" // Display N/A
                    }
                  </Info>
                )}

                {isSeries && (
                  <Info>
                    Seasons:{"\u2002"}
                    {titlesInfo.totalSeasons ? titlesInfo.totalSeasons : "N/A"}
                  </Info>
                )}
                {isSeries && (
                  <Info>
                    Episodes:{"\u2002"}
                    {titlesInfo.totalEpisodes
                      ? titlesInfo.totalEpisodes.toLocaleString()
                      : "N/A"}
                    {/* Format large numbers */}
                  </Info>
                )}
                <Info>
                  Directors:{"\u2002"}
                  {titlesInfo.directors && titlesInfo.directors.length > 0
                    ? titlesInfo.directors
                        .slice(0, 10)
                        .map((director, index) => (
                          <span key={`director-${director.id || index}`}>
                            {" "}
                            <Link
                              href={director.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {director.fullName}
                            </Link>
                            {index < titlesInfo.directors.length - 1 && ", "}{" "}
                          </span>
                        ))
                    : "N/A"}
                  {titlesInfo.directors &&
                    titlesInfo.directors.length > 10 &&
                    "..."}{" "}
                </Info>
                <Info>
                  Writers:{"\u2002"}
                  {titlesInfo.writers && titlesInfo.writers.length > 0
                    ? titlesInfo.writers.slice(0, 10).map((writer, index) => (
                        <span key={`writer-${writer.id || index}`}>
                          {" "}
                          <Link
                            href={writer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {writer.fullName}
                          </Link>
                          {index <
                            Math.min(titlesInfo.writers.length, 10) - 1 &&
                            ", "}{" "}
                        </span>
                      ))
                    : "N/A"}
                  {titlesInfo.writers &&
                    titlesInfo.writers.length > 10 &&
                    "..."}{" "}
                </Info>
                <Info>
                  Cast:{"\u2002"}
                  {titlesInfo.cast && titlesInfo.cast.length > 0
                    ? titlesInfo.cast.slice(0, 10).map((actor, index) => (
                        <span key={`cast-${actor.id || index}`}>
                          {" "}
                          <Link
                            href={actor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {actor.fullName}
                          </Link>
                          {index < Math.min(titlesInfo.cast.length, 10) - 1 &&
                            ", "}{" "}
                        </span>
                      ))
                    : "N/A"}
                  {titlesInfo.cast && titlesInfo.cast.length > 10 && "..."}{" "}
                </Info>
                <Info>
                  Production Companies:{"\u2002"}
                  {titlesInfo.productionCompanies &&
                  titlesInfo.productionCompanies.length > 0
                    ? titlesInfo.productionCompanies
                        .map((company) => company.name)
                        .join(", ")
                    : "N/A"}
                </Info>
                <Info>
                  Countries of Origin:{"\u2002"}
                  {titlesInfo.countriesOfOrigin &&
                  titlesInfo.countriesOfOrigin.length > 0
                    ? titlesInfo.countriesOfOrigin.join(", ")
                    : "N/A"}
                </Info>
                <Info>
                  Spoken Languages:{"\u2002"}
                  {titlesInfo.spokenLanguages &&
                  titlesInfo.spokenLanguages.length > 0
                    ? titlesInfo.spokenLanguages.join(", ")
                    : "N/A"}
                </Info>
                {!isSeries && (
                  <Info>
                    Budget:{"\u2002"}
                    {titlesInfo.budget
                      ? `$${titlesInfo.budget.toLocaleString("en-US")}`
                      : "N/A"}
                  </Info>
                )}
                {!isSeries && (
                  <Info>
                    Gross Worldwide:{"\u2002"}
                    {titlesInfo.grossWorldwide
                      ? `$${titlesInfo.grossWorldwide.toLocaleString("en-US")}`
                      : "N/A"}
                  </Info>
                )}
                <Info>
                  Content Rating:{"\u2002"}
                  {titlesInfo.contentRating || "N/A"}
                </Info>
                <Info>
                  Filming Locations:{"\u2002"}
                  {titlesInfo.filmingLocations &&
                  titlesInfo.filmingLocations.length > 0
                    ? titlesInfo.filmingLocations.join(", ")
                    : "N/A"}
                </Info>
                {titlesInfo.url && (
                  <Info>
                    <Link
                      href={titlesInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View full details on IMDb
                    </Link>
                  </Info>
                )}
              </InfoCard>
              {trailerEmbedUrl && (
                <TrailerContainer>
                  <Trailer
                    src={trailerEmbedUrl}
                    title={`${displayTitle} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></Trailer>
                </TrailerContainer>
              )}
            </MovieCard>
          )}
          {!fetching && !error && !titlesInfo && (
            <Error>Could not load title details.</Error>
          )}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
