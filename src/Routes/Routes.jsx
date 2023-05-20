import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/error-page";
import ToyDetails from "../Pages/SingleToyDetails/ToyDetails";

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
          path: '/services/:id',
          element: <ToyDetails></ToyDetails>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    },
  ]);

  export default router;