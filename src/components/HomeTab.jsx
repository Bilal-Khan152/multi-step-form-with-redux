import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../constant/route";
import NavigationButton from "./NavigationButton";
import { setHomeDetails } from "../redux/actions/propertyActions";

const HomeTab = () => {
  const [alreadyCustomer, setAlreadyCustomer] = useState("");
  const [isInterestedInPowerSupply, setIsInterestedInPowerSupply] =
    useState("");
  const [service, setService] = useState("");
  const [counter, setCounter] = useState("");

  const dispatch = useDispatch();

  const savedData = useSelector((state) => state.property.homeDetails);
// console.log("home details" , savedData) ;
  useEffect(() => {
    if (savedData) {
      setAlreadyCustomer(savedData.alreadyCustomer || "");
      setIsInterestedInPowerSupply(savedData.isInterestedInPowerSupply || "");
      setService(savedData.service || "");
      setCounter(savedData.counter || "");
    }
  }, [savedData]);

  const handleAnswer = (key, value) => {
    if (key === "alreadyCustomer") setAlreadyCustomer(value);
    if (key === "isInterestedInPowerSupply")
      setIsInterestedInPowerSupply(value);
    if (key === "service") setService(value);
    if (key === "counter") setCounter(value);

    dispatch(setHomeDetails({ [key]: value }));
  };

  return (
    <>
      <div>
        <h3 className="text-brand-regular">Already a customer?</h3>
        <div className="flex gap-5 mt-[15px]">
          <button
            onClick={() => handleAnswer("alreadyCustomer", "yes")}
            className={`cursor-pointer px-6 py-2 rounded-md border-[1px] border-gray-200 font-[400] ${
              alreadyCustomer === "yes"
                ? "bg-dark text-white"
                : "bg-light text-brand"
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("alreadyCustomer", "no")}
            className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
              alreadyCustomer === "no"
                ? "bg-dark text-white"
                : "bg-light text-brand"
            }`}
          >
            No
          </button>
        </div>
      </div>

      <div className="mt-[75px]">
        <h3 className="text-brand-regular">
          Interested in a second power supply?
        </h3>
        <div className="flex  gap-5 mt-[15px]">
          <button
            onClick={() => handleAnswer("isInterestedInPowerSupply", "yes")}
            className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
              isInterestedInPowerSupply === "yes"
                ? "bg-dark text-white"
                : "bg-light text-brand"
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("isInterestedInPowerSupply", "no")}
            className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
              isInterestedInPowerSupply === "no"
                ? "bg-dark text-white"
                : "bg-light text-brand"
            }`}
          >
            No
          </button>
        </div>
      </div>

      <div className="mt-[75px]">
        <h3 className="text-brand-regular">I'm interested in:</h3>
        <div className="flex flex-wrap  gap-5 mt-[15px]">
          {["Change provider", "New Connection", "Re-Electrification"].map(
            (option) => (
              <button
                key={option}
                onClick={() => handleAnswer("service", option)}
                className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
                  service === option
                    ? "bg-dark text-white"
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
        <h3 className="text-brand-regular">
          Do you have a Day or Night counter?
        </h3>
        <div className="flex  gap-5 mt-[15px]">
          {["Daily", "Nocturnal"].map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer("counter", option)}
              className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
                counter === option
                  ? "bg-dark text-white"
                  : "bg-light text-brand"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="form-nav">
        <NavigationButton prevPath="/" nextPath={ROUTES.APPLICATION.PACKAGE} />
      </div>
    </>
  );
};

export default HomeTab;
