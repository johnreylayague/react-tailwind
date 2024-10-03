import React from "react";

const ModalOverlay = ({ closeModal, isShowModal, children }) => {
  return (
    <>
      <div
        className={`bg-[#000] fixed top-0 right-0  bottom-0 left-0 z-40 transition-all duration-[.15s] ease-linear ${
          isShowModal ? "visible opacity-50" : "invisible opacity-0"
        }
        `}
      ></div>
      <div
        onClick={closeModal}
        className={`fixed block top-0 right-0 bottom-0 z-50 left-0 overflow-y-auto overflow-x-hidden transition-all duration-[.15s] ease-linear
    ${isShowModal ? "visible opacity-100" : "invisible opacity-0"}
    `}
      >
        <div
          className={`m-2 sm:my-7 sm:mx-auto transition-all duration-[.3s] ease-out  max-w-[1000px]   flex justify-center items-center min-h-[calc(100%_-_(.5rem_*_2))] sm:min-h-[calc(100%_-_(1.75rem_*_2))] ${
            isShowModal
              ? "visible opacity-100 translate-x-0 translate-y-0"
              : "invisible opacity-0 translate-x-0 translate-y-[-25%]"
          }
        `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalOverlay;
