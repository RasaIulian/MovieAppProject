import React, { useEffect, useState } from "react";
import { Title } from "./Homepage.style";

export function HomePage() {
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_cqzt9my1")
      .then((res) => res.json())
      .then((data) => setPageData(data));
  }, []);

  const stringData = JSON.stringify(pageData.items[0]);

  return <Title>Titlu: {stringData}</Title>;
}
