import { createBrowserRouter } from "react-router-dom";
import Home from '../../src/Components/Pages/Home/Home'
import Login from '../../src/Components/Pages/Login/Login'
import Register from '../../src/Components/Pages/Register/Register'
import Root from "../Components/Root/Root";
import PageNotFound from "../Components/Pages/PageNotFound/PageNotFound";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<PageNotFound></PageNotFound>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('/data.json')
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);




export default router;