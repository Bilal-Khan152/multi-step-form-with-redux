import React, { useState } from "react";
import ProgressIndicators from "../components/ProgressIndicators";
import { ChevronLeft, ChevronRight, Grid3X3, ExternalLink } from "lucide-react";
import day_home_flat from "../assets/day_home_flat.png";
import SecondFormPageCards from "../components/SecondFormPageCards";
import day_home_flexi_plus from "../assets/day_home_flexi_plus.png";
import day_home_flexi from "../assets/day_home_flexi.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Package = () => {
  const selectedPackage = useSelector((state) => state.package.packageType);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (type) => {
    dispatch({
      type: "setPackageType",
      payload: {
        packageType: type,
      },
    });
  };

  return (
    <div className="w-full ">
      <ProgressIndicators />
      <div className=" w-[60%]   mx-auto h-[180vh]">
        <div className="bg-white p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-2 ms-[20px]">
              <div className="inline-block bg-blue-100 px-18 py-3 rounded-md">
                <span className="text-brand font-medium">Daily</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-brand text-xl font-medium mb-3">
                  Choose the package that suits you
                </h2>
                <p className=" text-brand">Read the general conditions here</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-brand rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>

                <div className="flex gap-2">
                  <button className="w-8 h-8  border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                    <ChevronLeft size={15} className="w-5 h-5" />
                  </button>
                  <button className="w-8 h-8 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                    <ChevronRight size={15} className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <SecondFormPageCards
            imgSrc={day_home_flexi_plus}
            title="Volton Unique Flexi Plus"
            desc="Secure the lowestkilowatt-hour price on the energy market"
            isSelected={selectedPackage === "Volton Unique Flexi Plus"}
            onSelect={() => handleSelect("Volton Unique Flexi Plus")}
          />
          <SecondFormPageCards
            imgSrc={day_home_flat}
            title="Volton Unique Flat"
            desc="Keep a fixed charge on your account for 24 months"
            isSelected={selectedPackage === "Volton Unique Flat"}
            onSelect={() => handleSelect("Volton Unique Flat")}
          />
          <SecondFormPageCards
            imgSrc={day_home_flexi}
            title="Volton Unique Flexi"
            desc="Reduce your energy bill up to 43% for 24 months"
            isSelected={selectedPackage === "Volton Unique Flexi"}
            onSelect={() => handleSelect("Volton Unique Flexi")}
          />
        </div>
        <div className="flex justify-between  mt-[50px]  ">
          <button
            onClick={() => navigate("/first-form")}
            className="text-[14px]   px-8 py-2 border border-brand text-brand rounded-md flex items-center gap-2"
          >
            <ChevronLeft size={15} /> Previous
          </button>
          <button
            onClick={() => navigate("/second-form")}
            className="text-[14px]   px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-2"
          >
            Next <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
