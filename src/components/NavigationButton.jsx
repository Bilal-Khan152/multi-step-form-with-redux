import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavigationButton = ({ prevPath, nextPath, disable }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(prevPath)}
        className="btn-outline flex items-center gap-1"
      >
        <ChevronLeft size={15} /> Previous
      </button>

      <button
        onClick={() => navigate(nextPath)}
        disabled={disable}
        className="btn-primary disabled:border-1 disabled:border-blue-300 flex items-center gap-1 disabled:bg-blue-300 disabled:cursor-not-allowed   disabled:text-white"
      >
        Next <ChevronRight size={15} />
      </button>
    </>
  );
};

export default NavigationButton;
