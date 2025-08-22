import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApartmentTab = () => {
  const [alreadyCustomer, setAlreadyCustomer] = useState("");
  const [inWhichServiceInterested, setInWhichServiceInterested] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savedData = useSelector((state) => state.propertyPage.apartmentDetails);

  useEffect(() => {
    if (savedData) {
      setAlreadyCustomer(savedData.alreadyCustomer || "");
      setInWhichServiceInterested(savedData.inWhichServiceInterested || "");
    }
  }, [savedData]);

  const handleAnswer = (field, value) => {
    if (field === "alreadyCustomer") setAlreadyCustomer(value);
    if (field === "inWhichServiceInterested")
      setInWhichServiceInterested(value);

    dispatch({
      type: "setApartmentDetails",
      payload: { [field]: value },
    });
  };

  return (
    <div>
      <h3 className="font-[400] text-brand">Already a customer?:</h3>

      <div className="flex  gap-5 mt-[15px]">
        <button
          onClick={() => handleAnswer("alreadyCustomer", "yes")}
          className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
            alreadyCustomer === "yes"
              ? "bg-green-800 text-white"
              : "bg-light text-brand"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer("alreadyCustomer", "no")}
          className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
            alreadyCustomer === "no"
              ? "bg-green-800 text-white"
              : "bg-light text-brand"
          }`}
        >
          No
        </button>
      </div>

      <h3 className="font-[400] mt-[75px] text-brand">I'm interested in:</h3>

      {/* Question 2 */}
      <div className="flex flex-wrap mt-[15px]  gap-5">
        {["Change provider", "New connection", "Re-Electrification"].map(
          (option) => (
            <button
              key={option}
              onClick={() => handleAnswer("inWhichServiceInterested", option)}
              className={`cursor-pointer px-4 py-2 rounded-md font-[400] border-[1px] border-gray-200 whitespace-nowrap ${
                inWhichServiceInterested === option
                  ? "bg-green-800 text-white"
                  : "bg-light text-brand"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 mt-[75px] mb-[90px]">
        <button
          onClick={() => navigate("/")}
          className="w-full sm:w-auto min-w-[120px] text-[14px] px-5 py-2 cursor-pointer border border-brand text-brand rounded-md flex items-center justify-center gap-2"
        >
          <ChevronLeft size={15} /> Previous
        </button>

        <button
          onClick={() => navigate("/second-form")}
          className="w-full sm:w-auto min-w-[120px] text-[14px] px-7 py-2 cursor-pointer bg-brand hover:bg-brand text-white rounded-md flex items-center justify-center gap-2"
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default ApartmentTab;
