import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HomeTab = () => {
  const [alreadyCustomer, setAlreadyCustomer] = useState("");
  const [isInterestedInPowerSupply, setIsInterestedInPowerSupply] =
    useState("");
  const [inWhichServiceInterested, setInWhichServiceInterested] = useState("");
  const [whichCounter, setWhichCounter] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savedData = useSelector((state) => state.propertyPage.homeDetails);

  useEffect(() => {
    if (savedData) {
      setAlreadyCustomer(savedData.alreadyCustomer || "");
      setIsInterestedInPowerSupply(savedData.isInterestedInPowerSupply || "");
      setInWhichServiceInterested(savedData.inWhichServiceInterested || "");
      setWhichCounter(savedData.whichCounter || "");
    }
  }, [savedData]);

  const handleAnswer = (key, value) => {
    if (key === "alreadyCustomer") setAlreadyCustomer(value);
    if (key === "isInterestedInPowerSupply")
      setIsInterestedInPowerSupply(value);
    if (key === "inWhichServiceInterested") setInWhichServiceInterested(value);
    if (key === "whichCounter") setWhichCounter(value);

    dispatch({
      type: "setHomeDetails",
      payload: { [key]: value },
    });
  };

  return (
    <>
      <div>
        <h3 className="text-brand font-[400]">Already a customer?</h3>
        <div className="flex gap-5 mt-[15px]">
          <button
            onClick={() => handleAnswer("alreadyCustomer", "yes")}
            className={`cursor-pointer px-6 py-2 rounded-md border-[1px] border-gray-200 font-[400] ${
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
      </div>

      <div className="mt-[75px]">
        <h3 className="font-[400] text-brand">
          Interested in a second power supply?
        </h3>
        <div className="flex  gap-5 mt-[15px]">
          <button
            onClick={() => handleAnswer("isInterestedInPowerSupply", "yes")}
            className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
              isInterestedInPowerSupply === "yes"
                ? "bg-green-800 text-white"
                : "bg-light text-brand"
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("isInterestedInPowerSupply", "no")}
            className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
              isInterestedInPowerSupply === "no"
                ? "bg-green-800 text-white"
                : "bg-light text-brand"
            }`}
          >
            No
          </button>
        </div>
      </div>

      <div className="mt-[75px]">
        <h3 className="font-[400] text-brand">I'm interested in:</h3>
        <div className="flex flex-wrap  gap-5 mt-[15px]">
          {["Change provider", "New connection", "Re-Electrification"].map(
            (option) => (
              <button
                key={option}
                onClick={() => handleAnswer("inWhichServiceInterested", option)}
                className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
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
      </div>

      <div className="mt-[75px]">
        <h3 className="font-[400] text-brand">Counter type?</h3>
        <div className="flex  gap-5 mt-[15px]">
          {["Daily", "Nocturnal"].map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer("whichCounter", option)}
              className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
                whichCounter === option
                  ? "bg-green-800 text-white"
                  : "bg-light text-brand"
              }`}
            >
              {option}
            </button>
          ))}
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
          onClick={() => navigate("/second-form")}
          className="w-full sm:w-auto min-w-[120px] text-[14px] px-7 py-2 cursor-pointer bg-brand hover:bg-brand text-white rounded-md flex items-center justify-center gap-2"
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
    </>
  );
};

export default HomeTab;
