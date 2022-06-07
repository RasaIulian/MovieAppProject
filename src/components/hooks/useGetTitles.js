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
          ? //  "https://imdb-api.com/en/API/Title/k_cqzt9my1/" + titleId +"/Trailer"
            "https://imdb-api.com/en/API/Title/k_glqb3j6e/" +
              titleId +
              "/Trailer"
          : // "https://imdb-api.com/en/API/Title/k_hkn2u44m/" + titleId + "/Trailer"
            // "https://imdb-api.com/en/API/Top250Movies/k_hkn2u44m"
            "https://imdb-api.com/en/API/Top250Movies/k_glqb3j6e"
        // "https://imdb-api.com/en/API/Top250Movies/k_cqzt9my1"
      );
      if (status === 200) {
        if (data.errorMessage === "" || "null") {
          titleId ? setTitleInfo(data) : setTitleInfo(data.items);
        } else {
          setError(data.errorMessage);
        }
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
