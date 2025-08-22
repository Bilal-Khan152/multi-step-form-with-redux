import React from "react";
import { Check } from "lucide-react";

const Resource = ({ title, imgSrc, alt, selected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="relative w-[180px] bg-light h-[180px] border rounded-md flex flex-col justify-center items-center gap-6 cursor-pointer transition border-gray-300"
    >
      {selected && (
        <div className="absolute top-2 right-2 bg-dark w-6 h-6 rounded-full flex items-center justify-center">
          <Check size={16} className="text-white" />
        </div>
      )}

      <p className="text-brand font-[380] tracking-normal text-[13px] text-center">
        {title}
      </p>
      <img src={imgSrc} alt={alt} className="h-16" />
    </div>
  );
};

export default Resource;
