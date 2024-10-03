import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faGoogle,
  faTiktok,
  faWhatsapp,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faStar,
  faCheck,
  faBasketShopping,
  faArrowRight,
  faArrowLeft,
  faPlus,
  faChevronRight,
  faChevronLeft,
  faMinus,
  faCirclePlus,
  faClose,
  faChevronDown,
  faMagnifyingGlass,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

// MainBreadcrumb - For the primary breadcrumb navigation.
// SecondaryBreadcrumb - For a secondary or less prominent breadcrumb navigation.
// HeaderBreadcrumb - If it's used in the header section.
// FooterBreadcrumb - If it's used in the footer section.
// SidebarBreadcrumb - If it's used in a sidebar.
// PageBreadcrumb - For specific pages or sections.

export const FaStarIcon = ({ className, iconSize = "2xl" }) => {
  return <FontAwesomeIcon icon={faStar} size={iconSize} className={className} />;
};

const Star = (props) => {
  return <FontAwesomeIcon icon={faStar} {...props} />;
};

const Check = (props) => {
  return <FontAwesomeIcon icon={faCheck} {...props} />;
};

const Facebook = (props) => {
  return <FontAwesomeIcon icon={faFacebookF} {...props} />;
};

const ArrowRight = ({ className, ...props }) => {
  return <FontAwesomeIcon icon={faArrowRight} className={className} {...props} />;
};

const ArrowLeft = (props) => {
  return <FontAwesomeIcon icon={faArrowLeft} {...props} />;
};

const Twitter = (props) => {
  return <FontAwesomeIcon icon={faTwitter} {...props} />;
};

const Instagram = (props) => {
  return <FontAwesomeIcon icon={faInstagram} {...props} />;
};

const Youtube = (props) => {
  return <FontAwesomeIcon icon={faYoutube} {...props} />;
};

const BasketShopping = (props) => {
  return <FontAwesomeIcon icon={faBasketShopping} {...props} />;
};

const Plus = (props) => {
  return <FontAwesomeIcon icon={faPlus} {...props} />;
};

const ChevronRight = (props) => {
  return <FontAwesomeIcon icon={faChevronRight} {...props} />;
};
const ChevronLeft = (props) => {
  return <FontAwesomeIcon icon={faChevronLeft} {...props} />;
};

const CirclePlus = (props) => {
  return <FontAwesomeIcon icon={faCirclePlus} {...props} />;
};

const Google = (props) => {
  return <FontAwesomeIcon icon={faGoogle} {...props} />;
};

const MagnifyingGlass = (props) => {
  return <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />;
};

const Minus = (props) => {
  return <FontAwesomeIcon icon={faMinus} {...props} />;
};

const Close = ({ className, props }) => {
  return <FontAwesomeIcon icon={faClose} className={className} {...props} />;
};

const CoffeCupWhite = ({ className }) => {
  return (
    <i
      className={`
        ${className}
        inline-block relative w-[25px] h-[25px] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:content-[''] before:bg-no-repeat before:bg-center before:bg-cover before:bg-[url('./assets/icons/coffee-cup-white.png')]
      `}
    ></i>
  );
};

const Mail = ({ className = "w-[25px] h-[25px]", props }) => {
  return (
    <i
      className={`
      inline-block relative 
      before:w-full before:h-full before:absolute before:top-0 before:left-0 before:content-[''] before:bg-no-repeat before:bg-center before:bg-cover 
      before:bg-[url('./assets/icons/message-alert.png')]
      ${className}`}
      {...props}
    ></i>
  );
};

const Map = ({ className = "w-[25px] h-[25px]", props }) => {
  return (
    <i
      className={`
      inline-block relative 
      before:w-full before:h-full before:absolute before:top-0 before:left-0 before:content-[''] before:bg-no-repeat before:bg-center before:bg-cover 
      before:bg-[url('./assets/icons/map.png')]
      ${className}`}
      {...props}
    ></i>
  );
};

const CloseRed = ({ className }) => {
  return (
    <i
      className={`
        ${className}
      w-[25px] h-[25px] inline-block relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:content-[''] before:bg-no-repeat before:bg-center before:bg-cover before:bg-[url('./assets/icons/close.png')]
      `}
    ></i>
  );
};

const GridMenu = ({ className }) => {
  //https://www.flaticon.com/free-icon/grid_4485553?term=grid&page=1&position=36&origin=search&related_id=4485553

  return (
    <i
      className={`
      ${className}
      inline-block relative w-[25px] h-[25px]
      before:bg-[url('./assets/icons/grid.png')] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:content-[''] before:bg-no-repeat before:bg-center before:bg-cover
      `}
    ></i>
  );
};

const ChevronDown = ({ className, ...props }) => {
  return <FontAwesomeIcon icon={faChevronDown} className={className} {...props} />;
};

const ChevronUp = ({ className, ...props }) => {
  return <FontAwesomeIcon icon={faChevronUp} className={className} {...props} />;
};

const Heart = (props) => {
  return <FontAwesomeIcon icon={faHeart} {...props} />;
};

const Tiktok = (props) => {
  return <FontAwesomeIcon icon={faTiktok} {...props} />;
};
const Pinterest = (props) => {
  return <FontAwesomeIcon icon={faPinterest} {...props} />;
};
const Whatsapp = (props) => {
  return <FontAwesomeIcon icon={faWhatsapp} {...props} />;
};

const iconAssets = {
  Image: { GridMenu, CoffeCupWhite, CloseRed },
  FontAwesome: {
    Heart,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    MagnifyingGlass,
    BasketShopping,
    Check,
    ChevronLeft,
    ChevronRight,
    Plus,
    Minus,
    ChevronDown,
    ChevronUp,
    Tiktok,
    Pinterest,
    Whatsapp,
    ArrowLeft,
    CirclePlus,
    Star,
    Google,
  },

  Twitter,
  Instagram,
  Youtube,
  BasketShopping,
  ArrowRight,
  ArrowLeft,
  Star,
  Plus,
  Minus,
  ChevronRight,
  CirclePlus,
  CoffeCupWhite,
  Google,
  Mail,
  Map,
  CloseRed,
  Close,
  ChevronDown,
  MagnifyingGlass,
  GridMenu,
  Check,
};

export default iconAssets;
