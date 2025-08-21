import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessTab = () => {
  const [provision, setProvision] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savedData = useSelector((state) => state.propertyPage.businessDetails);

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
      <div className="px-6">
        <h3 className="px-5 py-[60px] text-brand">
          The Agreed power of my provision is:
        </h3>

        <div className="flex px-5 gap-5 mt-[-40px]">
          <button
            onClick={() => handleAnswer("provision", "Up to 25kVa (C-21)")}
            className={`px-6 py-2 rounded-md font-[350] min-w-[280px] whitespace-nowrap ${
              provision === "Up to 25kVa (C-21)"
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-brand"
            }`}
          >
            Up to 25kVa (C-21)
          </button>

          <button
            onClick={() =>
              handleAnswer("provision", "From 25 to 250kVa (C-22)")
            }
            className={`px-6 py-2 rounded-md font-[350] min-w-[280px] whitespace-nowrap ${
              provision === "From 25 to 250kVa (C-22)"
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-brand"
            }`}
          >
            From 25 to 250kVa (C-22)
          </button>

          <button
            onClick={() =>
              handleAnswer("provision", "Regardless of power & Night (C-23)")
            }
            className={`px-6 py-2 rounded-md font-[350] min-w-[280px] whitespace-nowrap ${
              provision === "Regardless of power & Night (C-23)"
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-brand"
            }`}
          >
            Regardless of power & Night (C-23)
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-[40px]">
        <button
          onClick={() => navigate("/")}
          className="text-[14px] mt-10 ms-[50px] px-8 py-2 border border-brand text-brand rounded-md flex items-center gap-2"
        >
          <ChevronLeft size={15} /> Previous
        </button>
        <button
          onClick={() => navigate("/second-form")}
          className="text-[14px] mt-10 me-[30px] px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-2"
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
    </>
  );
};

export default BusinessTab;
