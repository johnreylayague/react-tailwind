import React from "react";
import styles from "./ImageSection.module.css";

const ImageSection = ({ imageSrc, imageAlt }) => {
  return (
    <div className="col-span-12 lg:col-span-6 px-[15px] relative">
      <img src={imageSrc} alt={imageAlt} className="mb-[20px] lg:mb-0" />
      <div className={styles.bg_dots}></div>
    </div>
  );
};

export default ImageSection;
