import Reac from "react";
import { useDispatch, useSelector } from "react-redux";
import PropertyTab from "../components/PropertyTab";
import HomeTab from "../components/HomeTab";
import BusinessTab from "../components/BusinessTab";
import ApartmentTab from "../components/ApartmentTab";
import { setProperty } from "../redux/actions/propertyActions";
import home from "../assets/images/home.png";
import company from "../assets/images/company.png";
import apartment from "../assets/images/apartment.png";

const Property = () => {
  const selectedProperty = useSelector((state) => state.property.propertyType);

  const dispatch = useDispatch();

  const handlePropertyTabClick = (type) => {
    dispatch(setProperty(type));
  };

  return (
    <div className=" w-full">
      <div className=" w-[65%] mx-auto ">
        <div>
          <p className="px-4 py-[60px] text-brand-regular">
            I'm interested in:
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-[28px] mt-[-20px]">
            <div onClick={() => handlePropertyTabClick("home")}>
              <PropertyTab
                title="Home"
                imgSrc={home}
                alt="Home"
                isSelected={selectedProperty === "home"}
                onSelect={() => handlePropertyTabClick("home")}
              />
            </div>

            <div onClick={() => handlePropertyTabClick("business")}>
              <PropertyTab
                title="The Business"
                imgSrc={company}
                alt="company"
                isSelected={selectedProperty === "business"}
                onSelect={() => handlePropertyTabClick("business")}
              />
            </div>

            <div onClick={() => handlePropertyTabClick("apartment")}>
              <PropertyTab
                title="Common area of an apartment building"
                imgSrc={apartment}
                alt="apartment"
                isSelected={selectedProperty === "apartment"}
                onSelect={() => handlePropertyTabClick("apartment")}
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
