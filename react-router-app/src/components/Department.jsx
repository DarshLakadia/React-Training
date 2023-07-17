import React from "react";
import { Link, Outlet } from "react-router-dom";

const Department = () => {
  return (
    <>
      <div>Departments</div>
      <nav>
        <Link to="react">React</Link>
        <Link to="ror">RoR</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Department;
