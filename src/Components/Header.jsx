import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="w-full bg-gray-400 h-full flex justify-between">
        <div className="flex items-center justify-center text-2xl font-bold foni uppercase px-3 tracking-widest">
          <span className="text-white"> Arti</span>fact
        </div>
        <div className="py-3 flex flex-row items-center justify-end gap-3 mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold tracking-wider uppercase ${
                isActive ? "text-white" : "text-black"
              }`
            }
          >
            User
          </NavLink>
          <NavLink
            to="/interest"
            className={({ isActive }) =>
              `text-lg font-semibold tracking-wider uppercase  ${
                isActive ? "text-white" : "text-black"
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
