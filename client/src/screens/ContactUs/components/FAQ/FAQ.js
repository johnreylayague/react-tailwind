import React from "react";
import Details from "./Details";
import SectionTitle from "../../../../components/common/elements/Section/SectionTitle.js";

const FAQ = ({ title }) => {
  const dataDetails = [
    {
      title: "What is Coffeez?",
      description:
        "Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
      title: "Getting Started with Coffeez",
      description:
        "Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
      title: "Do i have the latest version?",
      description:
        "Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
      title: "How many times can I use Coffeez?",
      description:
        "Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
    {
      title: "How to migrate my website?",
      description:
        "Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
  ];

  return (
    <div className="lg:col-span-5 col-span-12 px-[15px]">
      <SectionTitle title={title} />
      {dataDetails.map((detail, index, array) => {
        const currentPosition = index + 1;
        const arrayLength = array.length;
        const positionStyle = currentPosition === arrayLength ? "" : "border-b border-b-[#F0F2F3]";

        return (
          <Details
            key={index}
            className={`mb-[20px] ${positionStyle}`}
            title={detail.title}
            description={detail.description}
          />
        );
      })}
    </div>
  );
};

export default FAQ;
