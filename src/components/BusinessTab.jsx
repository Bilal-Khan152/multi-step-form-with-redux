import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../constants/route";
import NavigationButton from "./NavigationButton";
import { setBusinessDetails } from "../redux/actions/propertyActions";

const BusinessTab = () => {
  const [provision, setProvision] = useState("");
  const dispatch = useDispatch();

  const savedData = useSelector((state) => state.property.businessDetails);
  const isDisable = provision == "" ;

  useEffect(() => {
    if (savedData) {
      setProvision(savedData.provision || "");
    }
  }, [savedData]);

  const handleAnswer = (key, value) => {
    if (key === "provision") setProvision(value);

    dispatch(setBusinessDetails({ [key]: value }));
  };

  return (
    <>
      <div>
        <h3 className="text-brand-regular ">
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
            Regardless of power <br className="block sm:hidden " /> & Night
            (C-23)
          </button>
        </div>
      </div>
      <div className="form-nav ">
        <NavigationButton   disable={isDisable} prevPath="/" nextPath={ROUTES.APPLICATION.PACKAGE} />
      </div>
    </>
  );
};

export default BusinessTab;
