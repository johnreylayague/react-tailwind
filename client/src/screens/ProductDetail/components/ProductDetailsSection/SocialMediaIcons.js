import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const SocialMediaIcons = ({ platforms }) => {
  const socialMediaIcons = [
    {
      id: 0,
      platform: "facebook",
      icon: <Icons.FontAwesome.Facebook className="text-[#838383] text-[14px]" />,
      link: "https://www.facebook.com/",
    },
    {
      id: 1,
      platform: "twitter",
      icon: <Icons.FontAwesome.Twitter className="text-[#838383] text-[14px]" />,
      link: "https://x.com/",
    },
    {
      id: 2,
      platform: "instagram",
      icon: <Icons.FontAwesome.Instagram className="text-[#838383] text-[14px]" />,
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      platform: "youtube",
      icon: <Icons.FontAwesome.Youtube className="text-[#838383] text-[14px]" />,
      link: "https://www.youtube.com/",
    },
    {
      id: 4,
      platform: "tiktok",
      icon: <Icons.FontAwesome.Tiktok className="text-[#838383] text-[14px]" />,
      link: "https://www.tiktok.com/",
    },
    {
      id: 5,
      platform: "whatsapp",
      icon: <Icons.FontAwesome.Whatsapp className="text-[#838383] text-[14px]" />,
      link: "https://web.whatsapp.com/",
    },
    {
      id: 6,
      platform: "pinterest",
      icon: <Icons.FontAwesome.Pinterest className="text-[#838383] text-[14px]" />,
      link: "https://www.pinterest.com/",
    },
  ];

  return (
    <ul className="flex flex-row space-x-[10px]">
      {socialMediaIcons
        .filter((socialMedia) => platforms.includes(socialMedia.platform))
        .map((socialMedia, index) => {
          return (
            <li key={index}>
              <a
                href={socialMedia.link}
                className="flex justify-center items-center h-[50px] w-[50px] border border-[#F0F2F3]"
              >
                {socialMedia.icon}
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default SocialMediaIcons;
