import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons.js";

const WelcomeSection = ({ title, description }) => {
  return (
    <div className="after:bg-[rgba(0,0,0,.6)] lg:w-[450px] xl:w-[600px] w-full relative flex justify-center items-center p-[30px] before:absolute after:top-0 before:left-0 before:content-[''] before:h-full before:w-full before:bg-no-repeat before:bg-center before:bg-cover before:bg-[url('./assets/image/banner/auth.jpg')] after:absolute before:top-0 after:left-0 after:content-[''] after:h-full after:w-full">
      <div className="text-center w-[400px] z-10">
        <Icons.Image.CoffeCupWhite className={"w-[40px] h-[40px]"} />
        <h2 className="text-[#fff] md:text-[42px] text-[30px] mt-[30px] font-bold leading-[1.2]">
          {title}
        </h2>
        <p className="text-[#fff] my-[30px] leading-[1.8]">{description}</p>
      </div>
    </div>
  );
};

export default WelcomeSection;
