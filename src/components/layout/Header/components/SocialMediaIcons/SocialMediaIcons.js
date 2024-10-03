import React from "react";
import Icons from "../../../../common/elements/Icons/Icons.js";

const SocialMediaIcons = ({ platforms, noAction }) => {
  const socialMediaIcons = [
    {
      id: 0,
      platform: "facebook",
      icon: <Icons.FontAwesome.Facebook className="text-light" />,
      link: "https://www.facebook.com/",
    },
    {
      id: 1,
      platform: "twitter",
      icon: <Icons.FontAwesome.Twitter className="text-light" />,
      link: "https://x.com/",
    },
    {
      id: 2,
      platform: "instagram",
      icon: <Icons.FontAwesome.Instagram className="text-light" />,
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      platform: "youtube",
      icon: <Icons.FontAwesome.Youtube className="text-light" />,
      link: "https://www.youtube.com/",
    },
    {
      id: 4,
      platform: "tiktok",
      icon: <Icons.FontAwesome.Tiktok className="text-light" />,
      link: "https://www.tiktok.com/",
    },
    {
      id: 5,
      platform: "whatsapp",
      icon: <Icons.FontAwesome.Whatsapp className="text-light" />,
      link: "https://web.whatsapp.com/",
    },
    {
      id: 6,
      platform: "pinterest",
      icon: <Icons.FontAwesome.Pinterest className="text-light" />,
      link: "https://www.pinterest.com/",
    },
  ];

  return (
    <ul className="text-[14px] flex flex-row space-x-[20px] ">
      {socialMediaIcons
        .filter((socialMedia) => platforms.includes(socialMedia.platform))
        .map((socialMedia, index) => {
          return (
            <li key={index}>
              <a href={socialMedia.link} onClick={noAction} className="">
                {socialMedia.icon}
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default SocialMediaIcons;
