import { useState, useEffect, useRef } from "react";
import axios from "axios";

export function useGetTitles(titleId, listType) {
  const [titleInfo, setTitleInfo] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const fetchingRef = useRef(fetching); // Use ref to track fetching state
  const apiKey = process.env.REACT_APP_API_KEY;
  const CACHE_DURATION = 24 * 60 * 60 * 1000 * 7; // one week

  const options = {
    method: 'GET',
    url: titleId 
      ? `https://imdb236.p.rapidapi.com/imdb/${titleId}` 
      : listType === "mostPopular"
        ? 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies'
        : 'https://imdb236.p.rapidapi.com/imdb/top250-movies',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
  };

  async function getImdbTitleDetails() {
    try {
      setFetching(true);
      fetchingRef.current = true; // Update ref
      
      // Add minimum loading time of 1 second
      const startTime = Date.now();
      const { data, status, statusText } = await axios.request(options);
      const elapsedTime = Date.now() - startTime;
      const minimumLoadTime = 1000; // 1 second minimum loading time
      
      if (elapsedTime < minimumLoadTime) {
        await new Promise(resolve => setTimeout(resolve, minimumLoadTime - elapsedTime));
      }

      if (status === 200) {
        setTitleInfo(data);
        // Restore cache storage
        if (titleId) {
          localStorage.setItem(`title_${titleId}`, JSON.stringify(data));
          localStorage.setItem(`title_${titleId}_timestamp`, Date.now());
        } else {
          localStorage.setItem(listType, JSON.stringify(data));
          localStorage.setItem(`${listType}_timestamp`, Date.now());
        }
        setFetching(false);
        fetchingRef.current = false; // Update ref
      } else {
        setError(statusText);
      }
    } catch (err) {
      if (err.response) {
        setError(
          `Status ${err.response.status}; ${err.response.data.message}` ||
            `Error ${err.response.status}: ${err.response.statusText}`
        );
      } else if (err.request) {
        setError("No response from server. Please try again.");
      } else {
        setError(err.message);
      }
    } finally {
      setFetching(false);
      fetchingRef.current = false; // Update ref
      // console.log("fetching fetch finish: " + fetchingRef.current); // Debugging log
    }
  }

  useEffect(() => {
    // Reset states when listType changes
    setTitleInfo([]);
    setError("");
    setFetching(true);
    fetchingRef.current = true;

    // console.log("Starting fetch for listType:", listType);

    const fetchData = () => {
      let cachedData, cachedTimestamp, isCacheValid;
      const cacheKey = titleId ? `title_${titleId}` : listType;
      const timestampKey = titleId ? `title_${titleId}_timestamp` : `${listType}_timestamp`;
      
      cachedData = localStorage.getItem(cacheKey);
      cachedTimestamp = localStorage.getItem(timestampKey);
      
      const duration = listType === "top250" ? CACHE_DURATION : CACHE_DURATION / 7;
      isCacheValid = cachedTimestamp && (Date.now() - cachedTimestamp < duration);

      if (cachedData && isCacheValid) {
        // Add artificial delay even for cached data
        setTimeout(() => {
          setTitleInfo(JSON.parse(cachedData));
          setFetching(false);
          fetchingRef.current = false;
        }, 1000);
      } else {
        getImdbTitleDetails();
      }
    };

    fetchData();
  }, [titleId, listType]);

  return { fetching, titleInfo, error };
}
