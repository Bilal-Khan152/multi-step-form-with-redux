import React, { useState } from "react";
import ProgressIndicators from "../components/ProgressIndicators";
import home from "../assets/home.png";
import company from "../assets/company.png";
import apartment from "../assets/apartment.png";
import PropertyTab from "../components/PropertyTab";
import HomeTab from "../components/HomeTab";
import BusinessTab from "../components/BusinessTab";
import ApartmentTab from "../components/ApartmentTab";
import { useDispatch } from "react-redux";

const Property = () => {
  const [selectedProperty, setSelectedProperty] = useState("home");
  const dispatch = useDispatch();

  const handlePropertyTabClick = (type) => {
    setSelectedProperty(type);
    dispatch({
      type: "setPropertyType",
      payload: type,
    });
  };

  return (
    <div className=" w-full">
      <ProgressIndicators />

      <div className=" w-[60%] mx-auto h-[180vh]">
        <div>
          <p className="px-14 py-[60px] text-brand">I'm interested in:</p>

          <div className="flex mt-[-20px] justify-center gap-[25px]">
            <div onClick={() => handlePropertyTabClick("home")}>
              <PropertyTab
                title="Home"
                imgSrc={home}
                alt="Home"
                isSelected={selectedProperty === "home"}
              />
            </div>

            <div onClick={() => handlePropertyTabClick("business")}>
              <PropertyTab
                title="The Business"
                imgSrc={company}
                alt="company"
                isSelected={selectedProperty === "business"}
              />
            </div>

            <div onClick={() => handlePropertyTabClick("apartment")}>
              <PropertyTab
                title="Common area of an apartment building"
                imgSrc={apartment}
                alt="apartment"
                isSelected={selectedProperty === "apartment"}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          {selectedProperty === "home" && (
            <div className="p-5  ">
              <HomeTab selected={selectedProperty} />
            </div>
          )}
          {selectedProperty === "business" && (
            <div className="p-5  ">
              <BusinessTab />
            </div>
          )}
          {selectedProperty === "apartment" && (
            <div className="p-5  ">
              <ApartmentTab />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Property;
