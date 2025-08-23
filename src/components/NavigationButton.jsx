import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavigationButton = ({ prevPath, nextPath }) => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(prevPath)} className="btn-outline ">
        <ChevronLeft size={15} /> Previous
      </button>

      <button onClick={() => navigate(nextPath)} className="btn-primary">
        Next <ChevronRight size={15} />
      </button>
    </>
  );
};

export default NavigationButton;
