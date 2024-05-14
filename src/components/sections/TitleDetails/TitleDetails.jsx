import React, { useState, useEffect } from "react";
import {
  Background,
  Container,
  MoviesWrapper,
  Loader,
  Error,
  MovieCard,
  Poster,
  Info,
  TrailerContainer,
  Trailer,
} from "./TitleDetails.style";

const extractVideoIdFromUrl = (url) => {
  const match = new RegExp(
    /https?:\/\/(www\.)?youtube\.com\/watch\?v=(.*)/i
  ).exec(url);
  return match ? match[2] : null; // Check if there is a match before extracting the video ID
};

export function TitleDetails({ fetching, titleInfo, error }) {
  const [videoId, setVideoId] = useState(null);
  const [trailerSrc, settrailerSrc] = useState("");

  useEffect(() => {
    const extractedVideoId = extractVideoIdFromUrl(titleInfo.youtube_trailer);
    setVideoId(extractedVideoId);
  }, [titleInfo.youtube_trailer]);

  useEffect(() => {
    if (videoId) {
      settrailerSrc(`https://www.youtube.com/embed/${videoId}`);
    } else {
      settrailerSrc("");
    }
  }, [videoId]);

  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching && <Loader>Loading movie details...</Loader>}
          {error && <Error>Error: {error}</Error>}
          {!fetching && !error && (
            <MovieCard>
              <Poster src={titleInfo.poster_path} />
              {/* <Info>Rank: {titleInfo.rank}</Info> */}
              <Info>Movie Id: {titleInfo._id}</Info>
              <Info>Title: {titleInfo.original_title}</Info>
              <Info>Release Date: {titleInfo.release_date}</Info>
              <Info>Rating: {titleInfo.vote_average.toFixed(1)}</Info>
              <Info>
                Genre:{" "}
                {titleInfo.genres.map((genre, index) => (
                  <span key={index}>
                    {genre}
                    {index !== titleInfo.genres.length - 1 && ", "}
                  </span>
                ))}
              </Info>
              <Info>Description: {titleInfo.overview}</Info>
              {/* <Info>Runtime: {titleInfo.runtimeStr}</Info> */}
              {/* <Info>Plot: {titleInfo.plot}</Info>*/}
              <TrailerContainer trailerSrc={trailerSrc}>
                <Trailer
                  src={trailerSrc}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              </TrailerContainer>
              {/*<Info>Awards: {titleInfo.awards}</Info>
              <Info>Directors: {titleInfo.directors}</Info>
              <Info>Writers: {titleInfo.writers}</Info>
              <Info>Stars: {titleInfo.stars}</Info>
              <Info>ACTORS:</Info>
              <Info>
                Name: {titleInfo.actorList[0].name}, Character:{" "}
                {titleInfo.actorList[0].asCharacter}
              </Info>
              <Info>
                Name: {titleInfo.actorList[1].name}, Character:{" "}
                {titleInfo.actorList[1].asCharacter}
              </Info>
              <Info>
                Name:{titleInfo.actorList[2].name}, Character:{" "}
                {titleInfo.actorList[2].asCharacter}
              </Info>
              <Info>
                Name: {titleInfo.actorList[3].name}, Character:
                {titleInfo.actorList[3].asCharacter}
              </Info>
              {titleInfo.fullCast !== null && (
                <Info>FullCast: {titleInfo.fullCast}</Info>
              )}
              <Info>Genres: {titleInfo.genres}</Info>
              <Info>Companies: {titleInfo.companies}</Info>
              <Info>Countries: {titleInfo.countries}</Info>
              <Info>Languages: {titleInfo.languages}</Info>
              <Info>Content Rating: {titleInfo.contentRating}</Info>
              <Info>ImDb Rating: {titleInfo.imDbRating}</Info>
              <Info>ImDb Rating Votes: {titleInfo.imDbRatingVotes}</Info>
              <Info>Metacritic Rating: {titleInfo.metacriticRating}</Info>
              <Info>BoxOffice Budget: {titleInfo.boxOffice.budget},</Info>
              <Info>
                BoxOffice Cumulative Worldwide Gross:{" "}
                {titleInfo.boxOffice.cumulativeWorldwideGross}
              </Info>
              {titleInfo.tagline !== null && (
                <Info>Tagline: {titleInfo.tagline}</Info>
              )}
              <Info>Keywords: {titleInfo.keywords}</Info>
              {titleInfo.similars !== [] &&
                ((<Info>SIMILAR TITLES:</Info>),
                (<Info>1: {titleInfo.similars[0]}</Info>),
                (<Info>2: {titleInfo.similars[1]}</Info>),
                (<Info>3: {titleInfo.similars[2]}</Info>),
                "")}
              {titleInfo.tvSeriesInfo !== null && (
                <Info>Tv Series Info: {titleInfo.tvSeriesInfo}</Info>
              )}
              {titleInfo.tvEpisodeInfo !== null && (
                <Info>Tv Episode Info: {titleInfo.tvEpisodeInfo}</Info>
              )} */}
            </MovieCard>
          )}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
