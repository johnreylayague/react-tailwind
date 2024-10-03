import React from "react";
import assets from "../../assets/assets.js";
import BreadcrumbHeader from "../../components/common/elements/Breadcrumb/BreadcrumbHeader.js";
import ContainerWrapper from "../../components/common/elements/Wrapper/ContainerWrapper.js";
import LayoutWrapper from "../../components/common/elements/Wrapper/LayoutWrapper.js";
import AboutImageSection from "./components/AboutSection/ImageSection.js";
import AboutTextContent from "./components/AboutSection/TextContent.js";
import PromoBanner from "../../components/common/elements/Banner/PromoBanner.js";
import AboutSummaryImageSection from "./components/AboutSummarySection/ImageSection.js";
import AboutSummaryTextContentSection from "./components/AboutSummarySection/TextContent.js";
import SectionTitle from "../../components/common/elements/Section/SectionTitle.js";
import Testimonial from "./components/Testimonial/Testimonial.js";
import GridWrapper from "../../components/common/elements/Wrapper/GridWrapper.js";

function AboutUs() {
  return (
    <>
      {/* Breadcrumb */}
      <BreadcrumbHeader
        label="About Us"
        breadcrumbData={[
          { id: 1, name: "Home", link: "/" },
          { id: 2, name: "About Us", link: "/about-us" },
        ]}
      />

      {/* About Us */}
      <LayoutWrapper className={"pt-[50px]"}>
        <AboutImageSection imageSrc={assets.image.about2} imageAlt={"spilled coffe beans"} />
        <AboutTextContent
          title={
            <>
              Serving <span className="text-[#38220F]">Mountain Coffee </span> Since 1922
            </>
          }
          paragraphData={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          ]}
          linkText={"BROWSE OUR SHOP"}
          linkTo={"/shop"}
        />
      </LayoutWrapper>

      {/* Promo Banner */}
      <ContainerWrapper className={"pt-[50px]"}>
        <PromoBanner
          title={"Buy Today and Get 20% Off"}
          pharagraph={
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, con."
          }
          buttonLabel={"SHOP NOW"}
          buttonLink={"/shop"}
          backgroundSrc={assets.banner.bg}
          backgroundAlt={"group of coffee"}
        />
      </ContainerWrapper>

      {/* About Us Summary */}
      <LayoutWrapper className={"pt-[50px]"}>
        <AboutSummaryImageSection
          imageSrc={assets.banner.about}
          imageAlt={"pouring a glass of milk"}
        />
        <AboutSummaryTextContentSection
          title={
            <>
              Serving <span className="text-[#38220F]">Mountain Coffee</span> Since 1922
            </>
          }
          paragraphData={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          ]}
          listItemData={[
            "Lorem Ipsum has been the industry's standard dummy text ever",
            "Lorem Ipsum has been the industry's",
            "Lorem Ipsum has been the industry's standard dummy text ever",
            "Lorem Ipsum has been the industry's standard dummy",
          ]}
          linkText={"BROWSE OUR SHOP"}
          linkTo={"/shop"}
        />
      </LayoutWrapper>

      {/* Testimonial */}
      <ContainerWrapper className={"pt-[50px]"}>
        <SectionTitle title={"What Are People Saying"} />
        <GridWrapper>
          <Testimonial
            rating={[true, true, true, true, false]}
            title="Perfect Service"
            pharagraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            image={assets.image.ceo1}
            name="John Mishlen"
            jobTitle="Executive CEO at company"
          />
          <Testimonial
            rating={[true, true, true, true, false]}
            title="Competitive prices"
            pharagraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            image={assets.image.ceo2}
            name="Moe Sondi"
            jobTitle="Executive CEO at company"
          />
          <Testimonial
            rating={[true, true, true, true, false]}
            title="Great agents"
            pharagraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            image={assets.image.ceo3}
            name="John Mishlen"
            jobTitle="Executive CEO at company"
          />
        </GridWrapper>
      </ContainerWrapper>
    </>
  );
}

export default AboutUs;
