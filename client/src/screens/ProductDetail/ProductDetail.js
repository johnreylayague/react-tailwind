import React, { useContext, useState } from "react";
import Slider from "react-slick";
import UserContext from "../../contexts/UserContext.js";
import BreadcrumbHeader from "../../components/common/elements/Breadcrumb/BreadcrumbHeader.js";
import ContainerWrapper from "../../components/common/elements/Wrapper/ContainerWrapper.js";
import SectionHeader from "../../components/common/elements/Section/SectionHeader.js";
import { freshArrivalsSettings } from "../../utils/sliderSettings.js";
import ProductCard from "./components/ProductCard/ProductCard.js";
import assets from "../../assets/assets.js";
import GridWrapper from "../../components/common/elements/Wrapper/GridWrapper.js";
import ProductTabs from "./components/ProductTabs/ProductTabs.js";
import ProductTabsDetails from "./components/ProductTabsDetails/ProductTabsDetails.js";
import ProductInformation from "./components/ProductInformation/ProductInformation.js";
import ProductDescription from "./components/ProductDescription/ProductDescription.js";
import ProductReviews from "./components/ProductReviews/ProductReviews.js";
import ProductDetailsSection from "./components/ProductDetailsSection/ProductDetailsSection.js";
import ProductImageSection from "./components/ProductImageSection/ProductImageSection.js";

function ProductDetail() {
  const { handleProductModal } = useContext(UserContext);
  const [productTabsDetailNumber, setproductDetailNumber] = useState(1);

  const noAction = (event) => {
    event.preventDefault();
  };

  const productDetailTabs = (productTabsDetailNumber) => {
    setproductDetailNumber(productTabsDetailNumber);
  };

  const detailSections = [
    {
      label: "Description",
      number: 1,
      content: <ProductDescription description={assets.jsonData.productDetail.longDescription} />,
    },
    {
      label: "Additional Information",
      number: 2,
      content: (
        <ProductInformation informationData={assets.jsonData.productDetail.informationData} />
      ),
    },
    {
      label: `Reviews ${
        assets.jsonData.productDetail.reviews && `(${assets.jsonData.productDetail.reviews})`
      }`,
      number: 3,
      content: (
        <ProductReviews
          noAction={noAction}
          reviewsData={assets.jsonData.productDetail.reviewsData}
        />
      ),
    },
  ];

  return (
    <>
      <BreadcrumbHeader
        label="Product Details"
        breadcrumbData={[
          { id: 1, name: "Home", link: "/" },
          { id: 2, name: "Shop", link: "/shop" },
          { id: 3, name: "Product Details", link: "/product/1" },
        ]}
      />

      <ContainerWrapper className={"pt-[50px]"}>
        <GridWrapper>
          <ProductImageSection
            productImage={assets.jsonData.productDetail.productImage}
            productName={assets.jsonData.productDetail.productName}
            productRecommendation={assets.jsonData.productDetail.productRecommendation}
          />
          <ProductDetailsSection
            wishListOnClick={noAction}
            socialMediaPlatforms={["facebook", "twitter", "instagram"]}
            productRating={assets.jsonData.productDetail.stars}
            productName={assets.jsonData.productDetail.productName}
            productCurrentPrice={assets.jsonData.productDetail.currentPrice}
            productPreviousPrice={assets.jsonData.productDetail.previousPrice}
            productDescription={assets.jsonData.productDetail.description}
            productAttribute={assets.jsonData.productDetail.productAttribute}
            productQuantity={assets.jsonData.productDetail.quantity}
          />
        </GridWrapper>
      </ContainerWrapper>

      <ContainerWrapper className="pt-[62px]">
        <GridWrapper>
          <ProductTabs
            productTabsDetailNumber={productTabsDetailNumber}
            productDetailTabs={productDetailTabs}
            tabs={detailSections}
          />
          <ProductTabsDetails
            tabs={detailSections}
            productTabsDetailNumber={productTabsDetailNumber}
          />
        </GridWrapper>
      </ContainerWrapper>

      <ContainerWrapper className="pt-[50px]">
        <SectionHeader title={"Related Products"} />
        <Slider {...freshArrivalsSettings} className="mt-[30px] mx-[-15px]">
          {assets.jsonData.freshArrivalsList.map((product) => {
            return (
              <ProductCard key={product.id} productData={product} openModal={handleProductModal} />
            );
          })}
        </Slider>
      </ContainerWrapper>
    </>
  );
}

export default ProductDetail;
