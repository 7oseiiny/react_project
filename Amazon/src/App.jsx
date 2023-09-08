import Fashion from "./Component/Fashion/Fashion"
import KidsBaby from "./Component/Fashion/KidsBaby"
import Men from "./Component/Fashion/men"
import Mobile from "./Component/MobilePhone/mobile"
import AppLayout from "./Component/AppLayout/AppLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Component/Home/Home"
import React from 'react'
import TodayDealsPage from './Component/TodayDeals/TodayDealsPage';
import Coupons from './Component/TodayDeals/coupons';
import TodayDeals from './Component/TodayDeals/TodayDeals';
import { Provider } from "react-redux"
import store from './../store/store';
import VideoGames from "./Component/VideoGames/Vgames"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
    
      { index: true, element: <Home/>},
      { path: "/mobile", element: <Mobile/>},
      { path: "/fashion",
       element: <Fashion/>,
      children:[
        {index:true ,element:<Fashion/>},
        {path:'kids',element:<KidsBaby/>},
        {path:'men',element:<Men/>},]},
        { path: 'todayDeals', element: <TodayDealsPage />,children:[
          {index:true,element:<TodayDeals/>},
          {path:"coupons",element:<Coupons/>}
        ] },
        {path:'videogames',element:<VideoGames/>}
    ]
  }
])



function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  )
}

export default App
