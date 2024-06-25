import { useState, useEffect } from "react";
import axios from "axios";

export function useGetTitles(titleId) {
  const [titleInfo, setTitleInfo] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;

  const options = {
    method: "GET",
    url: titleId
      ? "https://movies-api14.p.rapidapi.com/movie/" + titleId
      : // "https://movies-api14.p.rapidapi.com/show/" + titleId
        "https://movies-api14.p.rapidapi.com/movies",
    // "https://movies-api14.p.rapidapi.com/shows",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };

  async function getImdbTitleDetails(titleId) {
    try {
      const { data, status, statusText } = await axios.request(options);

      if (status === 200) {
        setTitleInfo(titleId ? data.movie : data.movies);
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
    getImdbTitleDetails(titleId ? titleId : "");
  }, []);

  return { fetching, titleInfo, error };
}
