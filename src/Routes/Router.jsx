import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Trainings from "../pages/Trainings/Trainings";
import Trainers from "../pages/Trainers/Trainers";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/trainers",
        element: <Trainers></Trainers>,
      },
      {
        path: "/trainings",
        element: <Trainings></Trainings>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
