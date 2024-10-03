import React from "react";
import FAQ from "./components/FAQ/FAQ.js";
import BreadcrumbHeader from "../../components/common/elements/Breadcrumb/BreadcrumbHeader.js";
import ImageCard from "./components/ImageCard/ImageCard.js";
import LayoutWrapper from "../../components/common/elements/Wrapper/LayoutWrapper.js";
import FeatureCard from "./components/FeaturedCard/FeaturedCard.js";
import assets from "../../assets/assets.js";
import ContactUsForm from "./components/ContactUsForm/ContactUsForm.js";

function ContactUs() {
  const noAction = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* Menu */}
      <BreadcrumbHeader
        label="Contact Us"
        breadcrumbData={[
          { id: 1, name: "Home", link: "/" },
          { id: 2, name: "Contact Us", link: "/contact-us" },
        ]}
      />

      {/* Image Card */}
      <LayoutWrapper className="pt-[50px]">
        <ImageCard
          title="Find Us In"
          imageClass="before:bg-[url('./assets/image/1.jpg')]"
          subTitle="Greece"
          pharagraph="Cras ultricies ligula sed magna dictum porta. Proin eget
              tortor risus."
        />
        <ImageCard
          title="Find Us In"
          imageClass="before:bg-[url('./assets/image/2.jpg')]"
          subTitle="New York"
          pharagraph="Cras ultricies ligula sed magna dictum porta. Proin eget
              tortor risus."
        />
      </LayoutWrapper>

      {/* Feature Card */}
      <LayoutWrapper className={"pt-[46px]"}>
        <FeatureCard
          imgSrc={assets.icons.messageAlert}
          imgAlt="flaticon messageAlert"
          title={"Call Center"}
          description={
            "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
        <FeatureCard
          imgSrc={assets.icons.messageAlert}
          imgAlt="flaticon messageAlert"
          title={"Mail Us"}
          description={
            "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
        <FeatureCard
          imgSrc={assets.icons.map}
          imgAlt="flaticon map"
          title={"Nearest Branch"}
          description={
            "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </LayoutWrapper>

      {/* FAQ and Contact Us */}
      <LayoutWrapper className="pt-[10px] lg:pt-[50px]">
        <FAQ title={"FAQ"} />
        <ContactUsForm title={"Contact Us"} handleSubmit={noAction} />
      </LayoutWrapper>
    </>
  );
}

export default ContactUs;
