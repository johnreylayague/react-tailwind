import React from "react";
import styles from "./BreadcrumbHeader.module.css";
import { Link } from "react-router-dom";

const BreadcrumbHeader = ({ label, breadcrumbData }) => {
  return (
    <div className="relative w-full before:absolute before:-z-[1] before:top-0 before:left-0 before:h-full before:w-full before:bg-no-repeat before:bg-center before:bg-cover before:bg-[url('./assets/image/banner/bg.png')]">
      <div className="container">
        <div className="md:flex-row md:justify-between md:items-center flex-col justify-center items-start py-[60px] flex">
          <h3 className="text-[#fff] text-[30px] font-bold leading-[1.5]">{label}</h3>
          <ul
            className={`text-[#f1f1f1] flex flex-row space-x-[22px] font-bold text-[14px] ${styles.nav_menu}`}
          >
            {breadcrumbData.map((breadcrumb, index, array) => {
              const currentIndex = index + 1;
              const totalElements = array.length;
              const isLastElement = currentIndex === totalElements;

              return (
                <li key={breadcrumb.id}>
                  {isLastElement ? (
                    <span className="font-normal">{breadcrumb.name}</span>
                  ) : (
                    <Link to={breadcrumb.link} relative="path">
                      {breadcrumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
