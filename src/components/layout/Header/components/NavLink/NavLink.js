import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ navLinksData }) => {
  return (
    <div className={"min-h-[65px] flex flex-row justify-between items-center"}>
      <ul className="text-light flex flex-row space-x-[40px] font-semibold text-sm">
        {navLinksData.map((nav) => {
          return (
            <li key={nav.id}>
              <Link to={nav.link} relative="path">
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLink;
