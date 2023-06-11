import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Trainings from "../pages/Trainings/Trainings";
import Trainers from "../pages/Trainers/Trainers";
import Signup from "../pages/Signup/Signup";
import ErrorPage from "../pages/Error/ErrorPage";
import DashBorad from "../Layout/DashBorad";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllClasses from "../pages/Dashboard/AllClasses/AllClasses";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import AddClasses from "../pages/Dashboard/AddClasses/AddClasses";

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
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBorad></DashBorad>,
    children: [
      {
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "selectedClasses",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "addClasses",
        element: <AddClasses></AddClasses>,
      },
    ],
  },
]);
