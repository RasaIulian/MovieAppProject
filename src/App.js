// g:\GItHubProjects\MovieAppProject\src\App.js
import React from "react";
import { HomePage, MoviePage } from "./pages";
// Import createBrowserRouter and RouterProvider
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define routes using the data router format
const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
    // You could add errorElement: <ErrorBoundary /> here for route-specific errors
  },
  {
    path: "/:id",
    element: <MoviePage />,
    // errorElement: <ErrorBoundary />
  },
  // Add other routes here if needed
];

// basename used for GitPages deployment page
const basename =
  process.env.NODE_ENV === "production" ? "/MovieAppProject" : "/"; // Use "/" for local dev

// Create the router instance
const router = createBrowserRouter(routesConfig, {
  basename: basename,
});

// App component now just provides the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;

