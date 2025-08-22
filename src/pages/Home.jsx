import React from "react";
import electricity from "../assets/electricity_icon.png";
import gas from "../assets/gas_icon.png";
import electricity_gas from "../assets/electricity_gas_icon.png";
import { ChevronRight } from "lucide-react";
import Resource from "../components/Resource";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/route";

const Home = () => {
  const selectedResource = useSelector((state) => state.resource.resourceType);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (type) => {
    dispatch({
      type: "setResourceType",
      payload: {
        resourceType: type,
      },
    });
  };

  return (
    <div className="flex   flex-col items-center justify-center px-4 sm:px-2 lg:px-20 py-[20px]">
      <div className="grid grid-cols-1 [@media(min-width:400px)_and_(max-width:767px)]:grid-cols-2 md:grid-cols-3 justify-items-center gap-8 md:gap-[100px] w-full">
        <Resource
          title="Electricity"
          imgSrc={electricity}
          alt="electricity logo"
          selected={selectedResource === "electricity"}
          onSelect={() => handleSelect("electricity")}
        />
        <Resource
          title="Natural Gas"
          imgSrc={gas}
          alt="gas logo"
          selected={selectedResource === "gas"}
          onSelect={() => handleSelect("gas")}
        />
        <Resource
          title="Electricity and Natural Gas"
          imgSrc={electricity_gas}
          alt="electricity gas logo"
          selected={selectedResource === "electricity_gas"}
          onSelect={() => handleSelect("electricity_gas")}
        />
      </div>

      <button
        onClick={() => navigate(ROUTES.APPLICATION.PROPERTY)}
        disabled={!selectedResource}
        className={`mt-8 md:mt-10 px-6 md:px-8 py-2 rounded-md flex items-center gap-2 transition-colors
    mx-auto md:mx-0 md:ms-[630px]
    ${
      selectedResource
        ? "bg-brand hover:bg-brand cursor-pointer text-white"
        : "bg-blue-300 cursor-not-allowed text-white"
    }`}
      >
        Next
        <ChevronRight className="mt-[2px]" size={15} />
      </button>
    </div>
  );
};

export default Home;
