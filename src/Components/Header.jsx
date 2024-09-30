import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="w-full bg-gray-800 h-full flex justify-between">
        <div className="flex items-center justify-center text-2xl font-bold foni uppercase px-3 tracking-widest text-blue-600">
          <span className="text-white"> Arti</span>fact
        </div>
        <div className="py-3 flex flex-row items-center justify-end gap-3 mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold tracking-wider uppercase ${
                isActive ? "text-white" : "text-blue-600"
              }`
            }
          >
            User
          </NavLink>
          <NavLink
            to="/interest"
            className={({ isActive }) =>
              `text-lg font-semibold tracking-wider uppercase  ${
                isActive ? "text-white" : "text-blue-600"
              }`
            }
          >
            USERSDATA
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
