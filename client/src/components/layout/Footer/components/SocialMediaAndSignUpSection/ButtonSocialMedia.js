import React from "react";

const ButtonSocialMedia = ({ href, onClick, icon: Icon, label, backgroundColor }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`h-[40px] w-[40px] flex justify-center items-center ${backgroundColor}`}
    >
      {Icon}
    </a>
  );
};

export default ButtonSocialMedia;
