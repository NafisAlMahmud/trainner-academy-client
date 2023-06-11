import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useRoleChange from "../hooks/useRoleChange";

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
      <NavLink to="/addClass">All Users</NavLink>
      <NavLink to="/myClass">All classes</NavLink>
    </>
  );
  const student = (
    <>
      <NavLink to="/selectedClasses">All Users</NavLink>
      <NavLink to="/enrolledClasses">All classes</NavLink>
    </>
  );

  return (
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
  );
};

export default DashBorad;
