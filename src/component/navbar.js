import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <NavLink
          to="/dashboard-mobility"
          className="relative no-underline text-black-fonts-headings "
          activeClassName="active-link"
        >
          <h4 className="hover:bg-green-200">Mobility</h4>
        </NavLink>
        <NavLink
          to="/dashboard-rewards"
          className="relative no-underline text-black-fonts-headings"
          activeClassName="active-link"
        >
          <h4 className="hover:bg-green-200">Rewards</h4>
        </NavLink>

        <div className="w-[220px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[18px] px-[68px] box-border text-center text-29xl text-white">
          <b className="self-stretch relative [-webkit-text-stroke:1px_#000]">
            LL
          </b>
        </div>
        <NavLink
          to="/dashboard-friends"
          className="relative no-underline text-black-fonts-headings"
          activeClassName="active-link"
        >
          <h4 className="hover:bg-green-200">Friends</h4>
        </NavLink>
        <div className="relative text-black-fonts-headings">
          <h4>Contact</h4>
        </div>
      </>
      /* </div> */
    );
};

export default Navbar;
