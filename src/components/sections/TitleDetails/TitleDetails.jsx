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
} from "./TitleDetails.style";

export function TitleDetails({ fetching, titleInfo, error }) {
  // Debugging logs
  // console.log("TitleDetails - Fetching:", fetching);
  // console.log("TitleDetails - Title Info:", titleInfo);
  // console.log("TitleDetails - Error:", error);

  // reduce img size to improve load time
  const getResizedImage = (imageUrl, width = 380) => {
    if (!imageUrl) return "";
    return imageUrl.replace(/\._V1_.*/, `._V1_UX${width}.jpg`);
  };

  const title = new URLSearchParams(useLocation().search).get("title");

  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching && (
            <Loader>
              <span>
                Loading {title ? `${title} details` : "movie details"}...
              </span>
            </Loader>
          )}
          {error && <Error>Error: {error}</Error>}
          {!fetching && !error && titleInfo && (
            <MovieCard>
              {titleInfo.primaryImage && (
                <Poster
                  src={getResizedImage(titleInfo.primaryImage)}
                  // Fallback to the original image if the resized image fails to load
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = titleInfo.primaryImage; // Fallback to the original
                  }}
                />
              )}
              <InfoCard>
                {titleInfo.averageRating && (
                  <Info>
                    Rating:{"\u2002"}
                    {titleInfo.averageRating}
                  </Info>
                )}

                {titleInfo.description && (
                  <Info>
                    Plot:{"\u2002"}
                    {titleInfo.description}
                  </Info>
                )}
                {titleInfo.releaseDate && (
                  <Info>
                    Release Date:{"\u2002"}
                    {new Date(titleInfo.releaseDate)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, ".")}
                  </Info>
                )}
                {titleInfo.runtimeMinutes && (
                  <Info>
                    Runtime:{"\u2002"}
                    {titleInfo.runtimeMinutes}min
                  </Info>
                )}
                {titleInfo.directors && titleInfo.directors.length > 0 && (
                  <Info>
                    Director:{"\u2002"}
                    {titleInfo.directors.map((director, index) => (
                      <span key={`director-${director.id}`}>
                        <Link
                          href={director.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {director.fullName}
                        </Link>
                        {index !== titleInfo.directors.length - 1 &&
                          titleInfo.directors.length > 1 &&
                          ", "}
                      </span>
                    ))}
                  </Info>
                )}
                {titleInfo.budget && (
                  <Info>
                    Budget:{"\u2002"}
                    {titleInfo.budget.toLocaleString("en-US")}$
                  </Info>
                )}
                {titleInfo.grossWorldwide && (
                  <Info>
                    Gross Worldwide:{"\u2002"}
                    {titleInfo.grossWorldwide.toLocaleString("en-GB")}$
                  </Info>
                )}
                {titleInfo.genres && titleInfo.genres.length > 0 && (
                  <Info>
                    Genre:{"\u2002"}
                    {titleInfo.genres.map((gen, index) => (
                      <span key={`${gen}-${index}`}>
                        {gen}
                        {index !== titleInfo.genres.length - 1 &&
                          titleInfo.genres.length > 1 &&
                          ", "}
                      </span>
                    ))}
                  </Info>
                )}
                {titleInfo.cast && titleInfo.cast.length > 0 && (
                  <Info>
                    Cast:{"\u2002"}
                    {titleInfo.cast.map((actor, index) => (
                      <span key={`cast-${actor.id}-${index}`}>
                        <Link
                          href={actor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {actor.fullName}
                        </Link>
                        {index !== titleInfo.cast.length - 1 &&
                          titleInfo.cast.length > 1 &&
                          ", "}
                      </span>
                    ))}
                  </Info>
                )}
                {titleInfo.writers && titleInfo.writers.length > 0 && (
                  <Info>
                    Writers:{"\u2002"}
                    {titleInfo.writers.map((writer, index) => (
                      <span key={`writer-${writer.id}-${index}`}>
                        <Link
                          href={writer.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {writer.fullName}
                        </Link>
                        {index !== titleInfo.writers.length - 1 &&
                          titleInfo.writers.length > 1 &&
                          ", "}
                      </span>
                    ))}
                  </Info>
                )}
                {titleInfo.contentRating && (
                  <Info>
                    Content Rating:{"\u2002"}
                    {titleInfo.contentRating}
                  </Info>
                )}
                {titleInfo.url && (
                  <Info>
                    <Link
                      href={titleInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on IMDb
                    </Link>
                  </Info>
                )}
              </InfoCard>
            </MovieCard>
          )}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
