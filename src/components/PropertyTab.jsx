import React from "react";
import { Check } from "lucide-react";

const PropertyTab = ({ title, imgSrc, alt, isSelected }) => {
  return (
    <div className="relative w-[178px] bg-light h-[160px] border rounded-md flex flex-col justify-center items-center gap-4 cursor-pointer transition border-gray-300">
      {isSelected && (
        <div className="absolute top-2 right-2 bg-green-800 w-6 h-6 rounded-full flex items-center justify-center">
          <Check size={16} className="text-white" />
        </div>
      )}

      <img src={imgSrc} alt={alt} className="h-16" />
      <p className="text-brand font-[380] tracking-normal text-[13px] text-center">
        {title}
      </p>
    </div>
  );
};

export default PropertyTab;
