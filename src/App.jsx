import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Singlegif from "./pages/Singlegif";
import Favorites from "./pages/Favorites";
import GifContextProvider from "./context/Context";

// Pages : 

// HomePage
// Category
// Search
// Single gif
// Favourites

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:category",
        element: <Category />
      },
      {
        path: "/search/:query",
        element: <Search />
      },
      {
        path: "/:type/:slug",
        element: <Singlegif />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
    ]
  }
])

function App() {

  return (
    <GifContextProvider>
      <RouterProvider router={router}/>
    </GifContextProvider>
  );
}

export default App;