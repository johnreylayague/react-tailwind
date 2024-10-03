import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicHeader from "../../components/layout/Header/PublicHeader";
import PublicFooter from "../../components/layout/Footer/PublicFooter";
import { Outlet, useLocation } from "react-router-dom";
import Modal from "../../components/common/elements/Modal/Modal";
import ModalOverlay from "../../components/common/elements/Modal/ModalOverlay";
import UserContext from "../../contexts/UserContext";

const Root = () => {
  const location = useLocation();
  const { sharedState, setSharedState } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleCloseProductModal = () => {
    setSharedState((prevSharedState) => {
      return { ...prevSharedState, isShowModal: false };
    });
  };

  return (
    <>
      <PublicHeader />
      <Outlet />
      <PublicFooter />
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <ModalOverlay isShowModal={sharedState.isShowModal} closeModal={handleCloseProductModal}>
        <Modal closeModal={handleCloseProductModal} />
      </ModalOverlay>
    </>
  );
};

export default Root;
