import { useState, useEffect } from "react";
import axios from "axios";

export function useGetTitles(titleId) {
  const [titleInfo, setTitleInfo] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);

  async function getImdbTitleDetails(titleId) {
    try {
      const { data, status, statusText } = await axios.get(
        titleId
          ? "https://imdb-top-100-movies.p.rapidapi.com/top" +
              titleId +
              "?rapidapi-key=e365598dd1mshd48785472650e52p10cadfjsna551c3255a86"
          : "https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=e365598dd1mshd48785472650e52p10cadfjsna551c3255a86"
      );
      if (status === 200) {
        /* if (data.message === "" || data.message === "null") {*/
        titleId ? setTitleInfo(data) : setTitleInfo(data);
        //  }
        // else {
        //   setError(data.message);
        // }
      } else {
        setError(statusText);
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
