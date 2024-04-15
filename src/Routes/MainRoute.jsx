import { createBrowserRouter } from "react-router-dom";
import Home from '../../src/Components/Pages/Home/Home'
import Login from '../../src/Components/Pages/Login/Login'
import Register from '../../src/Components/Pages/Register/Register'
import Root from "../Components/Root/Root";
import PageNotFound from "../Components/Pages/PageNotFound/PageNotFound";
import Profile from "../Components/Pages/Profile/Profile";
import BestOffers from "../Components/Sections/BestOffers";
import Card from "../Components/Sections/Card";
import PrivateRoute from "./PrivateRoute";
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
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path:'/best-offers',
          element:<BestOffers></BestOffers>,
          loader: ()=> fetch('/data.json')
        },
        {
          path:'/:id',
          element: <PrivateRoute><Card></Card></PrivateRoute>,
          loader: ()=> fetch('data.json')
        },
        
      ]
    },
  ]);




export default router;