import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../constants/route";
import NavigationButton from "./NavigationButton";
import { setApartmentDetails } from "../redux/actions/propertyActions";

const services = ["Change provider", "New connection", "Re-Electrification"];

const ApartmentTab = () => {
  const [alreadyCustomer, setAlreadyCustomer] = useState(null);
  const [service, setService] = useState("");

  const dispatch = useDispatch();

  const savedData = useSelector((state) => state.property.apartmentDetails);
  const isDisable = alreadyCustomer === null || service === "";

  console.log("Disable", isDisable);

  useEffect(() => {
    if (savedData) {
      setAlreadyCustomer(savedData.alreadyCustomer ?? null);
      setService(savedData.service ?? "");
    }
  }, [savedData]);

  const handleAnswer = (field, value) => {
    if (field === "alreadyCustomer") setAlreadyCustomer(value);
    if (field === "service") setService(value);

    dispatch(setApartmentDetails({ [field]: value }));
  };

  return (
    <div>
      <h3 className="text-brand-regular">Already a customer?</h3>

      <div className="flex  gap-5 mt-[15px]">
        <button
          onClick={() => handleAnswer("alreadyCustomer", true)}
          className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
            alreadyCustomer === true
              ? "bg-dark text-white"
              : "bg-light text-brand"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer("alreadyCustomer", false)}
          className={`cursor-pointer px-6 py-2 rounded-md font-[400] border-[1px] border-gray-200 ${
            alreadyCustomer === false
              ? "bg-dark text-white"
              : "bg-light text-brand"
          }`}
        >
          No
        </button>
      </div>

      <h3 className="font-[400] mt-[75px] text-brand-regular ">
        I'm interested in:
      </h3>

      <div className="flex flex-wrap mt-[15px]  gap-5">
        {services.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer("service", option)}
            className={`cursor-pointer px-4 py-2 rounded-md font-[400] border-[1px] border-gray-200 whitespace-nowrap ${
              service === option ? "bg-dark text-white" : "bg-light text-brand"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="form-nav">
        <NavigationButton
          disable={isDisable}
          prevPath="/"
          nextPath={ROUTES.APPLICATION.PACKAGE}
        />
      </div>
    </div>
  );
};

export default ApartmentTab;
