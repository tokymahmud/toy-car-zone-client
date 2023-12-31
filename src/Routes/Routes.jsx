import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/error-page";
import ToyDetails from "../Pages/SingleToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/All Toys/AllToys";
import MyToys from "../Pages/My Toys/MyToys";
import Addatoy from "../Pages/Add A Toy/Addatoy";
import AllToysTable from "../Pages/All Toys/AllToysTable";
import AllToysViewdetails from "../Pages/All Toys/AllToysViewdetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,

      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>,
        },
        {
          path: '/mytoys',
          element:<PrivateRoute> <MyToys></MyToys></PrivateRoute>,
        },
        {
          path: '/addatoy',
          element: <Addatoy></Addatoy>,
        },
        {
          path: '/services/:id',
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute> ,
          loader:({params})=>fetch(`https://toy-car-zone-server-eosin.vercel.app/services/${params.id}`)
        },
        {
          path: '/added/:id',
          element:<PrivateRoute><AllToysViewdetails></AllToysViewdetails></PrivateRoute> ,
          loader:({params})=>fetch(`https://toy-car-zone-server-eosin.vercel.app/added/${params.id}`)
        },
      ]
    },
  ]);

  export default router;