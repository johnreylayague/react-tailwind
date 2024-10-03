import React from "react";
import assets from "../../../../assets/assets.js";
import Button from "./components/Button/Button.js";
import Dropdown from "./components/Dropdown/Dropdown.js";
import QuantityHandler from "./components/QuantityHandler/QuantityHandler.js";
import ProductDetails from "./components/Product/ProductDetails.js";
import ProductImage from "./components/Product/ProductImage.js";
import ButtonClose from "./components/Button/ButtonClose.js";
import ProductInfoSection from "./components/Product/ProductInfoSection.js";

const Modal = ({ closeModal }) => {
  const dataDropdownAmount = [
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
    { id: 3, text: "Option 3" },
  ];
  const dataDropdownBreed = [
    { id: 1, text: "Italian" },
    { id: 2, text: "Egyptian" },
  ];

  return (
    <div className="bg-[#fff] flex flex-col" onClick={(event) => event.stopPropagation()}>
      <div className="p-[20px] sm:p-[40px] relative">
        <ButtonClose handleCloseModal={closeModal} />
        <div className="container">
          <div className="grid grid-cols-12 mx-[-15px]">
            <ProductImage src={assets.products.grapeFruit} alt={"grape fruit"} />
            <ProductInfoSection>
              <ProductDetails
                title="Cold brewed"
                price="8"
                discount="14"
                description="Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
                stars={[true, true, false, false, false]}
              />
              <Dropdown label={"Select Amount"} dataDropdown={dataDropdownAmount} />
              <Dropdown label={"Select A Breed"} dataDropdown={dataDropdownBreed} />
              <div className="flex-col md:flex-row flex gap-[20px]">
                <Button>BUY NOW</Button>
                <QuantityHandler value={1} />
              </div>
            </ProductInfoSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
