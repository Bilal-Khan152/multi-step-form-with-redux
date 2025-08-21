import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProgressIndicators = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl  gap-[190px] flex items-center  justify-evenly">
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">
            <Link to="/">Back to home page</Link>
          </span>
        </button>

        <div className="flex items-center gap-8">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium">
            1
          </div>

          <div className="bg-gray-300 w-[150px] h-0.5 "></div>

          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full text-sm font-medium">
            2
          </div>

          <div className="bg-gray-300 w-[150px] h-0.5 "></div>

          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full text-sm font-medium">
            3
          </div>

          <div className="bg-gray-300 w-[150px] h-0.5 "></div>

          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full text-sm font-medium">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicators;
