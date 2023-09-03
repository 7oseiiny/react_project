import Fashion from "./Component/Fashion/Fashion"
import KidsBaby from "./Component/Fashion/KidsBaby"
import Men from "./Component/Fashion/men"
import Mobile from "./Component/MobilePhone/mobile"
import AppLayout from "./Component/AppLayout/AppLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Component/Home/Home"

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
    
      { index: true, element: <Home/>},
      { path: "/mobile", element: <Mobile/>},
      { path: "/fashion",
       element: <Fashion/>,
      children:[
        {index:true ,element:<Fashion/>},
        {path:'kids',element:<KidsBaby/>},
        {path:'men',element:<Men/>},]},
    ]
  }
])

function App() {
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
