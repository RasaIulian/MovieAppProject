import React from "react";
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

  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching && (
            <Loader>
              <span>Loading movie details...</span>
            </Loader>
          )}
          {error && <Error>Error: {error}</Error>}
          {!fetching && !error && titleInfo && (
            <MovieCard>
              {titleInfo.primaryImage && (
                <Poster src={titleInfo.primaryImage} />
              )}
              <InfoCard>
                {titleInfo.averageRating && (
                  <Info>Rating: {titleInfo.averageRating}</Info>
                )}

                {titleInfo.description && (
                  <Info>Description: {titleInfo.description}</Info>
                )}
                {titleInfo.releaseDate && (
                  <Info>
                    Release Date:{" "}
                    {new Date(titleInfo.releaseDate)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, ".")}
                  </Info>
                )}
                {titleInfo.runtimeMinutes && (
                  <Info>Runtime: {titleInfo.runtimeMinutes}min</Info>
                )}
                {titleInfo.directors && titleInfo.directors.length > 0 && (
                  <Info>
                    Director:{" "}
                    {titleInfo.directors.map((director, index) => (
                      <span key={`director-{director.id}`}>
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
                    Budget: {titleInfo.budget.toLocaleString("en-US")}$
                  </Info>
                )}
                {titleInfo.grossWorldwide && (
                  <Info>
                    Gross Worldwide:{" "}
                    {titleInfo.grossWorldwide.toLocaleString("en-GB")}$
                  </Info>
                )}
                {titleInfo.genres && titleInfo.genres.length > 0 && (
                  <Info>
                    Genre:{" "}
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
                    Cast:{" "}
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
                    Writers:{" "}
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
                  <Info>Content Rating: {titleInfo.contentRating}</Info>
                )}
                {titleInfo.url && (
                  <Link
                    href={titleInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Info>View on IMDb</Info>
                  </Link>
                )}
              </InfoCard>
            </MovieCard>
          )}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
