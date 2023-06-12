import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useRoleChange from "../hooks/useRoleChange";
import { Helmet } from "react-helmet";

const DashBorad = () => {
  const { data } = useRoleChange();

  const admin = (
    <>
      <NavLink to="allUsers">All Users</NavLink>
      <NavLink to="allClasses">All classes</NavLink>
      <div className="divider"></div>
      <NavLink to="/">Home</NavLink>
    </>
  );
  const trainer = (
    <>
      <h2 className="text-lg my-10">Trainer Section</h2>
      <NavLink to="/addClass">All Users</NavLink>
      <NavLink to="/myClass">All classes</NavLink>
      <div className="divider"></div>
      <NavLink to="/">Home</NavLink>
    </>
  );
  const student = (
    <>
      <h2 className="text-lg my-10">Student Section</h2>
      <NavLink to="/selectedClasses">Selected Class</NavLink>
      <NavLink to="/enrolledClasses">Enrolled Class</NavLink>
      <div className="divider"></div>
      <NavLink to="/">Home</NavLink>
    </>
  );

  return (
    <div>
      <Helmet>
        <title>Dashboard | Trainer Academy </title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {data.role === "admin" && admin}
            {data.role === "trainer" && trainer}
            {data.role === "student" && student}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBorad;
