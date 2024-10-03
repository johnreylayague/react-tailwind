import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import BreadcrumbHeader from "../../components/common/elements/Breadcrumb/BreadcrumbHeader.js";
import ContainerWrapper from "../../components/common/elements/Wrapper/ContainerWrapper.js";
import Table from "./components/Table/Table.js";
import TableTheadRow from "./components/Table/TableTheadRow.js";
import TableHeader from "./components/Table/TableHeader.js";
import TableBody from "./components/Table/TableBody.js";
import TableRow from "./components/Table/TableRow.js";
import assets from "../../assets/assets.js";
import CouponInputSection from "./components/CouponInputSection/CouponInputSection.js";
import GridWrapper from "../../components/common/elements/Wrapper/GridWrapper.js";
import SectionHeader from "../../components/common/elements/Section/SectionHeader.js";
import SectionTitle from "../../components/common/elements/Section/SectionTitle.js";
import ProductCard from "./components/ProductCard/ProductCard.js";
import UserContext from "../../contexts/UserContext.js";
import { onCartSettings } from "../../utils/sliderSettings.js";
import OrderSummaryTable from "./components/OrderSummaryTable/OrderSummaryTable.js";
import CheckoutButton from "./components/CheckoutButton/CheckoutButton.js";

function Cart() {
  const { handleProductModal } = useContext(UserContext);
  let sliderRef = useRef(null);

  const handlePrevSlickSlider = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlickSlider = () => {
    sliderRef.current.slickNext();
  };

  const noAction = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* Main */}
      <BreadcrumbHeader
        label="Cart"
        breadcrumbData={[
          { id: 1, name: "Home", link: "/" },
          { id: 2, name: "Shop", link: "/shop" },
          { id: 3, name: "Cart", link: "/cart" },
        ]}
      />

      {/* Product Listing */}
      <ContainerWrapper className={"pt-[50px]"}>
        <Table>
          <TableTheadRow>
            <TableHeader></TableHeader>
            <TableHeader className={`text-left w-[32%]`}>Product</TableHeader>
            <TableHeader className={`text-left`}>Price</TableHeader>
            <TableHeader className={`text-left`}>Quantity</TableHeader>
            <TableHeader className={`text-left`}>Total</TableHeader>
          </TableTheadRow>
          <TableBody>
            {assets.jsonData.wishList.map((wish) => {
              return <TableRow key={wish.id} wishData={wish} noAction={noAction}></TableRow>;
            })}
          </TableBody>
        </Table>

        {/* Coupun Code */}
        <CouponInputSection
          inputName={"in-apply"}
          inputPlaceholder={"Enter Copun Code"}
          btnLabel={"APPLY"}
          btnName={"btnApply"}
        />

        {/* Upsells and Cart Total */}
        <GridWrapper className={"pt-[50px]"}>
          <div className="col-span-12 lg:col-span-6 px-[15px]">
            <SectionHeader
              title={"Upsells"}
              handleNextSlickSlider={handleNextSlickSlider}
              handlePrevSlickSlider={handlePrevSlickSlider}
            />
            <Slider
              ref={(slider) => {
                sliderRef.current = slider;
              }}
              {...onCartSettings}
              className="mt-[30px] mx-[-15px]"
            >
              {assets.jsonData.topPicksList.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    productData={product}
                    openModal={handleProductModal}
                  />
                );
              })}
            </Slider>
          </div>
          <div className="col-span-12 lg:col-span-6 px-[15px]">
            <SectionTitle title={"Cart Total"} />
            <OrderSummaryTable
              items={[
                { label: "Subtotal", value: "90.99$" },
                { label: "Tax", value: "9.99$ (11%)" },
                { label: "Total", value: "99.99$" },
              ]}
            />
            <CheckoutButton linkLabel={"PROCEED TO CHECKOUT"} linkPath={"/shop/checkout"} />
          </div>
        </GridWrapper>
      </ContainerWrapper>
    </>
  );
}

export default Cart;
