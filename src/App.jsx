import Home from "./routes/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listpage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlepage/SinglePage";
import ProfilePage from "./routes/profilePage/profilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },{
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        }
      ]
    },
   
  ]);
  return (
    
    
    <RouterProvider router={router}/>
  )
}

export default App