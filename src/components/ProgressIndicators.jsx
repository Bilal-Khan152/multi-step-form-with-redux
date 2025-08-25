import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const steps = [
  { path: "/application/property", label: "1" },
  { path: "/application/package", label: "2" },
  { path: "/application/warranty", label: "3" },
  { path: "/application/email-verification", label: "4" },
];

const ProgressIndicators = () => {
  const location = useLocation();
  const currentIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );

  return (
    <div className="bg-white border-b border-gray-200 py-7 ">
      <div className="flex gap-10 sm:flex-row flex-col  lg:gap-40 items-center">
      <div className="max-w-7xl flex flex-col xl:flex-row items-center  xl:gap-[208px] gap-6   ">

        
        <button className="sm:ml-[65px]  flex items-center gap-2 text-brand hover:text-brand transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">
            <Link to="/">Back to home page</Link>
          </span>
        </button>
         

        
      </div>
      <div className="flex items-center gap-2 sm:gap-4   xl:gap-6  flex-wrap justify-center">
          {steps.map((step, index) => {
            const isCompleted = index < currentIndex;
            const isActive = index === currentIndex;

            return (
              <React.Fragment key={step.path}>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium 
                    ${isActive ? "bg-brand text-white" : ""}
                    ${isCompleted ? "bg-dark text-white" : ""}
                    ${
                      !isActive && !isCompleted
                        ? "border border-brand text-brand"
                        : ""
                    }
                  `}
                >
                  {step.label}
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`w-8 sm:w-12 md:w-[60px]  lg:w-[100px]  xl:w-[160px] h-0.5 
                      ${isCompleted ? "bg-dark" : "bg-gray-300"}
                    `}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        </div>
    </div>
  );
};

export default ProgressIndicators;
