import React, { useState } from "react";
import BreadcrumbHeader from "../../components/common/elements/Breadcrumb/BreadcrumbHeader.js";
import ContainerWrapper from "../../components/common/elements/Wrapper/ContainerWrapper.js";
import GridWrapper from "../../components/common/elements/Wrapper/GridWrapper.js";
import CustomerPrompt from "./components/CustomerPrompt/CustomerPrompt.js";
import CouponPrompt from "./components/CouponPrompt/CouponPrompt.js";
import BillingForm from "./components/BillingForm/BillingForm.js";
import ProductTable from "./components/ProductTable/ProductTable.js";
import PaymentForm from "./components/PaymentForm/PaymentForm.js";
import assets from "../../assets/assets.js";

function Checkout() {
  const [couponDropDown, setCouponDropDown] = useState(false);
  const toggleCouponDropDown = () => {
    setCouponDropDown((prevState) => !prevState);
  };

  return (
    <>
      <BreadcrumbHeader
        label="Checkout"
        breadcrumbData={[
          { id: 1, name: "Home", link: "/" },
          { id: 2, name: "Shop", link: "/shop" },
          { id: 3, name: "Checkout", link: "/checkout" },
        ]}
      />

      <ContainerWrapper className="pt-[50px]">
        <GridWrapper>
          <div className="lg:col-span-7 col-span-12 px-[15px]">
            <CustomerPrompt
              text={"Are you a returning customer?"}
              linkPath={"/login"}
              linkLabel={"Click here to login"}
            />
            <CouponPrompt couponDropDown={couponDropDown} onClick={toggleCouponDropDown} />
            <BillingForm title={"Billing Details"} />
          </div>
          <div className="lg:col-span-5 col-span-12 px-[15px]">
            <ProductTable tableData={assets.jsonData.productTableList} grandTotal={"56.99"} />
            <PaymentForm />
          </div>
        </GridWrapper>
      </ContainerWrapper>
    </>
  );
}

export default Checkout;
