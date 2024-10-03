import React from "react";
import ContainerWrapper from "./components/ContainerWrapper/ContainerWrapper.js";
import assets from "../../assets/assets.js";
import Banner from "./components/Banner/Banner.js";
import Heading from "./components/Heading/Heading.js";
import Description from "./components/Description/Description.js";
import ButtonLink from "./components/ButtonLink/ButtonLink.js";

const NotFound = () => {
  return (
    <ContainerWrapper>
      <Banner bannerSrc={assets.banner.notFound} bannerAlt={"not found"} />
      <Heading headingText={"Page Not Found"} />
      <Description
        description={
          "The page you are trying to access could not be found. Please try looking for something else"
        }
      />
      <ButtonLink linkLabel={"GO TO HOME PAGE"} linkPath={"/"} />
    </ContainerWrapper>
  );
};

export default NotFound;
