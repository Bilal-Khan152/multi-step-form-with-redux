import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/route";

const BusinessTab = () => {
  const [provision, setProvision] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savedData = useSelector((state) => state.property.businessDetails);
    
  useEffect(() => {
    if (savedData) {
      setProvision(savedData.provision || "");
    }
  }, [savedData]);

  const handleAnswer = (key, value) => {
    if (key === "provision") setProvision(value);

    dispatch({
      type: "setBusinessDetails",
      payload: { [key]: value },
    });
  };

  return (
    <>
      <div className="">
        <h3 className=" font-[400] text-brand">
          The Agreed power of my provision is:
        </h3>

        <div className="flex flex-wrap gap-4 mt-[15px]">
          <button
            onClick={() => handleAnswer("provision", "Up to 25kVa (C-21)")}
            className={`cursor-pointer font-[400] px-4 py-2 rounded-md    whitespace-nowrap border-[1px] border-gray-200 ${
              provision === "Up to 25kVa (C-21)"
                ? "bg-dark text-white"
                : "bg-light text-brand"
            }`}
          >
            Up to 25kVa (C-21)
          </button>

          <button
            onClick={() =>
              handleAnswer("provision", "From 25 to 250kVa (C-22)")
            }
            className={`cursor-pointer px-4 py-2 rounded-md font-[400]  whitespace-nowrap border-[1px] border-gray-200  ${
              provision === "From 25 to 250kVa (C-22)"
                ? "bg-dark text-white"
                : "bg-light text-brand"
            }`}
          >
            From 25 to 250kVa (C-22)
          </button>

          <button
            onClick={() =>
              handleAnswer("provision", "Regardless of power & Night (C-23)")
            }
            className={` cursor-pointer px-4 py-2 rounded-md font-[400]  border-[1px] border-gray-200  whitespace-nowrap ${
              provision === "Regardless of power & Night (C-23)"
                ? "bg-dark text-white"
                : "bg-light text-brand"
            }`}
          >
            Regardless of power <br className="block sm:hidden "/> & Night (C-23)
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 mt-[75px] mb-[90px]">
        <button
          onClick={() => navigate("/")}
          className="w-full sm:w-auto min-w-[120px] text-[14px] px-5 py-2 cursor-pointer border border-brand text-brand rounded-md flex items-center justify-center gap-2"
        >
          <ChevronLeft size={15} /> Previous
        </button>
      
        <button
          onClick={() => navigate(ROUTES.APPLICATION.PACKAGE)}
          className="w-full sm:w-auto min-w-[120px] text-[14px] px-7 py-2 cursor-pointer bg-brand hover:bg-brand text-white rounded-md flex items-center justify-center gap-2"
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
      
    </>
  );
};

export default BusinessTab;
