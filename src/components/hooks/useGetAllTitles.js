import { useState, useEffect } from "react";
import axios from "axios";

export function useGetAllTitles() {
  const [titles, setTitles] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);

  async function getTitles() {
    try {
      const { data, status, statusText } = await axios.get(
        // "https://imdb-api.com/en/API/Top250Movies/k_hkn2u44m"
        // "https://imdb-api.com/en/API/Top250Movies/k_glqb3j6e"
        "https://imdb-api.com/en/API/Top250Movies/k_cqzt9my1"
      );

      if (status === 200) {
        if (data.errorMessage === "") {
          setTitles(data.items);
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
    getTitles();
  }, []);

  return { fetching, titles, error };
}
