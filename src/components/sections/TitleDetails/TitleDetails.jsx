// g:\GItHubProjects\MovieAppProject\src\components\sections\TitleDetails\TitleDetails.jsx
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

export function TitleDetails({ fetching, titlesInfo, error }) {
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
    (titlesInfo && titlesInfo.originalTitle) || titleParam || "Details"; // Use fetched title if available

  // Get the embed URL for the trailer
  const trailerEmbedUrl = titlesInfo
    ? getYouTubeEmbedUrl(titlesInfo.trailer)
    : null;

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
                    ? titlesInfo.genres.join(", ") // Simpler join for genres
                    : "N/A"}
                </Info>
                <Info>
                  Runtime:{"\u2002"}
                  {titlesInfo.runtimeMinutes
                    ? `${titlesInfo.runtimeMinutes} min` // Consistent unit
                    : "N/A"}
                </Info>
                <Info>
                  Release Date:{"\u2002"}
                  {titlesInfo.releaseDate
                    ? new Date(titlesInfo.releaseDate).toLocaleDateString(
                        "en-GB", // Or your preferred locale
                        { year: "numeric", month: "long", day: "numeric" } // More readable format
                      )
                    : titlesInfo.startYear // Fallback to start year if no specific date
                    ? titlesInfo.startYear
                    : "N/A"}
                </Info>
                <Info>
                  Director:{"\u2002"}
                  {titlesInfo.directors && titlesInfo.directors.length > 0
                    ? titlesInfo.directors.map((director, index) => (
                        <span key={`director-${director.id || index}`}>
                          {" "}
                          {/* Add fallback key */}
                          <Link
                            href={director.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {director.fullName}
                          </Link>
                          {index < titlesInfo.directors.length - 1 && ", "}{" "}
                          {/* Simpler comma logic */}
                        </span>
                      ))
                    : "N/A"}
                </Info>
                <Info>
                  Writers:{"\u2002"}
                  {titlesInfo.writers && titlesInfo.writers.length > 0
                    ? titlesInfo.writers.map((writer, index) => (
                        <span key={`writer-${writer.id || index}`}>
                          {" "}
                          {/* Add fallback key */}
                          <Link
                            href={writer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {writer.fullName}
                          </Link>
                          {index < titlesInfo.writers.length - 1 && ", "}{" "}
                          {/* Simpler comma logic */}
                        </span>
                      ))
                    : "N/A"}
                </Info>
                <Info>
                  Cast:{"\u2002"}
                  {titlesInfo.cast && titlesInfo.cast.length > 0
                    ? titlesInfo.cast.slice(0, 10).map(
                        (
                          actor,
                          index // Limit cast display initially if needed
                        ) => (
                          <span key={`cast-${actor.id || index}`}>
                            {" "}
                            {/* Add fallback key */}
                            <Link
                              href={actor.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {actor.fullName}
                            </Link>
                            {index < Math.min(titlesInfo.cast.length, 10) - 1 &&
                              ", "}{" "}
                            {/* Comma logic for sliced array */}
                          </span>
                        )
                      )
                    : "N/A"}
                  {titlesInfo.cast && titlesInfo.cast.length > 10 && "..."}{" "}
                  {/* Indicate more cast */}
                </Info>
                <Info>
                  Production Companies:{"\u2002"}
                  {titlesInfo.productionCompanies &&
                  titlesInfo.productionCompanies.length > 0
                    ? titlesInfo.productionCompanies
                        .map((company) => company.name) // Extract names
                        .join(", ") // Join names with a comma and space
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
                <Info>
                  Budget:{"\u2002"}
                  {titlesInfo.budget
                    ? `$${titlesInfo.budget.toLocaleString("en-US")}` // Standard currency format
                    : "N/A"}
                </Info>
                <Info>
                  Gross Worldwide:{"\u2002"}
                  {titlesInfo.grossWorldwide
                    ? `$${titlesInfo.grossWorldwide.toLocaleString("en-US")}` // Standard currency format
                    : "N/A"}
                </Info>
                <Info>
                  Content Rating:{"\u2002"}
                  {titlesInfo.contentRating || "N/A"}
                </Info>
                <Info>
                  Filming Locations:{"\u2002"}
                  {titlesInfo.filmingLocations &&
                  titlesInfo.filmingLocations.length > 0
                    ? titlesInfo.filmingLocations.join(", ") // Simpler join
                    : "N/A"}
                </Info>

                {/* IMDb Link */}
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
          {/* Handle case where fetching is done, no error, but no titlesInfo */}
          {!fetching && !error && !titlesInfo && (
            <Error>Could not load title details.</Error>
          )}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
