import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DocumentSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const navigate = useNavigate();

  const tabClasses = (tab) =>
    `px-4 py-8 rounded-t-md font-medium text-sm ${
      activeTab === tab
        ? "bg-brand text-white border border-gray-300 border-b-0 z-10 -mb-[20px]"
        : "border border-gray-300 text-brand bg-white hover:bg-gray-100"
    }`;

  return (
    <div className="w-[100%] mx-auto mt-10">
      {/* Tabs */}  
      <div className="flex   gap-[7px]  ">
        <button
          onClick={() => setActiveTab("tab1")}
          className={tabClasses("tab1")}
        >
          Change provider
          <br />
          <span className="text-md font-[400]">The meter is in my name</span>
        </button>

        <button
          onClick={() => setActiveTab("tab2")}
          className={tabClasses("tab2")}
        >
          Change provider
          <br />
          <span className="text-md font-[400]">
            The meter is in another name
          </span>
        </button>

        <button
          onClick={() => setActiveTab("tab3")}
          className={tabClasses("tab3")}
        >
          Initial Electrification/
          <br />
          <span className="text-md font-[400]">New connection</span>
        </button>

        <button
          onClick={() => setActiveTab("tab4")}
          className={tabClasses("tab4")}
        >
          Re-electrification
        </button>
      </div>

      {/* Content */}
      <div className="border border-gray-300 rounded-b-md rounded-tr-md p-6 bg-white mt-[20px]">
        {activeTab === "tab1" && (
          <div>
            <h2 className="text-brand font-semibold text-lg mb-8">
              Necessary Documents:
            </h2>
            <ol className="list-decimal ml-5 space-y-2 mb-6">
              <li>
                <span className="font-semibold  text-green-800">Identity</span>
                <p className="  text-sm text-brand">
                  Photocopy of ID (2 sides) or Passport or Residence Permit or
                  Driver&apos;s License
                </p>
              </li>
              <li>
                <span className="font-semibold text-green-800">Account</span>
                <ul className="  text-sm text-brand   list-disc">
                  <li>Copy of last bill</li>
                  <li>Proof of payment if the due date has passed</li>
                </ul>
              </li>
            </ol>
          </div>
        )}

        {activeTab === "tab2" && (
          <div>
            <h2 className="text-brand font-semibold text-lg mb-8">
              Necessary Documents:
            </h2>
            <ol className="list-decimal ml-5 space-y-2 mb-6">
              <li>
                <span className="font-semibold  text-green-800">Identity</span>
                <p className="  text-sm text-brand">
                  Photocopy of ID (2 sides) or Passport or Residence Permit or
                  Driver&apos;s License
                </p>
              </li>
              <li>
                <span className="font-semibold text-green-800">Account</span>
                <ul className="  text-sm text-brand   list-disc">
                  <li>Copy of last bill</li>
                  <li>Proof of payment if the due date has passed</li>
                </ul>
              </li>
            </ol>
          </div>
        )}

        {activeTab === "tab3" && (
          <div>
            <h2 className="text-brand font-semibold text-lg mb-8">
              Necessary Documents:
            </h2>
            <ol className="list-decimal ml-5 space-y-2 mb-6">
              <li>
                <span className="font-semibold  text-green-800">Identity</span>
                <p className="  text-sm text-brand">
                  Photocopy of ID (2 sides) or Passport or Residence Permit or
                  Driver&apos;s License
                </p>
              </li>
              <li>
                <span className="font-semibold text-green-800">
                  Connection contract with DEDDIE{" "}
                </span>
                <ul className="  text-sm text-brand  ">
                  <p className="  text-sm text-brand">
                    Copy of Connection contract with DEDDIE
                  </p>
                </ul>
              </li>
            </ol>
          </div>
        )}

        {activeTab === "tab4" && (
          <>
            {" "}
            <div>
              <h2 className="text-blue-700 font-semibold text-lg mb-4">
                Necessary Documents for the Owner
              </h2>
              <ol className="list-decimal ml-5 space-y-2 mb-6">
                <li>
                  <span className="font-semibold  text-green-800">
                    Identity
                  </span>
                  <p className="  text-sm text-brand">
                    Photocopy of ID (2 sides) or Passport or Residence Permit or
                    Driver&apos;s License
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-green-800">Account</span>
                  <ul className="  text-sm text-brand   list-disc">
                    <p className="  text-sm text-brand">Copy of last bill</p>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold  text-green-800">
                    Copy of E9
                  </span>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-blue-700 font-semibold text-lg mb-4">
                Necessary Documents for the Tenant
              </h2>
              <ol className="list-decimal ml-5 space-y-2 mb-6">
                <li>
                  <span className="font-semibold  text-green-800">
                    Identity
                  </span>
                  <p className="  text-sm text-brand">
                    Photocopy of ID (2 sides) or Passport or Residence Permit or
                    Driver&apos;s License
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-green-800">Account</span>
                  <ul className="  text-sm text-brand   list-disc">
                    <p className="  text-sm text-brand">Copy of last bill</p>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold  text-green-800">
                    Copy of TAXI lease
                  </span>
                </li>
              </ol>
            </div>
          </>
        )}
      </div>

  
    </div>
  );
};

export default DocumentSection;
