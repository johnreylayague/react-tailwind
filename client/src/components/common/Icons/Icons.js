import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faStar, faCheck } from "@fortawesome/free-solid-svg-icons";

export const FaStarIcon = ({ className }) => {
  return <FontAwesomeIcon icon={faStar} size="2xl" className={className} />;
};

export const FaCheckIcon = ({ className }) => {
  return <FontAwesomeIcon icon={faCheck} size="2xl" className={className} />;
};
export const faFacebookIcon = ({ className }) => {
  return <FontAwesomeIcon icon={faCheck} size="2xl" className={className} />;
};
