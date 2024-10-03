import React from "react";

const Media = ({ image, alt }) => {
  return (
    <div className="sm:col-span-4 col-span-6">
      <div className="relative group overflow-hidden">
        <img
          src={require(`../../../../../assets/image/banner/${image}`)}
          alt={alt}
          className="w-full h-full object-cover object-center transition-all duration-[.3s] group-hover:scale-[1.1] "
        />
      </div>
    </div>
  );
};

export default Media;
