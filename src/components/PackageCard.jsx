import React from "react";
import { Grid3X3, ExternalLink } from "lucide-react";

const PackageCard = ({ imgSrc, title, desc, isSelected, onSelect }) => {
  return (
    <div className="border-[1px] border-gray-300 rounded-xl ">
      <div>
        <img src={imgSrc} alt="" className="rounded-t-xl w-full " />
      </div>

      <div className="p-5">
        <p className=" text-md md:text-xl text-brand font-semibold">{title}</p>
        <p className="text-brand text-[14px] font-[380px] mt-[12px]">{desc}</p>

        <button
          className={`cursor-pointer w-full border-[1px] border-gray-400 shadow-xl font-medium py-1 px-3 md:py-3 md:px-6
             rounded-lg mb-4 transition-colors mt-[10px] md:mt-[40px] ${
               isSelected === true
                 ? "bg-dark text-white"
                 : "bg-gray-200 hover:bg-gray-300 text-brand"
             }`}
          onClick={(e) => {
            onSelect();
          }}
        >
          Get it
        </button>

        <p className=" text-[12px] md:text-[16px] flex justify-center text-brand items-center cursor-pointer">
          Learn more <ExternalLink size={13} />
        </p>
        <p className="text-[12px] md:text-[16px] flex justify-center mt-2 text-dark items-center">
          Special conditions <Grid3X3 className="ms-1" size={13} />
        </p>
      </div>
    </div>
  );
};

export default PackageCard;
