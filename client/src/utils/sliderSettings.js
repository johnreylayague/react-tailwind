export const dailyDealsSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  appendDots: (dots) => (
    <div style={{ bottom: "-32px" }}>
      <ul className="flex flex-row justify-center items-center">
        {dots.map((dot) => {
          const index = dot.key;
          const children = dot.props.children;
          const getClass = dot.props.className;
          const activeClass =
            getClass === "slick-active"
              ? "h-[15.6px] w-[16px] bg-[#5d5d5d]"
              : "h-[12px] w-[12px] bg-[#F0F2F3]";

          return (
            <li key={index} className="!flex items-center !h-[unset] !w-[unset] !m-0 !mx-[4px]">
              <div
                className={`transition-all duration-[.3s] ${activeClass}`}
                onClick={children.props.onClick}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  ),
};

export const freshArrivalsSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const onSaleSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2500,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        position: "static",
        padding: "21px 15px 0px 18px ",
      }}
    >
      <ul className="flex flex-row !space-x-[8px] h-[16px]">
        {dots.map((dot) => {
          const index = dot.key;
          const children = dot.props.children;
          const getClass = dot.props.className;
          const activeClass =
            getClass === "slick-active"
              ? "h-[16px] w-[16px] bg-[#634832]"
              : "h-[12px] w-[12px] bg-[#fff]";

          return (
            <li key={index} className="!flex items-center !h-[unset] !w-[unset] !m-0 ">
              <div
                className={`transition-all duration-[.3s] ${activeClass}`}
                onClick={children.props.onClick}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  ),
};

export const onCartSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2500,
  arrows: false,
};
