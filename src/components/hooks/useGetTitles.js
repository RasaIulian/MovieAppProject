import { useState, useEffect } from "react";
import axios from "axios";

export function useGetTitles(titleId) {
  const [titleInfo, setTitleInfo] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);

  const options = {
    method: "GET",
    url: titleId
      ? "https://movies-api14.p.rapidapi.com/movie/" + titleId
      : // "https://movies-api14.p.rapidapi.com/show/" + titleId
        "https://movies-api14.p.rapidapi.com/movies",
    // "https://movies-api14.p.rapidapi.com/shows",
    headers: {
      "X-RapidAPI-Key": "dba5d11475msh67833a57c148263p1a7846jsna1ce2112129b",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };

  async function getImdbTitleDetails(titleId) {
    try {
      const { data, status, statusText } = await axios.request(options);

      if (status === 200) {
        titleId ? setTitleInfo(data.movie) : setTitleInfo(data.movies);
        // console.log(data.movies);
        // console.log(data);
      } else {
        setError(statusText);
        // console.log(data.movie);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setFetching(false);
    }
  }
  useEffect(() => {
    titleId ? getImdbTitleDetails(titleId) : getImdbTitleDetails();
  }, []);

  return { fetching, titleInfo, error };
}
