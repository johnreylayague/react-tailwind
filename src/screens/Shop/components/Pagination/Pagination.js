import React from "react";

const Pagination = ({ pages, currentPage, onPageChange }) => {
  return (
    <div className="lg:mb-0 mb-[50px] pt-[30px]">
      <div className="flex flex-row justify-center items-center">
        <ul className="flex flex-row space-x-[15px]">
          {pages.map((page, index, array) => {
            const pageStyle =
              Number.parseInt(currentPage) === page
                ? "text-[#F0F2F3] bg-[#38220F]"
                : "text-[#18181D] bg-[#F0F2F3]";

            return (
              <li key={index}>
                <a
                  href="http://localhost:3000/"
                  onClick={onPageChange}
                  className={`${pageStyle} block px-[20px] py-[15px] font-semibold`}
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
