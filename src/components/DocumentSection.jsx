import React, { useState } from "react";
import {
  SET_PROVIDER_MY_NAME,
  SET_PROVIDER_OTHER_NAME,
  SET_INITIAL_ELECTRIFICATION,
  SET_RE_ELECTRIFICTION,
} from "../constants/tabs";
import ChnageProviderInMyName from "./ChnageProviderInMyName";
import ChangeProviderOtherName from "./ChangeProviderOtherName";
import InitialElectrification from "./InitialElectrification";
import ReElectrification from "./ReElectrification";

const DocumentSection = () => {
  const [activeTab, setActiveTab] = useState(SET_PROVIDER_MY_NAME);

  const tabClasses = (tab) =>
    `lg:px-6 lg:py-8 px-1 py-1 text-[10px] md:text-xs  rounded-t-md font-medium lg:text-sm ${
      activeTab === tab
        ? "bg-brand text-white border border-gray-300 border-b-0 z-10 -mb-[20px]"
        : "border border-gray-300 text-brand bg-white hover:bg-gray-100"
    }`;

  return (
    <div className="lg:w-[110%]   mt-10">
      <div className="flex gap-[10px]   ">
        <button
          onClick={() => setActiveTab(SET_PROVIDER_MY_NAME)}
          className={tabClasses(SET_PROVIDER_MY_NAME)}
        >
          Change provider
          <br />
          <span className="text-md font-[400]">The meter is in my name</span>
        </button>

        <button
          onClick={() => setActiveTab(SET_PROVIDER_OTHER_NAME)}
          className={tabClasses(SET_PROVIDER_OTHER_NAME)}
        >
          Change provider
          <br />
          <span className="text-md font-[400]">
            The meter is in another name
          </span>
        </button>

        <button
          onClick={() => setActiveTab(SET_INITIAL_ELECTRIFICATION)}
          className={tabClasses(SET_INITIAL_ELECTRIFICATION)}
        >
          Initial Electrification/
          <br />
          <span className="text-md font-[400]">New connection</span>
        </button>

        <button
          onClick={() => setActiveTab(SET_RE_ELECTRIFICTION)}
          className={tabClasses(SET_RE_ELECTRIFICTION)}
        >
          Re-electrification
        </button>
      </div>

      <div className="border border-gray-300 rounded-b-md rounded-tr-md p-6 bg-white mt-[20px]">
        {activeTab === SET_PROVIDER_MY_NAME && <ChnageProviderInMyName />}

        {activeTab === SET_PROVIDER_OTHER_NAME && <ChangeProviderOtherName />}

        {activeTab === SET_INITIAL_ELECTRIFICATION && (
          <InitialElectrification />
        )}

        {activeTab === SET_RE_ELECTRIFICTION && <ReElectrification />}
      </div>
    </div>
  );
};

export default DocumentSection;
