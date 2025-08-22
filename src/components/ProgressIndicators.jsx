import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProgressIndicators = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl flex flex-col xl:flex-row items-center xl:gap-[208px] gap-6 ms-4 md:ms-[51px]">
       
        <button className="flex items-center gap-2 text-brand hover:text-brand transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">
            <Link to="/">Back to home page</Link>
          </span>
        </button>

 
        <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
          <div className="flex items-center justify-center w-8 h-8 bg-brand text-white rounded-full text-sm font-medium">
            1
          </div>

          <div className="bg-gray-300 w-8 sm:w-12 md:w-[130px] h-0.5"></div>

          <div className="flex items-center justify-center w-8 h-8 border-brand border text-brand rounded-full text-sm font-medium">
            2
          </div>

          <div className="bg-gray-300 w-8 sm:w-12 md:w-[130px] h-0.5"></div>

          <div className="flex items-center justify-center w-8 h-8 border-brand border text-brand rounded-full text-sm font-medium">
            3
          </div>

          <div className="bg-gray-300 w-8 sm:w-12 md:w-[130px] h-0.5"></div>

          <div className="flex items-center justify-center w-8 sm:w-8 h-8 border-brand border text-brand rounded-full text-sm font-medium">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicators;
