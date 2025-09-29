// g:\GItHubProjects\MovieAppProject\src\App.js
import { HomePage, MoviePage } from "./pages";
// Import createBrowserRouter and RouterProvider
import { createHashRouter, RouterProvider } from "react-router-dom";

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

// Create the router instance
const router = createHashRouter(routesConfig);

// App component provides the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;
