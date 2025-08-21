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
  const savedData = useSelector(
    (state) => state.propertyPage.homeDetails
  );

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
      <div className="p-6">
        <h3 className="px-5 py-[60px] text-brand">Already a customer?</h3>
        <div className="flex px-5 gap-5 mt-[-40px]">
          <button
            onClick={() => handleAnswer("alreadyCustomer", "yes")}
            className={`px-6 py-2 rounded-md font-[350] ${
              alreadyCustomer === "yes"
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-brand"
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("alreadyCustomer", "no")}
            className={`px-6 py-2 rounded-md font-[350] ${
              alreadyCustomer === "no"
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-brand"
            }`}
          >
            No
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="px-5 py-[60px] text-brand">
          Interested in a second power supply?
        </h3>
        <div className="flex px-5 gap-5 mt-[-40px]">
          <button
            onClick={() => handleAnswer("isInterestedInPowerSupply", "yes")}
            className={`px-6 py-2 rounded-md ${
              isInterestedInPowerSupply === "yes"
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-brand"
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("isInterestedInPowerSupply", "no")}
            className={`px-6 py-2 rounded-md ${
              isInterestedInPowerSupply === "no"
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-brand"
            }`}
          >
            No
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="px-5 py-[60px] text-brand">I'm interested in:</h3>
        <div className="flex px-5 gap-5 mt-[-40px]">
          {["Change provider", "New connection", "Re-Electrification"].map(
            (option) => (
              <button
                key={option}
                onClick={() => handleAnswer("inWhichServiceInterested", option)}
                className={`px-6 py-2 rounded-md ${
                  inWhichServiceInterested === option
                    ? "bg-green-800 text-white"
                    : "bg-gray-100 text-brand"
                }`}
              >
                {option}
              </button>
            )
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="px-5 py-[60px] text-brand">Counter type?</h3>
        <div className="flex px-5 gap-5 mt-[-40px]">
          {["Daily", "Nocturnal"].map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer("whichCounter", option)}
              className={`px-6 py-2 rounded-md ${
                whichCounter === option
                  ? "bg-green-800 text-white"
                  : "bg-gray-100 text-brand"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
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

export default HomeTab;
