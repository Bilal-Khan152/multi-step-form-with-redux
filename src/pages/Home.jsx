import React from "react";
import electricity from "../assets/electricity_icon.png";
import gas from "../assets/gas_icon.png";
import electricity_gas from "../assets/electricity_gas_icon.png";
import { ChevronRight } from "lucide-react";
import Resource from "../components/Resource";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const selectedResource = useSelector((state) => state.homePage.resourceType);
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
    <div>
      <div className="flex flex-col items-center  justify-center h-screen">
        <div className="flex justify-center items-center gap-[100px]">
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
            title="Electricity and Natural  Gas"
            imgSrc={electricity_gas}
            alt="electricity gas logo"
            selected={selectedResource === "electricity_gas"}
            onSelect={() => handleSelect("electricity_gas")}
          />
        </div>

        <button
          onClick={() => navigate("/first-form")}
          disabled={!selectedResource}
          className={`text-[14px] mt-10 ms-[630px] px-8 py-2 rounded-md flex items-center gap-2 transition-colors 
            ${
              selectedResource
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer  text-white"
                : "bg-blue-300 cursor-not-allowed text-white  "
            }`}
        >
          Next
          <ChevronRight className="ms-[-9px] mt-[2px]" size={15} />
        </button>
      </div>
    </div>
  );
};

export default Home;
