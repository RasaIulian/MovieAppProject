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
  ImdbLink as Link,
  // TrailerContainer,
  // Trailer,
} from "./TitleDetails.style";


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
              <Poster src={titleInfo.primaryImage} />
              <InfoCard>
                <Info>Rating: {titleInfo.averageRating}</Info>
                <Info>Title: {titleInfo.originalTitle}</Info>
                <Info>Description: {titleInfo.description}</Info>
                
                  <Info>
                    Release Date:{" "}
                    {new Date(titleInfo.releaseDate)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, ".")}
                  </Info>
                  
                
                <Info>Runtime: {titleInfo.runtimeMinutes}min</Info>
                <Info>
                  Director:{" "}
                  {titleInfo &&
                  titleInfo.directors &&
                  titleInfo.directors.length > 0
                    ? titleInfo.directors.map((director, index) => (
                        <span key={director.id}>
                          <Link
                            href={director.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {director.fullName}
                          </Link>
                          {index !== titleInfo.directors.length - 1 && titleInfo.directors.length>1 && ", "}
                        </span>
                      ))
                    : "N/A"}
                </Info>
                <Info>Budget: {titleInfo.budget.toLocaleString("en-US")}$</Info>
                <Info>
                  Gross Worldwide:{" "}
                  {titleInfo.grossWorldwide.toLocaleString("en-GB")}$
                </Info>
                <Info>
                  Genre:{" "}
                  {titleInfo && titleInfo.genres && titleInfo.genres.length > 0
                    ? titleInfo.genres.map((gen, index) => (
                        <span key={index}>
                          {gen}
                          {index !== titleInfo.genres.length - 1 && titleInfo.genres.length>1&& ", "}
                        </span>
                      ))
                    : "N/A"}
                </Info>
                
                <Info>
                  Cast:{" "}
                  {titleInfo &&
                  titleInfo.cast &&
                  titleInfo.cast.length > 0
                    ? titleInfo.cast.map((actor, index) => (
                        <span key={actor.id}>
                          <Link
                            href={actor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {actor.fullName}
                          </Link>
                          {index !== titleInfo.cast.length - 1 && titleInfo.cast.length>1 && ", "}
                        </span>
                      ))
                    : "N/A"}
                </Info>
                <Info>
                  Writers:{" "}
                  {titleInfo &&
                  titleInfo.writers &&
                  titleInfo.writers.length > 0
                    ? titleInfo.writers.map((writer, index) => (
                        <span key={writer.id}>
                          <Link
                            href={writer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                           {writer.fullName}
                          </Link>
                          {index !== titleInfo.writers.length - 1 &&  titleInfo.writers.length>1 && ", "}
                        </span>
                      ))
                    : "N/A"}
                </Info>
               
                <Info>Content Rating: {titleInfo.contentRating}</Info>
                
                <Link
                  href={titleInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Info>View on IMDb</Info>
                </Link>
              </InfoCard>
            </MovieCard>
            //    &&(
            //     <MovieCard>
            //       <InfoCard>
            //         <TrailerContainer /*trailerSrc={titleInfo.trailer_embed_link}*/>
            //                 <Trailer
            //                   src={titleInfo.trailer_embed_link}
            //                   frameborder="0"
            //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            //                   allowfullscreen
            //                   title="YouTube trailer"
            //                 />
            //           </TrailerContainer>
            //     </InfoCard>
            //  </MovieCard>
            //    )
          )}
        </MoviesWrapper>
      </Container>
    </Background>
  );
}
