import React from "react";
import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    <ul className="text-light text-[13px] font-semibold flex flex-row space-x-[15px]">
      <li>
        <Link to="/login" relative="path" className="">
          My Account
        </Link>
      </li>
      <li>Currency (USD)</li>
    </ul>
  );
};

export default UserAccount;
