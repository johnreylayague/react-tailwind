import React from "react";
import FollowUsOnInstagram from "./components/FollowUsOnInstagram/FollowUsOnInstagram.js";
import CompanyLogo from "./components/CompanyLogo/CompanyLogo.js";
import CopyrightAndBackToTop from "./components/CopyrightAndBackToTop/CopyrightAndBackToTop.js";
import CategoryList from "./components/CategoryList/CategoryList.js";
import assets from "../../../assets/assets.js";
import SocialMediaAndSignUpSection from "./components/SocialMediaAndSignUpSection/SocialMediaAndSignUpSection.js";
import ContainerWrapper from "../../common/elements/Wrapper/ContainerWrapper.js";
import GridWrapper from "../../common/elements/Wrapper/GridWrapper.js";

const PublicFooter = () => {
  const noAction = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <FollowUsOnInstagram
        title={
          <>
            Follow Us On <span className="block">Instagram</span>
          </>
        }
        backGroundImageAlt={"cup of coffee's and beans"}
        backGroundImageSrc={assets.banner.bg}
        buttonLabel={"FOLLOW US"}
        buttonLink={"#"}
        dataBannerList={assets.jsonData.bannerList}
        noAction={noAction}
      />

      <ContainerWrapper className={"bg-[#F0F2F3] pt-[50px]"}>
        <CompanyLogo logoSrc={assets.image.mp3Logo} altText={"MP3 Company Logo"} />

        <GridWrapper className="pt-[50px]">
          <CategoryList title={"Information"} items={assets.jsonData.informationList} />
          <CategoryList title={"Top Categories"} items={assets.jsonData.topCategoryList} />
          <CategoryList title={"Others"} items={assets.jsonData.otherList} />

          <SocialMediaAndSignUpSection
            platforms={["facebook", "twitter", "instagram"]}
            sectionTitle={"Social Media"}
            offerText={"Signup and get exclusive offers and coupon codes"}
            buttonLabel={"SIGN UP"}
            buttonLink={"/sign-up"}
          />
        </GridWrapper>

        <CopyrightAndBackToTop
          copyrightText={"Copyright © 2020 Yourwebsite All Rights Reserved."}
          backToTopButtonLabel={"Back to top"}
        />
      </ContainerWrapper>
    </>
  );
};

export default PublicFooter;
