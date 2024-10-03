import React from "react";
import Banner from "../../../../components/common/elements/Banner/Banner";
import ContainerWrapper from "../../../../components/common/elements/ContainerWrapper/ContainerWrapper";

const PromoBanner = ({ title, pharagraph }) => {
  return (
    <ContainerWrapper className="pt-[30px]">
      <Banner.Promo title={title} pharagraph={pharagraph} />
    </ContainerWrapper>
  );
};

export default PromoBanner;
