import React from "react";
import { Link } from "react-router-dom";

// MainBreadcrumb - For the primary breadcrumb navigation.
// SecondaryBreadcrumb - For a secondary or less prominent breadcrumb navigation.
// HeaderBreadcrumb - If it's used in the header section.
// FooterBreadcrumb - If it's used in the footer section.
// SidebarBreadcrumb - If it's used in a sidebar.
// PageBreadcrumb - For specific pages or sections.

export const ButtonPrimary = ({ to, label, className = "" }) => {
  return (
    <Link
      to={to}
      className={`
        mt-[15px] inline-block px-[16px] py-[12px] text-[13px] font-semibold 
        bg-[#634832] text-[#fff]
        ${className}
        `}
    >
      {label}
    </Link>
  );
};

export const ButtonSocialMedia = ({ href, onClick, icon: Icon, label, backgroundColor }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
      h-[40px] w-[40px] flex justify-center items-center 
      ${backgroundColor}`}
      aria-label={label}
    >
      {Icon}
    </a>
  );
};

// export default ButtonPrimary;
