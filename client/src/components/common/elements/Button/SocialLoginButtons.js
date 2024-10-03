import React from "react";
import Icons from "../Icons/Icons.js";
import { capitalizeFirstLetter } from "../../../../utils/textHelpers.js";

const SocialLoginButtons = ({ platforms }) => {
  const socialMediaIcons = [
    {
      platform: "facebook",
      icon: <Icons.FontAwesome.Facebook className="text-[15px] mr-[4px] text-[#fff]" />,
      backgroundColor: "bg-[rgb(59,87,157)]",
    },
    {
      platform: "google",
      icon: <Icons.FontAwesome.Google className="text-[15px] mr-[4px] text-[#fff]" />,
      backgroundColor: "bg-[rgb(220,74,56)]",
    },
  ];

  return (
    <ul>
      {socialMediaIcons
        .filter((socialMedia) => platforms.includes(socialMedia.platform))
        .map((socialMedia, index) => {
          return (
            <li key={index} className={"last:mb-0 mb-[10px]"}>
              <button
                type={"button"}
                name={`btn-${socialMedia.platform}`}
                className={`${socialMedia.backgroundColor} text-[#fff] h-[48px] font-semibold py-[12px] px-[20px] leading-[24px] text-center block w-full`}
              >
                {socialMedia.icon} Continue with {capitalizeFirstLetter(socialMedia.platform)}
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default SocialLoginButtons;
