import React /*, { useState, useEffect }*/ from "react";
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
  TrailerContainer,
  Trailer,
} from "./TitleDetails.style";
import { Link } from "react-router-dom";

// convert youtube link to embed
// const extractVideoIdFromUrl = (url) => {
//   const match = new RegExp(
//     /https?:\/\/(www\.)?youtube\.com\/watch\?v=(.*)/i
//   ).exec(url);
//   return match ? match[2] : null; // Check if there is a match before extracting the video ID
// };

export function TitleDetails({ fetching, titleInfo, error }) {
  // const [videoId, setVideoId] = useState(null);
  // const [trailerSrc, settrailerSrc] = useState("");

  //   useEffect(() => {
  //     const extractedVideoId = extractVideoIdFromUrl(titleInfo.youtube_trailer);
  //     setVideoId(extractedVideoId);
  //   }, [titleInfo.youtube_trailer]);

  //   useEffect(() => {
  //     if (videoId) {
  //       settrailerSrc(`https://www.youtube.com/embed/${videoId}`);
  //     } else {
  //       settrailerSrc("");
  //     }
  //   }, [videoId]);

  return (
    <Background>
      <Container>
        <MoviesWrapper>
          {fetching && <Loader>Loading movie details...</Loader>}
          {error && <Error>Error: {error}</Error>}
          {!fetching && !error && (
            <MovieCard>
              <Poster src={titleInfo.big_image} />
              <InfoCard>
                  <Info>Rank: {titleInfo.rank}</Info>

                  <Info>Title: {titleInfo.title}</Info>
                  <Info>Release Year: {titleInfo.year}</Info>
                  <Info>Rating: {titleInfo.rating}</Info>
                  <Info>
                    Genre:{" "}
                    {titleInfo.genre.map((gen, index) => (
                      <span key={index}>
                        {gen}
                        {index !== titleInfo.genre.length - 1 && ", "}
                      </span>
                    ))}
                  </Info>
                  <Info>Directors: {titleInfo.director}</Info>
                  <Info>
                    Writers:{" "}
                    {titleInfo.writers.map((writer, index) => (
                      <span key={index}>
                        {writer}
                        {index !== titleInfo.writers.length - 1 && ", "}
                      </span>
                    ))}
                  </Info>
                  <Info>Description: {titleInfo.description}</Info>
                  {/* <Info>Runtime: {titleInfo.runtimeStr}</Info> */}
                  {/* <Info>Plot: {titleInfo.plot}</Info>*/}
                  
                  <TrailerContainer /*trailerSrc={titleInfo.trailer_embed_link}*/>
                    <Trailer
                      src={titleInfo.trailer_embed_link}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowfullscreen
                      title="YouTube trailer"
                    />
                  </TrailerContainer>
                  <Link
                    to={titleInfo.imdb_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Info>View on IMDb</Info>
                  </Link>
                 
              </InfoCard>
            </MovieCard>
          )}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
