import React from "react";
import Icons from "../../../../common/elements/Icons/Icons.js";
import ButtonSocialMedia from "./ButtonSocialMedia.js";
import Button from "./Button.js";

const SocialMediaAndSignUpSection = ({
  platforms,
  sectionTitle,
  offerText,
  buttonLabel,
  buttonLink,
}) => {
  const noAction = (event) => {
    event.preventDefault();
  };

  const socialMediaIcons = [
    {
      id: 0,
      platform: "facebook",
      icon: <Icons.FontAwesome.Facebook className="text-light text-[18px]" />,
      backgroundColor: "bg-[rgb(59,87,157)]",
      link: "https://www.facebook.com/",
    },
    {
      id: 1,
      platform: "twitter",
      icon: <Icons.FontAwesome.Twitter className="text-light text-[18px]" />,
      backgroundColor: "bg-[rgb(44,170,225)]",
      link: "https://x.com/",
    },
    {
      id: 2,
      platform: "instagram",
      icon: <Icons.FontAwesome.Instagram className="text-light text-[18px]" />,
      backgroundColor: "bg-[rgb(225,48,108)]",
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="lg:col-span-3 col-span-12 px-[15px]">
      <div className="lg:col-span-3 col-span-12 px-[15px]">
        <div className="lg:text-left text-center">
          <h6 className="font-bold text-xl">{sectionTitle}</h6>

          <ul className="lg:justify-start justify-center mt-[21px] flex flex-row space-x-[8px]">
            {socialMediaIcons
              .filter((socialMedia) => platforms.includes(socialMedia.platform))
              .map((socialMedia, index) => {
                return (
                  <li key={index}>
                    <ButtonSocialMedia
                      href={socialMedia.link}
                      onClick={noAction}
                      icon={socialMedia.icon}
                      backgroundColor={socialMedia.backgroundColor}
                    />
                  </li>
                );
              })}
          </ul>

          <p className="text-[#515151] mt-[16px] font-semibold text-[13px] leading-[1.8]">
            {offerText}
          </p>
          <Button to={buttonLink} label={buttonLabel} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAndSignUpSection;
