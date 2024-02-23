import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Search, { loader as searchLoader } from "./pages/Search.tsx";
import WatchPage, { loader as watchLoader } from "./pages/WatchPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index={true} element={<Home />} />
      <Route path="search" element={<Search />} loader={searchLoader} />
      <Route
        path="watch/:anime-id"
        element={<WatchPage />}
        loader={watchLoader}
      >
        {/* <Route path=":episode-id" element={<EpisodePage />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
