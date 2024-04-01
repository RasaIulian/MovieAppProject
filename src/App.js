import React from "react";
import { HomePage, MoviePage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/:id",
    component: <MoviePage />,
  },
];

// basename used for GitPages deployment page
const basename =
  process.env.NODE_ENV === "production" ? "/MovieAppProject" : "";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
