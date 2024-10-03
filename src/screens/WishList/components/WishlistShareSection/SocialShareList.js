import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const SocialShareList = ({ platforms, noAction }) => {
  const socialMediaIcons = [
    {
      id: 0,
      platform: "facebook",
      icon: <Icons.FontAwesome.Facebook className="text-[#838383] text-[13px]" />,
      link: "https://www.facebook.com/",
    },
    {
      id: 1,
      platform: "twitter",
      icon: <Icons.FontAwesome.Twitter className="text-[#838383] text-[13px]" />,
      link: "https://x.com/",
    },
    {
      id: 2,
      platform: "instagram",
      icon: <Icons.FontAwesome.Instagram className="text-[#838383] text-[13px]" />,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <ul className="mt-[20px] flex flex-row justify-center space-x-[10px]">
      {socialMediaIcons
        .filter((socialMedia) => platforms.includes(socialMedia.platform))
        .map((socialMedia) => {
          return (
            <li key={socialMedia.id}>
              <a
                href={socialMedia.link}
                onClick={noAction}
                className="w-[50px] h-[50px] flex justify-center items-center border border-[#F0F2F3] bg-[#fff]"
              >
                {socialMedia.icon}
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default SocialShareList;
