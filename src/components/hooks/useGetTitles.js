import { useState, useEffect } from "react";
import axios from "axios";

export function useGetTitles(titleId) {
  const [titleInfo, setTitleInfo] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;

  const options = {
  method: 'GET',
  url: titleId ? 'https://imdb236.p.rapidapi.com/imdb/'+ titleId : 'https://imdb236.p.rapidapi.com/imdb/top250-movies',
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  }
};

  async function getImdbTitleDetails(titleId) {
    try {
      const { data, status, statusText } = await axios.request(options);

      if (status === 200) {
        setTitleInfo(data);
        // console.log(data.movies);
        // console.log(data);
      } else {
        setError(statusText);
        // console.log(data.movie);
      }
    } catch (err) {
      if (err.response) {
        // The server responded with a status code outside 2xx
        setError(
          `Status ${err.response.status}; ${err.response.data.message}` ||
            `Error ${err.response.status}: ${err.response.statusText}`
        );
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response from server. Please try again.");
      } else {
        // Something else caused the error
        setError(err.message);
      }
    } finally {
      setFetching(false);
    }
  }
  useEffect(() => {
    getImdbTitleDetails(titleId ? titleId : "");
  }, []);

  return { fetching, titleInfo, error };
}
