import React from "react";
import { HomePage, MoviePage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:id",
    element: <MoviePage />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
