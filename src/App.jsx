import Fashion from "./Component/Fashion/Fashion";
import KidsBaby from "./Component/Fashion/KidsBaby";
import Men from "./Component/Fashion/men";
import Mobile from "./Component/MobilePhone/mobile";
import AppLayout from "./Component/AppLayout/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";
import React, { useEffect } from "react";
import TodayDealsPage from "./Component/TodayDeals/TodayDealsPage";
import Coupons from "./Component/TodayDeals/coupons";
import TodayDeals from "./Component/TodayDeals/TodayDeals";
import { Provider } from "react-redux";
import store from "./../store/store";
import VideoGames from "./Component/VideoGames/Vgames";
import Prime from "./Component/prime/Prime";
import Electronics from "./Component/Electronics/Elec";
import FashionPage from "./Component/Fashion/fashionPage";
import Monitor from "./Component/monitor/monitor";
import Books from "./Component/books/Books";
import HomeProducts from "./Component/HomeProducts/HomeProducts";
import HomeDecor from "./Component/HomeProducts/HomeDecor/HomeDecor";
import Main from "./Component/HomeProducts/Main/Main";
import BestSeller from "./Component/VideoGames/BestSeller";
import VgamesNav from "./Component/VideoGames/VgamesNav";
import axios from "axios";
import axiosInstance from "./axiosConfig/instance";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/mobile", element: <Mobile /> },
      {
        path: "todayDeals",
        element: <TodayDealsPage />,
        children: [
          { index: true, element: <TodayDeals /> },
          { path: "coupons", element: <Coupons /> },
        ],
      },
      {
        path: "HomeProducts",
        element: <HomeProducts />,
        children: [
          { index: true, element: <Main /> },
          { path: "Decor", element: <HomeDecor /> },
        ],
      },
      { path: "electronics", element: <Electronics /> },
      {
        path: "fashion",
        element: <FashionPage />,
        children: [
          { index: true, element: <Fashion /> },
          { path: "kids", element: <KidsBaby /> },
          { path: "men", element: <Men /> },
        ],
      },
      {
        path: "videogames",
        element: <VgamesNav />,
        children: [
          { index: true, element: <VideoGames /> },
          { path: "BestSeller", element: <BestSeller /> },
        ],
      },
      { path: "prime", element: <Prime /> },
      { path: "books", element: <Books /> },
      {
        path: "Monitor",
        element: <Monitor />,
      },
    ],
  },
]);

function App() {
  var result = "";
  async function start() {
    const api = await axiosInstance.get();
    result = api.data;
    console.log(result);
  }
  start();
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
