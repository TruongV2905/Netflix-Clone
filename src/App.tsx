import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./page/Homepage";
import MovieCard from "./components/MovieCard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/test",
      element: (
        <div className="mx-10 mt-20">
          <MovieCard/>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
