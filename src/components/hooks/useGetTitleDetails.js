import { useState, useEffect } from "react";
import axios from "axios";

export function useGetTitleDetails(titleId) {
  const [titleInfo, setTitleInfo] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);

  async function getImdbTitleDetails(titleId) {
    try {
      const { data, status, statusText } = await axios.get(
        // "https://imdb-api.com/en/API/Title/k_cqzt9my1/" + titleId
        // "https://imdb-api.com/en/API/Title/k_glqb3j6e/" + titleId
        "https://imdb-api.com/en/API/Title/k_hkn2u44m/" + titleId
      );
      if (status === 200) {
        if (data.errorMessage === "") {
          setTitleInfo(data.items);
        } else {
          setError(data.errorMessage);
        }
        setTitleInfo(data);
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
    getImdbTitleDetails(titleId);
  }, []);

  return { fetching, titleInfo, error };
}
