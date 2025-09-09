import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./page/Homepage";
import MoviePage from "./page/MoviePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/movie/:id",
      element: <MoviePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
