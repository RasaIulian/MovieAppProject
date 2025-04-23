import { useState, useEffect } from "react";
import axios from "axios";

// Helper function to determine the API URL based on parameters
const getApiUrl = (titleId, listType) => {
  const baseUrl = 'https://imdb236.p.rapidapi.com/imdb';

  if (titleId) {
    return `${baseUrl}/${titleId}`;
  }

  switch (listType) {
    case "mostPopularMovies": // Renamed for clarity
      return `${baseUrl}/most-popular-movies`;
    case "top250Movies": // Renamed for clarity
      return `${baseUrl}/top250-movies`;
    case "mostPopularTV": // New type
      return `${baseUrl}/most-popular-tv`;
    case "top250TV": // New type
      return `${baseUrl}/top250-tv`;
    default:
      // Default to most popular movies if listType is unknown or not provided when no titleId
      console.warn(`Unknown listType: ${listType}, defaulting to mostPopularMovies.`);
      return `${baseUrl}/most-popular-movies`;
  }
};

export function useGetTitles(titleId, listType) {
  const [titlesInfo, setTitlesInfo] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;
  const CACHE_DURATION_LONG = 24 * 60 * 60 * 1000 * 7; // one week
  const CACHE_DURATION_SHORT = 24 * 60 * 60 * 1000; // one day

  // Use the helper function to get the URL
  const apiUrl = getApiUrl(titleId, listType);

  const options = {
    method: 'GET',
    url: apiUrl, // Use the generated URL
    headers: {
      'x-rapidapi-key': apiKey, // Use environment variable for security
      'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
  };

  async function getImdbTitleDetails() {
    // Ensure API key is available
    if (!apiKey) {
        setError("API key is missing. Please check your environment configuration.");
        setFetching(false);
        return; // Stop execution if API key is missing
    }
    // Ensure URL is valid before making the request
    if (!options.url) {
        setError("Invalid API endpoint configuration.");
        setFetching(false);
        return; // Stop execution if URL is invalid
    }

    try {
      setFetching(true);

      // Add minimum loading time of 1 second
      const startTime = Date.now();
      const { data, status, statusText } = await axios.request(options);
      const elapsedTime = Date.now() - startTime;
      const minimumLoadTime = 1000; // 1 second minimum loading time

      if (elapsedTime < minimumLoadTime) {
        await new Promise(resolve => setTimeout(resolve, minimumLoadTime - elapsedTime));
      }

      if (status === 200) {
        setTitlesInfo(data);
        // Restore cache storage
        const cacheKey = titleId ? `title_${titleId}` : listType;
        const timestampKey = `${cacheKey}_timestamp`;
        localStorage.setItem(cacheKey, JSON.stringify(data));
        localStorage.setItem(timestampKey, Date.now().toString()); // Store timestamp as string
        setFetching(false);
      } else {
        setError(`API Error: ${status} ${statusText}`);
        setFetching(false); // Ensure fetching is set to false on API error
      }
    } catch (err) {
      let errorMessage = "An unexpected error occurred.";
      if (axios.isCancel(err)) {
        // console.log('Request canceled:', err.message); // Optional: log cancellation
        // Don't set an error state for cancellations
        return;
      } else if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const messageFromServer = err.response.data && err.response.data.message;
        errorMessage = `Status ${err.response.status}: ${messageFromServer || err.response.statusText}`;
            } 
            else if (err.request) {
            // The request was made but no response was received
            errorMessage = "No response from server. Please check your network connection.";
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = err.message;
      }
      setError(errorMessage);
    } 
    }
  

  useEffect(() => {
    // Use AbortController for cleanup
    const controller = new AbortController();
    const signal = controller.signal;
    // Pass signal to axios options
    options.signal = signal;

    // Reset states when titleId or listType changes
    setTitlesInfo([]);
    setError("");
    setFetching(true);

    const fetchData = async () => { // Make fetchData async to use await inside
      let cachedData, cachedTimestamp, isCacheValid;
      const cacheKey = titleId ? `title_${titleId}` : listType;
      const timestampKey = `${cacheKey}_timestamp`;

      try {
          cachedData = localStorage.getItem(cacheKey);
          cachedTimestamp = localStorage.getItem(timestampKey);

          // Determine cache duration based on listType
          // Keep longer duration only for top 250 movies, shorter for others including TV lists
          const duration = (listType === "top250Movies" || listType === "top250TV") ? CACHE_DURATION_LONG : CACHE_DURATION_SHORT;
          isCacheValid = cachedTimestamp && (Date.now() - parseInt(cachedTimestamp, 10) < duration); // Parse timestamp

          if (cachedData && isCacheValid) {
            // Add artificial delay even for cached data
            // Use a promise with setTimeout to ensure it works with AbortController
            const cacheDelay = new Promise(resolve => setTimeout(resolve, 1000));
            await cacheDelay; // Wait for the delay

            // Check if the component is still mounted and the request wasn't cancelled
            if (!signal.aborted) {
                setTitlesInfo(JSON.parse(cachedData));
                setFetching(false);
            }
          } else {
            // Check if the component is still mounted before fetching
            if (!signal.aborted) {
                getImdbTitleDetails(); // Call the async function directly
            }
          }
      } catch (parseError) {
          console.error("Error parsing cached data or timestamp:", parseError);
          setError("Failed to load data from cache.");
          // Optionally clear corrupted cache
          localStorage.removeItem(cacheKey);
          localStorage.removeItem(timestampKey);
          // Proceed to fetch fresh data if cache fails
          if (!signal.aborted) {
              getImdbTitleDetails();
          }
      }
    };

    fetchData();

    // Cleanup function to abort fetch if component unmounts or dependencies change
    return () => {
      controller.abort();
      // console.log("Fetch aborted for:", listType || titleId); // Debugging log
      // Ensure fetching state is reset on cleanup if it was still true
          setFetching(false); // Reset fetching state immediately on cleanup
      
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleId, listType, apiKey]); 

  return { fetching, titlesInfo, error };
}
