import React from "react";

const InitialElectrification = () => {
  return (
    <div>
      <h2 className="text-brand font-semibold text-md lg:text-lg  mb-8">
        Necessary Documents:
      </h2>
      <ol className="list-decimal ml-5 space-y-2 mb-6">
        <li>
          <span className="font-semibold  text-sm lg:text-md  text-dark">
            Identity
          </span>
          <p className="text-xs lg:text-sm text-brand-regular text-brand-regular">
            Photocopy of ID (2 sides) or Passport or Residence Permit or
            Driver&apos;s License
          </p>
        </li>
        <li>
          <span className="font-semibold text-sm lg:text-md  text-dark">
            Connection contract with DEDDIE{" "}
          </span>
          <ul className=" text-xs lg:text-sm text-brand  ">
            <p className="text-xs lg:text-sm text-brand-regular text-brand-regular">
              Copy of Connection contract with DEDDIE
            </p>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default InitialElectrification;
